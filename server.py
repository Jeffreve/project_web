from flask import (
    Flask,
    render_template)

import flask_config
from routes.routes_admin import routes_admin
from routes.routes_user import routes_user
from routes.routes_blog import routes_blog
from routes.routes_mail import routes_mail
from routes.routes_ajaxtodo import routes_ajaxtodo
from routes.routes_ajaxweibo import routes_ajaxweibo


def error_404(e):
    return render_template('routes_user/zhihu404.html'), 404


def configured_app():
    flask_app = Flask(__name__)
    flask_app.register_blueprint(routes_user)
    flask_app.register_blueprint(routes_blog)
    flask_app.register_blueprint(routes_mail)
    flask_app.register_blueprint(routes_admin)
    flask_app.register_blueprint(routes_ajaxtodo)
    flask_app.register_blueprint(routes_ajaxweibo)

    flask_app.secret_key = flask_config.secret_key
    flask_app.errorhandler(404)(error_404)
    return flask_app


if __name__ == '__main__':
    config = dict(
        debug=True,
        host='127.0.0.1',
        port=3000,
        # host='0.0.0.0',
        # port=80,
    )
    app = configured_app()
    app.run(**config, threaded=True)
