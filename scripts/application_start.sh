#!/bin/bash
set -e
cd /home/ec2-user/mobakit-repo123
npm install
npm install pm2 -g
pm2 start API/index.js --name one
