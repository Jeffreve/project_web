import time
from bson import ObjectId
from models import Model


class Ajaxtodo(Model):
    @classmethod
    def valid_names(cls):
        names = super().valid_names()
        names = names + [
            ('task', str, ''),
            ('user_id', str, ''),
        ]
        return names

    @classmethod
    def update(cls, form):
        todo_id = form['id']
        form.pop('id')
        form['updated_time'] = int(time.time())

        name = cls.__name__
        query = {
            '_id': ObjectId(todo_id),
        }
        values = {
            '$set': form,
        }
        cls.db[name].update_one(query, values)
        return cls.find(todo_id)
