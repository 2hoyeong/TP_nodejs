#!/bin/bash
rm /home/ec2-user/docker-image/tp/TP_nodejs/beforeInstall.sh
cd /home/ec2-user/docker-image
./deploy.sh
sleep 5
echo "deploy finished"
