import uuid

import os
from flask import (
    Blueprint,
    render_template,
    request,
    redirect,
    session,
    url_for,
    send_from_directory)

import flask_config
from models.blog import Blog
from models.comment import Comment
from models.password import Password
from routes import current_user, login_required, new_csrf_token, csrf_required
from models.user import User
from utils import salted_password, log, send_mail

routes_user = Blueprint('routes_user', __name__)


@routes_user.route('/user/login', methods=['POST'])
@csrf_required
def login():
    form = request.form
    u, message = User.login(form)
    if u.is_guest():
        token = new_csrf_token()
        return render_template('routes_user/user_login.html', u=u, message=message, token=token)
    else:
        session['user_id'] = u.id
        return redirect(url_for('routes_blog.index'))


@routes_user.route('/user/login/view')
def login_view():
    u = current_user()
    token = new_csrf_token()
    return render_template('routes_user/user_login.html', u=u, message='', token=token)


@routes_user.route('/user/register', methods=['POST'])
def register():
    form = request.form
    u, message = User.register(form)
    if u.is_guest():
        return render_template('routes_user/user_register.html', message=message, u=u)
    else:
        return redirect(url_for('routes_user.login_view'))


@routes_user.route('/user/register/view')
def register_view():
    u = current_user()
    return render_template('routes_user/user_register.html', u=u, message='')


@routes_user.route('/user/password/view')
def password_view():
    u = current_user()
    return render_template('routes_user/user_password.html', u=u)


@routes_user.route('/user/search/pass', methods=["POST"])
def user_password():
    email = request.form['email']
    u = User.find_by(email=email)
    uuid_str = str(uuid.uuid4())
    if u:
        print(u.username, uuid_str)
        message = '<a href="{}/user/password/reset/view?p={}">点此重置密码</a>'.format(flask_config.ip, uuid_str)
        send_mail(message, u.username, email)

        form = {}
        Password.add(form, username=u.username, uuid=uuid_str)
        return redirect(url_for('routes_user.password_send_view'))
    else:
        return redirect(url_for('routes_user.password_view'))


@routes_user.route('/user/password/send/view')
def password_send_view():
    u = current_user()
    return render_template('routes_user/user_password_send.html', u=u)


@routes_user.route('/user/password/reset/view')
def password_reset_view():
    uuid_str = request.args['p']
    u = Password.find_by(uuid=uuid_str)
    if u:
        return render_template('routes_user/user_password_reset.html', u=u)
    else:
        u = current_user()
        return redirect(url_for('routes_blog.index', u=u))


@routes_user.route('/user/password/reset', methods=["POST"])
def password_reset():
    username, p1, p2 = request.form['user'], request.form['p1'], request.form['p2']
    if (p1 == p2) and (len(p1) > 2):
        u = User.find_by(username=username)
        # Password 对该model添加时限或者删除
        u.password = salted_password(p1, username)
        u.save()
        return redirect(url_for('routes_user.login_view'))
    else:
        return redirect(url_for('routes_user.password_send_view'))


@routes_user.route('/user/setting/view')
@login_required
def user_setting_view():
    u = current_user()
    return render_template('routes_user/user_setting.html', u=u, v=u)


@routes_user.route('/user/setting', methods=["POST"])
@login_required
def user_setting():
    u = current_user()
    form = request.form.to_dict()
    form['id'] = u.id
    User.update(form)
    return redirect(url_for('routes_user.user_setting_view'))


@routes_user.route('/user/setting_password', methods=["POST"])
@login_required
def setting_password():
    u = current_user()
    form = request.form.to_dict()
    old_pass = form['old_pass']
    new_pass = form['new_pass']
    if u.password == salted_password(old_pass, u.username):
        log('密码修改成功')
        u.password = salted_password(new_pass, u.username)
        u.save()
    return redirect(url_for('routes_user.user_setting_view'))


def valid_suffix(suffix):
    valid_type = ['jpg', 'png', 'jpeg']
    return suffix in valid_type


@routes_user.route('/user/setting_pic', methods=["POST"])
@login_required
def setting_pic():
    log('pic uploads')
    file = request.files['pic']
    suffix = file.filename.split('.')[-1]
    if valid_suffix(suffix):
        filename = '{}.{}'.format(str(uuid.uuid4()), suffix)
        file.save(os.path.join('user_image', filename))
        u = current_user()
        form = dict(
            id=u.id,
            user_image='/uploads/{}'.format(filename)
        )
        User.update(form)
    return redirect(url_for("routes_user.user_setting_view"))


@routes_user.route("/uploads/<filename>")
def uploads(filename):
    return send_from_directory('user_image', filename)


@routes_user.route("/pic1/<filename>")
def pic1(filename):
    return send_from_directory('pic1', filename)


@routes_user.route("/pic2/<filename>")
def pic2(filename):
    return send_from_directory('pic2', filename)


@routes_user.route("/pic3/<filename>")
def pic3(filename):
    return send_from_directory('pic3', filename)


def blog_comment_recent(v):
    # 拿到reply_list，并翻转
    comment_list = Comment.find_all(user_id=v.id)
    comment_list.reverse()
    # 筛选reply_list的topic_id
    blog_id_list = []
    for i in comment_list:
        if i.blog_id not in blog_id_list:
            blog_id_list.append(i.blog_id)
    # 通过topic_id拿到对应的topic
    blog_list = []
    for i in blog_id_list:
        blog_list.append(Blog.find(i))
    return blog_list


@routes_user.route('/user/profile')
def user_profile():
    user_id = request.args['user_id']
    if user_id == '':
        return redirect(url_for('routes_user.login_view'))
    else:
        v = User.find(user_id)
        u = current_user()

        blogs1 = Blog.find_all(user_id=v.id)
        blogs1.reverse()

        blogs2 = blog_comment_recent(v)
        return render_template('routes_user/user_profile.html', u=u, v=v, blogs1=blogs1[:5], blogs2=blogs2[:5])
