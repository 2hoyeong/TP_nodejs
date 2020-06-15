#!/bin/bash
touch deploy.log
rsync --delete-before --verbose --archive --include ".env" --include "node_modules/" --include "node_modules/*" --exclude "*" /home/ec2-user/docker-image/tp/TP_nodejs/ > ./deploy.log
/home/ec2-user/docker-image/deploy.sh
sleep 5
echo "deploy finished"
