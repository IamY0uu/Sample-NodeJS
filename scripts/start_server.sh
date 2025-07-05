#!/bin/bash

cd /home/ec2-user/sample-app

# Optionally, install dependencies if not already
npm install

# Start app in background and log output
nohup node server.js > app.log 2>&1 &
