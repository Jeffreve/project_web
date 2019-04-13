from models import Model
from models.user import User


class Mail(Model):
    @classmethod
    def valid_names(cls):
        names = super().valid_names()
        names = names + [
            ('title', str, ''),
            ('content', str, ''),
            ('sender_id', str, ''),
            ('receiver_id', str, ''),
        ]
        return names

    def sender_user(self):
        user_id = self.sender_id
        u = User.find(user_id)
        return u

    def receiver_user(self):
        user_id = self.receiver_id
        u = User.find(user_id)
        return u
