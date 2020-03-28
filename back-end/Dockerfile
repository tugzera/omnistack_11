#import image from node / alpine is a tiny image
FROM node:12.4.0-alpine

################################################### PRODUCTION MODE ##################################################################################

#create a node module folders and set the permission of the folder
# RUN mkdir -p /home/node/backend/node_modules/ && chown -R node:node /home/node/backend  

#setting the work directory folder
# WORKDIR /home/node/backend 

#UNDO COMMENT TO PRODUCTION MODE #copy folder contet to /home/node/api on container // remember to set the permission as node user
# COPY --chown=node:node . /home/node/backend    

#force to use node user
# USER node 

#install all dependencies
# RUN npm install -qy 

#expose the 3333 port
# EXPOSE 3333 

#run the node server
# CMD ["npm", "start"]

############################################################ DEV MODE  ############################################################################
#setting the work directory folder
WORKDIR /home/node/backend

#install adonis-cli
RUN npm i -g @adonisjs/cli -y

#install all dependencies
RUN npm install -qy

#expose the 3333 port
EXPOSE 3333

#run the adonis server on development mode
CMD ["adonis", "serve", "--dev"]

####################################################################################################################################################