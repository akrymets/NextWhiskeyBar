FROM ubuntu:trusty
MAINTAINER Andrii Krymets <andrii.krymets@finstar.com>

VOLUME /disk/app/
WORKDIR /disk/app/

COPY ./NextWhiskeyBar.js .
COPY ./modules .
COPY ./package.json .
COPY ./public .
COPY ./templates .
COPY ./test .

RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - && \
    apt-get install -y nodejs && \
    npm install -g n && \
    npm install -g pm2 && \
    /usr/bin/n v5.10.1 \
    cd /dev/app/

RUN ln -f /usr/local/n/versions/node/5.10.1/bin/npm /usr/bin/npm && \
    ln -f /usr/local/n/versions/node/5.10.1/bin/node /usr/bin/node && \
    rm -rf /var/lib/apt/lists/*

RUN npm install

CMD ["node","NextWiskeyBar.js"]

EXPOSE 3000
