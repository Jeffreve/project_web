#!/usr/bin/env bash
# 基本配置

export LC_ALL=C
environment=LANG="en_US.utf8", LC_ALL="en_US.UTF-8", LC_LANG="en_US.UTF-8"

sudo cp sources.list /etc/apt/sources.list

sudo apt-get update

sudo apt-get install git curl zsh ssh
sudo sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
