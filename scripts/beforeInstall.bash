#!/bin/bash
if [ -d /home/ec2-user/docker-image/tp/TP_nodejs ]; then
        sudo rm -rf /home/ec2-user/docker-image/tp/TP_nodejs
fi
sudo mkdir -vp /home/ec2-user/docker-image/tp/TP_nodejs