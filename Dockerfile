FROM node:18.17.0-alpine3.18

# Instalacion dependencias
RUN apk update
RUN apk upgrade
RUN npm install -g @angular/cli@17.3.8

#############################################################
# APP  ######################################################
#############################################################

# Argumentos de la app
ARG PROYECTNAME=app

# Construir aplicacion
RUN mkdir /${PROYECTNAME}
WORKDIR /${PROYECTNAME}

COPY . /${PROYECTNAME}
RUN npm install --force

#############################################################
# FINAl #####################################################
#############################################################

# Port
EXPOSE 4200

# Lanzar app
CMD [ "npm", "run", "start" ]


