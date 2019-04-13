import uuid

from flask import (
    session,
    redirect,
    request, url_for, abort)

from models.token import Token
from models.user import User
from functools import wraps
import redis

from utils import log


def current_user():
    user_id = session.get('user_id', None)
    if user_id is not None:
        user_id = user_id
        u = User.find_by(id=user_id)
        return u
    else:
        return User.guest()


def login_required(route_function):
    @wraps(route_function)
    def f():
        u = current_user()
        if u.is_guest():
            return redirect(url_for('routes_user.login_view'))
        else:
            return route_function()
    return f


def request_data():
    # 返回form数据
    u = current_user()
    if request.method == 'POST':
        data = request.form
    else:
        data = request.args
    return data, u


r = redis.StrictRedis(charset="utf-8", decode_responses=True)


# def csrf_required(f):
#     @wraps(f)
#     def wrapper(*args, **kwargs):
#         data = request_data()
#         token = data[0].get('token')
#         u = current_user()
#         if r.exists(token) and r.get(token) == u.username:
#             # r.delete(token)
#             return f(*args, **kwargs)
#         else:
#             abort(401)
#     return wrapper
#
#
# def new_csrf_token():
#     u = current_user()
#     token = str(uuid.uuid4())
#     r.set(token, u.username)
#     return token


def new_csrf_token():
    u = current_user()
    token = str(uuid.uuid4())
    form = dict(
        token=token,
        username=u.username,
    )
    Token.add(form)
    return token


def csrf_required(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        data = request_data()
        token = data[0].get('token')
        u = current_user()
        t = Token.find_by(token=token)
        if t is not None and t.username == u.username:
            # csrf_tokens.pop(token)
            return f(*args, **kwargs)
        else:
            abort(401)
    return wrapper
