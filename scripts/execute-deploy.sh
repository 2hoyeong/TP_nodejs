#!/bin/bash
cd /home/ec2-user/docker-image
source ./deploy.sh > /dev/null 2> /dev/null < /dev/null &
sleep 5
echo "deploy finished"
