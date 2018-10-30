FROM 287054460789.dkr.ecr.us-east-1.amazonaws.com/polaris/devenv-nodejs-polarisplatform
COPY . /app
WORKDIR /app
CMD node ./regex.js