#import image from node on docker hub
FROM node:12.4.0-alpine

#IMPORTANT  IF U WANT A REAL TIME APPLICATION RUNNING USE VOLUMES 
#IN PRODUCTION MODE IS BETTER TO USE THE COPY AND SET THE PERMISSIONS :)

########################################################## PRODUCTION MODE #######################################################################
#create directory node modules and set permission as node
# RUN mkdir -p /home/node/front-end/node_modules/ && chown -R node:node /home/node/front-end

#setting the work directory folder
# WORKDIR /home/node/frontend

#copy the content to the directory
# COPY --chown=node:node . /home/node/frontend

#set user as node
# USER node

#run and install node dependencies
# RUN npm install -qy

#expose port 3000
# EXPOSE 3000

#run npm start command
# CMD ["npm", "start"] 
############################################################ DEV MODE  ############################################################################

#setting the work directory folder
WORKDIR /home/node/front-end

#run and install node dependencies
RUN npm install -qy

#expose port 3000
EXPOSE 3000

#run npm start command
CMD ["npm", "start"] 

##################################################################################################################################################