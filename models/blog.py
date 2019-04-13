import time

from bson import ObjectId

from models import Model
from models.board import Board
from models.comment import Comment
from models.user import User
from utils import log, formatted_time


class Blog(Model):
    @classmethod
    def valid_names(cls):
        names = super().valid_names()
        names = names + [
            ('view', int, 0),
            ('title', str, ''),
            ('content', str, ''),
            ('user_id', str, ''),
            ('board_id', str, ''),
        ]
        return names

    @classmethod
    def get(cls, blog_id):
        b = cls.find(blog_id)
        b.view += 1
        b.save()
        return b

    def comments(self):
        return Comment.find_all(blog_id=self.id)

    def user(self):
        user_id = self.user_id
        u = User.find(user_id)
        return u

    def board(self):
        board_id = self.board_id
        b = Board.find(board_id)
        return b

    @classmethod
    def delete_with_comments(cls, user_id):
        cs = Comment.find_all(blog_id=user_id)
        for c in cs:
            Comment.delete(c.id)
        cls.delete(user_id)

    @classmethod
    def update(cls, form):
        blog_id = form['id']
        form.pop('id')
        form['updated_time'] = int(time.time())

        name = cls.__name__
        query = {
            '_id': ObjectId(blog_id),
        }
        values = {
            '$set': form,
        }
        cls.db[name].update_one(query, values)

    def reply_time(self):
        cs = self.comments()
        rt = cs[-1].created_time
        return rt
