#!/usr/bin/env bash

#rsync --delete-before --verbose --archive --exclude " . * " --exclude "node_modules/*" > /var/log/deploy.log
/home/ec2-user/docker-image/deploy.sh > /dev/null 2> /dev/null < /dev/null &
