FROM akrymets/node:5.10.1
MAINTAINER Andrii Krymets <andrii.krymets@finstar.com>
#ENV MONGODB_SERVER nwb-dev-mongodb.default.svc.cluster.local
ENV MONGODB_SERVER 192.168.99.100
ENV MONGODB_PORT 27017
ENV DB_NAME nwb
RUN mkdir -p /data/app
WORKDIR /data/app/
COPY package.json /data/app/
RUN npm install
COPY . /data/app/
EXPOSE 3000
CMD ["npm","start"]
