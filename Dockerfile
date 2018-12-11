# use Cypress provided image with all dependencies included
FROM cypress/base:8

WORKDIR /home/node/app
# copy our test page and test files
COPY cypress.json package.json package-lock.json ./
COPY config ./config
COPY cypress ./cypress
RUN npm install
# ENTRYPOINT [ "tail", "-f", "/dev/null"]