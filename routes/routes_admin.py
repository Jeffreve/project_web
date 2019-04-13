from flask import (
    render_template,
    request,
    redirect,
    url_for,
    Blueprint,
)

from routes import *

from models.board import Board
from utils import salted_password

routes_admin = Blueprint('routes_admin', __name__)


def admin_required(route_function):
    # 管理用户验证
    @wraps(route_function)
    def f():
        u = current_user()
        if u.role == 0:
            return route_function()
        else:
            return redirect(url_for('routes_user.login_view'))
    return f


@routes_admin.route('/test')
# @admin_required
def user_test():
    u = current_user()
    return render_template('routes_user/user_test.html', u=u)


@routes_admin.route("/board")
@admin_required
def board_index():
    boards = Board.all()
    return render_template('routes_user/board_index.html', boards=boards)


@routes_admin.route("/board/add", methods=["POST"])
@admin_required
def board_add():
    form = request.form.to_dict()
    Board.add(form)
    return redirect(url_for('routes_admin.board_index'))


@routes_admin.route("/board/delete")
@admin_required
def board_delete():
    board_id = request.args.get('id')
    Board.delete(board_id)
    return redirect(url_for('routes_admin.board_index'))


@routes_admin.route('/board/update', methods=['POST'])
@admin_required
def board_update():
    form = request.form.to_dict()
    Board.update(form)
    return redirect(url_for('routes_admin.board_index'))


@routes_admin.route('/user/admin')
@admin_required
def user_index():
    users = User.find_all()
    return render_template('routes_user/user_admin.html', users=users)


@routes_admin.route('/user/admin/delete')
@admin_required
def user_delete():
    u_id = request.args.get('id')
    User.delete(u_id)
    return redirect(url_for('routes_admin.user_index'))


@routes_admin.route('/user/admin/update', methods=['POST'])
@admin_required
def user_update():
    form = request.form.to_dict()
    user_id = form['id']
    u = User.find(user_id)
    form['password'] = salted_password(form['password'], u.username)
    User.update(form)
    return redirect(url_for('routes_admin.user_index'))
