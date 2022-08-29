FROM node:16-alpine as test-target

WORKDIR /usr/src/app/server

COPY package*.json ./

# CI and release builds should use npm ci to fully respect the lockfile.
# Local development may use npm install for opportunistic package updates.
ARG npm_install_command=i
RUN npm $npm_install_command

COPY . .

# Reduce installed packages to production-only.
RUN npm prune --production

CMD ["npm","run","start"]
