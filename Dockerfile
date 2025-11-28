# Imagem base
FROM node:20-alpine

# Pasta de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar apenas package.json para instalar dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o resto do código
COPY . .

# Porta onde a API escuta
EXPOSE 3000

# Comando para arrancar a API
CMD ["node", "index.js"]