#!/usr/bin/env bash

export LC_ALL=C
environment=LANG="en_US.utf8", LC_ALL="en_US.UTF-8", LC_LANG="en_US.UTF-8"

# git pull


# ${source_root} 是代码所在目录
source_root='/root/project_web'
# ${source_conf}
source_conf='project_web'
# ${source_nginx}
source_nginx='project_web'


# 删除 supervisor 其他文件，日志在 /var/log/supervisor；
sudo rm -f /etc/supervisor/conf.d/*

# 删掉 nginx default 设置
sudo rm -f /etc/nginx/sites-enabled/*/
sudo rm -f /etc/nginx/sites-available/*


# 建立一个软连接
sudo ln -s -f ${source_root}/${source_conf}.conf /etc/supervisor/conf.d/${source_conf}.conf

# 不要再 sites-available 里面放任何东西
sudo ln -s -f ${source_root}/${source_nginx}.nginx /etc/nginx/sites-enabled/${source_nginx}


# 重启服务器
sudo service supervisor restart
sudo service nginx restart


# 设置文件夹权限给 nginx 用
# sudo chmod o+xr /root
# sudo chmod -R o+xr ${source_root}


echo 'succsss'
echo 'ip'
sudo hostname -I
