#!/bin/bash
touch deploy.log
rsync --delete-before --verbose --archive --include "node_modules/" --include "node_modules/*" --include ".env" --exclude "*" /home/ec2-user/docker-image/tp/TP_nodejs/scripts > ./deploy.log
/home/ec2-user/docker-image/deploy.sh
sleep 5
echo "deploy finished"
