from flask import (
    render_template,
    request,
    redirect,
    url_for,
    Blueprint,
)

from routes import *
from models.mail import Mail
from utils import log

routes_mail = Blueprint('routes_mail', __name__)


@routes_mail.route("/mail/add", methods=["POST"])
def add():
    form = request.form
    u = current_user()
    m = Mail.new(form, sender_id=u.id)
    m.save()
    return redirect(url_for("routes_mail.index"))


@routes_mail.route("/mail")
@login_required
def index():
    users = User.find_all()
    u = current_user()
    send_mail = Mail.find_all(sender_id=u.id)
    send_mail.reverse()
    received_mail = Mail.find_all(receiver_id=u.id)
    received_mail.reverse()
    t = render_template(
        "mail/mail_index.html",
        sends=send_mail,
        receives=received_mail,
        users=users,
        u=u,
    )
    return t


@routes_mail.route("/view/<mail_id>")
def view(mail_id):
    mail = Mail.find(id=mail_id)
    if (current_user().role != -1) and (current_user().id in [mail.receiver_id, mail.sender_id]):
        return render_template("mail/mail_detail.html", mail=mail)
    else:
        return redirect(url_for("routes_mail.index"))
