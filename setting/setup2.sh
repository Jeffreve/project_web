#!/usr/bin/env bash
# python 配置

export LC_ALL=C
environment=LANG="en_US.utf8", LC_ALL="en_US.UTF-8", LC_LANG="en_US.UTF-8"

sudo apt-get update

# 装依赖
sudo apt-get install -y python3 python3-pip
sudo apt-get install -y nginx mongodb supervisor redis-server apache2-utils

sudo pip3 install -U pip setuptools wheel
sudo pip3 install jinja2 flask gunicorn pymongo redis
sudo pip3 install eventlet flask-socketio gevent