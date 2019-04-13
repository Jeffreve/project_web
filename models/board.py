import time

from bson import ObjectId

from models import Model
from utils import formatted_time


class Board(Model):
    @classmethod
    def valid_names(cls):
        names = super().valid_names()
        names = names + [
            ('content', str, ''),
        ]
        return names

    @classmethod
    def update(cls, form):
        board_id = form['id']
        form.pop('id')
        form['updated_time'] = int(time.time())

        name = cls.__name__
        query = {
            '_id': ObjectId(board_id),
        }
        values = {
            '$set': form,
        }
        cls.db[name].update_one(query, values)

    def created_time_formatted(self):
        return formatted_time(self.created_time)

    def updated_time_formatted(self):
        return formatted_time(self.updated_time)
