from flask import (
    Blueprint,
    render_template,
    jsonify,
    request,
    redirect, url_for)
from models.ajaxcomment import Ajaxcomment
from models.user import User
from routes import current_user, login_required
from models.ajaxweibo import Ajaxweibo
from utils import log

routes_ajaxweibo = Blueprint('routes_ajaxweibo', __name__)


@routes_ajaxweibo.route('/ajax/weibo/index')
@login_required
def index():
    users = User.find_all()
    users_id = [u.id for u in users]

    u = current_user()
    author_id = request.args.get('user_id', -1)
    author = User.find(author_id)

    if author_id in users_id:
        if author_id == u.id:
            return render_template('ajax/ajax_weibo_index.html', u=u, author=author, users=users)
        else:
            return render_template('ajax/ajax_weibo_index.html', u=u, author=author, users=users)
    else:
        return redirect(url_for('routes_admin.user_test'))


@routes_ajaxweibo.route('/ajax/weibo/all')
def all():
    author_id = request.args.get('author_id')
    weibos = Ajaxweibo.find_all_json(user_id=author_id)
    return jsonify(weibos)


@routes_ajaxweibo.route('/ajax/weibo/add', methods=['POST'])
def add():
    u = current_user()
    form = request.json
    t = Ajaxweibo.add(form, user_id=u.id)
    return jsonify(t.json())


@routes_ajaxweibo.route('/ajax/weibo/delete')
def delete():
    weibo_id = request.args.get('id')
    t = Ajaxweibo.delete_with_comments(weibo_id)
    return ''


@routes_ajaxweibo.route('/ajax/weibo/update', methods=['POST'])
def update():
    form = request.json
    t = Ajaxweibo.update(form)
    t.content = '{}:{}'.format('Weibo', t.content)
    return jsonify(t.json())


@routes_ajaxweibo.route('/ajax/comment/all')
def comment_all():
    author_id = request.args.get('author_id', -1)
    weibos = Ajaxweibo.find_all(user_id=author_id)

    l = []
    for w in weibos:
        l += Ajaxcomment.find_all_json_add_user(weibo_id=w.id)
    return jsonify(l)


@routes_ajaxweibo.route('/ajax/comment/add', methods=['POST'])
def comment_add():
    u = current_user()
    form = request.json
    t = Ajaxcomment.add(form, user_id=u.id)
    t.user = t.user()
    return jsonify(t.json())


@routes_ajaxweibo.route('/ajax/comment/delete')
def comment_delete():
    comment_id = request.args.get('id')
    t = Ajaxcomment.delete(comment_id)
    return ''


@routes_ajaxweibo.route('/ajax/comment/update', methods=['POST'])
def comment_update():
    form = request.json
    c = Ajaxcomment.update(form)
    c.user = c.user()
    c.content = 'Comment: {} from'.format(c.content)
    return jsonify(c.json())
