FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
    
RUN npm install
#bcrypt error
COPY . ./

CMD ["npm", "start"]