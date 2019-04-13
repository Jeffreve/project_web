import hashlib
import time
from email.header import Header
from email.mime.text import MIMEText
from email.utils import parseaddr, formataddr

import smtplib

import flask_config


def log(*args, **kwargs):
    time_format = '%H:%M:%S'
    localtime = time.localtime(int(time.time()))
    formatted = time.strftime(time_format, localtime)
    with open('log.txt', 'a', encoding='utf-8') as f:
        print(formatted, *args, **kwargs)
        print(formatted, *args, file=f, **kwargs)


def salted_password(password, name, salt='$!@><?>HUI&DWQa`'):
    salted = str(password) + name + salt
    h = hashlib.sha256(salted.encode('ascii')).hexdigest()
    return h


def formatted_time(t):
    time_format = '%Y/%m/%d %H:%M:%S'
    value = time.localtime(int(t))
    r = time.strftime(time_format, value)
    return r


def format_addr(s):
    name, addr = parseaddr(s)
    return formataddr((Header(name, 'utf-8').encode(), addr))


def send_mail(message, receiver, to_addr):
    from_addr = flask_config.from_addr
    password = flask_config.password
    smtp_server = flask_config.smtp_server

    msg = MIMEText(message, 'html', 'utf-8')
    msg['From'] = format_addr('Jcode论坛 <{}>'.format(from_addr))
    msg['To'] = format_addr('{} <{}>'.format(receiver, to_addr))
    msg['Subject'] = Header('Jcode论坛密码重置', 'utf-8').encode()

    server = smtplib.SMTP(smtp_server, 587)
    server.starttls()
    server.set_debuglevel(1)
    server.login(from_addr, password)
    server.sendmail(from_addr, [to_addr], msg.as_string())
    server.quit()
