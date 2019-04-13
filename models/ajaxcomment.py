import time
from bson import ObjectId

from models import Model
from models.user import User


class Ajaxcomment(Model):
    @classmethod
    def valid_names(cls):
        names = super().valid_names()
        names = names + [
            ('content', str, ''),
            ('user_id', str, ''),
            ('weibo_id', str, ''),
            ('weibo_user_id', str, ''),
        ]
        return names

    def user(self):
        u = User.find_by(id=self.user_id)
        return u.username

    @classmethod
    def update(cls, form):
        comment_id = form['id']
        form.pop('id')
        form['updated_time'] = int(time.time())

        name = cls.__name__
        query = {
            '_id': ObjectId(comment_id),
        }
        values = {
            '$set': form,
        }
        cls.db[name].update_one(query, values)
        return cls.find(comment_id)