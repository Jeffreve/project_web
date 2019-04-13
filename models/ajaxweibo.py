import time

from bson import ObjectId

from models import Model
from models.ajaxcomment import Ajaxcomment


class Ajaxweibo(Model):
    @classmethod
    def valid_names(cls):
        names = super().valid_names()
        names = names + [
            ('content', str, ''),
            ('user_id', str, ''),
        ]
        return names

    @classmethod
    def delete_with_comments(cls, user_id):
        cs = Ajaxcomment.find_all(weibo_id=user_id)
        for c in cs:
            Ajaxcomment.delete(c.id)
        return cls.delete(user_id)

    @classmethod
    def update(cls, form):
        weibo_id = form['id']
        form.pop('id')
        form['updated_time'] = int(time.time())

        name = cls.__name__
        query = {
            '_id': ObjectId(weibo_id),
        }
        values = {
            '$set': form,
        }
        cls.db[name].update_one(query, values)
        return cls.find(weibo_id)
