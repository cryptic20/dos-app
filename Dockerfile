# stage1 - build react app first
FROM node:14.7-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
RUN yarn --silent
COPY . /app
RUN yarn build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.19.1-alpine as final
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
RUN adduser -D myuser
USER myuser
CMD ["nginx", "-g", "daemon off;"]
