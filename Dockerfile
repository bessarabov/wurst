FROM ubuntu:14.04.2

ENV UPDATED_AT 2015-07-10

RUN apt-get update
RUN apt-get install -y \
    nodejs \
    npm

ADD app /app/

WORKDIR /app

RUN npm install

EXPOSE 80

CMD nodejs index.js
