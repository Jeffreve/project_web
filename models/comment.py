import time

from bson import ObjectId

from models import Model
from models.user import User


class Comment(Model):
    """
    评论类
    """

    @classmethod
    def valid_names(cls):
        names = super().valid_names()
        names = names + [
            ('content', str, ''),
            ('user_id', str, ''),
            ('blog_id', str, ''),
            ('blog_user_id', str, ''),
        ]
        return names

    def user(self):
        u = User.find(self.user_id)
        return u

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