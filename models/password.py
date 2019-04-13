from models import Model


class Password(Model):
    @classmethod
    def valid_names(cls):
        names = super().valid_names()
        names = names + [
            ('uuid', str, ''),
            ('username', str, ''),
        ]
        return names
