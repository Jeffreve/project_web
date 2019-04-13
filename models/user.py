from bson import ObjectId

from models import Model
from utils import salted_password, log


class User(Model):
    @classmethod
    def valid_names(cls):
        names = super().valid_names()
        names = names + [
            ('role', int, 1),
            ('username', str, ''),
            ('password', str, ''),
            ('email', str, ''),
            ('signature', str, ' 这家伙很懒，什么个性签名都没有留下。 '),
            ('user_image', str, '/uploads/default.png'),
        ]
        return names

    @staticmethod
    def validate_login(username, password):
        u = User.find_by(username=username)
        return u is not None and u.password == salted_password(password, username)

    def validate_register(self):
        return len(self.username) > 2 and len(self.password) > 2

    @classmethod
    def login(cls, form):
        username = form.get('username')
        password = form.get('password')
        if User.validate_login(username, password):
            u = User.find_by(username=username)
            return u, None
        else:
            message = '用户名或者密码错误'
            u = User.guest()
            return u, message

    @classmethod
    def register(cls, form):
        p = form['password']
        name = form['username']
        u = User.new(form)
        if u.validate_register():
            u.password = salted_password(p, name)
            u.save()
            message = '注册成功'
        else:
            u = cls.guest()
            message = '用户名或者密码长度必须大于2'

        return u, message

    @staticmethod
    def guest():
        form = dict(
            username='游客',
            role=-1,
        )
        u = User.new(form)
        return u

    # todo add is_guest
    def is_guest(self):
        return self.role == User.guest().role

    @classmethod
    def update(cls, form):
        user_id = form['id']
        form.pop('id')

        name = cls.__name__
        query = {
            '_id': ObjectId(user_id),
        }
        values = {
            '$set': form,
        }
        cls.db[name].update_one(query, values)
