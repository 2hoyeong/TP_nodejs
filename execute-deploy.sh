#!/bin/bash
cd /home/ec2-user/docker-image
./deploy.sh
sleep 5
rm beforeInstall.sh
echo "deploy finished"
