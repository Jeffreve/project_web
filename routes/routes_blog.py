from functools import wraps

from flask import (
    Blueprint,
    render_template,
    request,
    redirect,
    url_for
)

from models.board import Board
from models.comment import Comment
from models.blog import Blog
from models.mail import Mail
from models.user import User
from routes import current_user, login_required, request_data, csrf_required, new_csrf_token
from utils import log

routes_blog = Blueprint('routes_blog', __name__)


def blog_samelogin_required(route_function):
    @wraps(route_function)
    def f():
        data, u = request_data()
        blog_id = data.get('id')
        b = Blog.find(blog_id)
        if u.id == b.user_id:
            return route_function()
        else:
            return redirect(url_for('routes_blog.detail', blog_id=blog_id))
    return f


def comment_samelogin_required(route_function):
    @wraps(route_function)
    def f():
        data, u = request_data()
        comment_id = data.get('id')
        c = Comment.find(comment_id)
        if u.id == c.user_id:
            return route_function()
        else:
            blog = Blog.find(c.blog_id)
            return redirect(url_for('routes_blog.detail', blog_id=blog.id))
    return f


@routes_blog.route('/')
def index1():
    return redirect(url_for('routes_blog.index'))


def page_cal(page_id, blogs, page_index):
    page_max = len(blogs) // page_index
    page_temp = len(blogs) % page_index
    if page_temp > 0:
        page_max += 1

    if page_max <= 5:
        return [1, 2, 3, 4, 5][:page_max], page_max

    if page_id <= 3:
        return [1, 2, 3, 4, 5, -1], page_max

    if page_id+3 > page_max:
        return [-1,page_max-4, page_max-3, page_max-2, page_max-1, page_max], page_max

    else:
        return [-1, page_id-2, page_id-1, page_id, page_id+1, page_id+2, -1], page_max


@routes_blog.route('/blog')
def index():
    u = current_user()
    board_id = request.args.get('board', '0')
    if board_id == '0':
        blogs = Blog.all()
    else:
        blogs = Blog.find_all(board_id=board_id)

    # blogs.reverse()
    blogs = sorted(blogs, key=lambda b: b.updated_time, reverse=True)
    page_index = 15
    page = request.args.get('page', 1)
    page_id = int(page)
    pages_list, page_max = page_cal(page_id, blogs, page_index)
    blogs = blogs[((page_id - 1) * page_index):(page_id * page_index)]

    boards = Board.all()
    return render_template('routes_blog/blog_index.html',
                           blogs=blogs,
                           u=u,
                           v=u,
                           boards=boards,
                           board_id=board_id,
                           pages_list=pages_list,
                           page_max=page_max
                           )


@routes_blog.route('/blog/new')
@login_required
def new():
    u = current_user()
    boards = Board.all()
    token = new_csrf_token()
    return render_template('routes_blog/blog_new.html', u=u, boards=boards, token=token)


@routes_blog.route('/blog/add', methods=['POST'])
@login_required
@csrf_required
def add():
    u = current_user()
    form = request.form.to_dict()
    board_all = Board.all()
    default_id = board_all[3].id

    board_id = form.get('board_id')
    if board_id == '请选择':
        form['board_id'] = default_id

    Blog.add(form, user_id=u.id)
    return redirect(url_for('routes_blog.index'))


@routes_blog.route('/blog/detail/<blog_id>')
def detail(blog_id):
    u = current_user()
    b = Blog.find(blog_id)
    Blog.get(blog_id)
    v = b.user()
    token = new_csrf_token()
    return render_template('routes_blog/blog_detail.html', blog=b, u=u, v=v, token=token)


@routes_blog.route('/blog/delete')
@login_required
@blog_samelogin_required
@csrf_required
def delete():
    blog_id = request.args.get('id', None)
    Blog.delete_with_comments(blog_id)
    return redirect(url_for('routes_blog.index'))


@routes_blog.route('/blog/edit')
@login_required
@blog_samelogin_required
@csrf_required
def edit():
    u = current_user()
    blog_id = request.args.get('id', -1)
    b = Blog.find(blog_id)
    boards = Board.all()
    return render_template('routes_blog/blog_edit.html', blog=b, u=u, boards=boards)


@routes_blog.route('/blog/update', methods=['POST'])
@login_required
@blog_samelogin_required
def update():
    form = request.form.to_dict()
    blog_id = form.get('id')
    Blog.update(form)
    return redirect(url_for('routes_blog.detail', blog_id=blog_id))


@routes_blog.route('/comment/add', methods=['POST'])
@login_required
def comment_add():
    u = current_user()
    form = request.form.to_dict()

    # 发邮件
    content = form['content']
    users = users_from_content(content)
    send_mails(u, users, content)

    Comment.add(form, user_id=u.id)
    blog_id = form['blog_id']
    return redirect(url_for('routes_blog.detail', blog_id=blog_id))


def users_from_content(content):
    # 注意格式，@a @b 这是内容
    parts = content.split(' ')
    # 多个receiver，放在users里面
    users = []
    for p in parts:
        if p.startswith('@'):
            username = p[1:]
            u = User.find_by(username=username)
            users.append(u)
    return users


def send_mails(sender, receivers, content):
    for r in receivers:
        form = dict(
            title='你被 {} AT 了'.format(sender.username),
            content=content,
            sender_id=sender.id,
            receiver_id=r.id,
        )
        m = Mail.new(form)
        m.save()


@routes_blog.route('/weibo/comment/edit')
@login_required
@comment_samelogin_required
def comment_edit():
    u = current_user()
    comment_id = request.args.get('id', -1)
    c = Comment.find(comment_id)
    return render_template('routes_blog/comment.html', comment=c, u=u)


@routes_blog.route('/weibo/comment/update', methods=['POST'])
@login_required
@comment_samelogin_required
def comment_update():
    form = request.form.to_dict()
    c_id = form['id']
    Comment.update(form)
    c = Comment.find(c_id)
    b = Blog.find(c.blog_id)
    return redirect(url_for('routes_blog.detail', blog_id=b.id))


@routes_blog.route('/weibo/comment/delete')
@login_required
def comment_delete():
    u = current_user()
    comment_id = request.args.get('id', None)
    c = Comment.find(comment_id)
    b_user_id = request.args.get('b_id', None)
    a = (u.id == c.user_id)
    b = (u.id == b_user_id)
    blog = Blog.find_by(user_id=b_user_id)
    if a or b:
        Comment.delete(comment_id)
    return redirect(url_for('routes_blog.detail', blog_id=blog.id))

