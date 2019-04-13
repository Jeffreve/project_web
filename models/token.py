import time

from bson import ObjectId

from models import Model
from utils import formatted_time


class Token(Model):
    @classmethod
    def valid_names(cls):
        names = super().valid_names()
        names = names + [
            ('token', str, ''),
            ('username', str, ''),
        ]
        return names
