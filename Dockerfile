# Specify base image
FROM strapi/base

WORKDIR /backend


#Copy files to docker
COPY ./ ./

# Install dependencies

RUN yarn install 


ENV NODE_ENV development

## Default Command

EXPOSE 1337

CMD [ "yarn" , "develop" ]