#!/bin/bash

rsync --delete-before --verbose --archive -- exclude " . * " > /var/log/deploy.log

cd /home/ec2-user/docker-image
./deploy.sh > /dev/null 2> /dev/null < /dev/null &