from flask import (
    Blueprint,
    render_template,
    jsonify,
    request
)
from routes import current_user, login_required
from models.ajaxtodo import Ajaxtodo
from utils import log, formatted_time

routes_ajaxtodo = Blueprint('routes_ajaxtodo', __name__)


@routes_ajaxtodo.route('/ajax/todo')
@login_required
def index():
    u = current_user()
    return render_template('ajax/ajax_todo_index.html', u=u)


@routes_ajaxtodo.route('/ajax/todo/all')
def all():
    u = current_user()
    todos = Ajaxtodo.find_all_json(user_id=u.id)
    for t in todos:
        t['ct'] = formatted_time(t['created_time'])
        t['ut'] = formatted_time(t['updated_time'])
    return jsonify(todos)


@routes_ajaxtodo.route('/ajax/todo/add', methods=['POST'])
def add():
    form = request.json
    u = current_user()
    t = Ajaxtodo.add(form, user_id=u.id)
    t = t.json()
    t['ct'] = formatted_time(t['created_time'])
    t['ut'] = formatted_time(t['updated_time'])
    return jsonify(t)


@routes_ajaxtodo.route('/ajax/todo/delete')
def delete():
    todo_id = request.args.get('id')
    t = Ajaxtodo.delete(todo_id)
    return ''


@routes_ajaxtodo.route('/ajax/todo/update', methods=['POST'])
def update():
    form = request.json
    t = Ajaxtodo.update(form)
    t = t.json()
    t['ut'] = formatted_time(t['updated_time'])
    return jsonify(t)
