#!/bin/bash
touch deploy.log
rsync --delete-before --verbose --archive --exclude "node_module/" /home/ec2-user/docker-image/tp/TP_nodejs/ > ./deploy.log
/home/ec2-user/docker-image/deploy.sh
sleep 5
echo "deploy finished"
