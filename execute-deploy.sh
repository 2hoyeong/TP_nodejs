#!/bin/bash
sudo rm /home/ec2-user/docker-image/tp/TP_nodejs/beforeInstall.sh
cd /home/ec2-user/docker-image
sudo ./deploy.sh
sleep 5
echo "deploy finished"
