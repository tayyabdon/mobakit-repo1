#!/bin/bash

# source /home/ec2-user/.bash_profile

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/mobakit-repo123

#navigate into our working directory where we have all our github files
cd /home/ec2-user/mobakit-repo123/API

# sudo apt-get install npm

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads

#install node  modules  
echo which node
echo which npm
which node
npm install 

npm install pm2 -g
 
pm2 start index.js --name server

#start our node app in the background  
# node index.js > app.out.log 2> app.err.log < /dev/null &
# node index.js  