import time
from bson import ObjectId
from pymongo import MongoClient
from utils import log, formatted_time


class Model(object):
    db = MongoClient()['project_web']

    @classmethod
    def valid_names(cls):
        names = [
            # (字段名, 类型, 默认值)
            ('deleted', bool, False),
            ('created_time', int, 0),
            ('updated_time', int, 0),
        ]
        return names

    def __repr__(self):
        class_name = self.__class__.__name__
        properties = ('{0} = {1}'.format(k, v) for k, v in self.__dict__.items())
        return '<{0}: \n  {1}\n>'.format(class_name, '\n  '.join(properties))

    @classmethod
    def new(cls, form, **kwargs):
        m = cls()

        for name in cls.valid_names():
            k, t, v = name
            if k in form:
                setattr(m, k, t(form[k]))
            else:
                # 设置默认值
                setattr(m, k, v)

        # 处理额外的参数 kwargs
        for k, v in kwargs.items():
            if hasattr(m, k):
                setattr(m, k, v)
            else:
                raise KeyError

        # 写入默认数据
        t = int(time.time())
        m.created_time = t
        m.updated_time = t
        return m

    def save(self):
        name = self.__class__.__name__
        # self 储存实例，t 储存数据库的id
        # 把数据库的id 字符串化以后，放在实例中并返回
        t = self.db[name].save(self.__dict__)
        self.id = str(t)
        return self

    @classmethod
    def add(cls, form, **kwargs):
        m = cls.new(form, **kwargs)
        return m.save()

    @classmethod
    def delete(cls, id):
        name = cls.__name__
        query = {
            '_id': ObjectId(id),
        }
        values = {
            '$set': {
                'deleted': True
            }
        }
        cls.db[name].update_one(query, values)

    @classmethod
    def _new_with_bson(cls, bson):
        """
        这是给内部 all 这种函数使用的函数
        从 mongo 数据中恢复一个 model
        """
        m = cls()
        for key in bson:
            setattr(m, key, bson[key])
        m.id = str(bson['_id'])
        return m

    @classmethod
    def all(cls):
        kwargs = {'deleted': False}
        name = cls.__name__
        documents = cls.db[name].find(kwargs)
        l = [cls._new_with_bson(d) for d in documents]
        return l

    @classmethod
    def find_all(cls, **kwargs):
        kwargs['deleted'] = False
        if 'id' in kwargs:
            kwargs['_id'] = ObjectId(kwargs['id'])
            kwargs.pop('id')
        name = cls.__name__
        docuemtns = cls.db[name].find(kwargs)
        l = [cls._new_with_bson(d) for d in docuemtns]
        return l

    @classmethod
    def find_by(cls, **kwargs):
        documents = cls.find_all(**kwargs)
        if len(documents) > 0:
            return documents[0]
        else:
            return None

    @classmethod
    def find(cls, id):
        return cls.find_by(id=id)

    def created_time_formatted(self):
        return formatted_time(self.created_time)

    def updated_time_formatted(self):
        return formatted_time(self.updated_time)

    def json(self):
        # 返回当前 model 的字典表示
        d = self.__dict__
        d.pop('_id')
        return d

    def find_by_json(self):
        pass

    @classmethod
    def find_all_json(cls, **kwargs):
        models = cls.find_all(**kwargs)
        models = [m.json() for m in models]
        return models

    @classmethod
    def find_all_json_add_user(cls, **kwargs):
        models = cls.find_all(**kwargs)
        js = []
        for m in models:
            d = m.json()
            d['user'] = m.user()
            js.append(d)
        return js
