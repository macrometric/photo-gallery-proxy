FROM node:10.15.1

COPY . /

EXPOSE 3030

CMD [ "npm", "start" ]