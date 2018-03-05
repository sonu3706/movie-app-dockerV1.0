#!/bin/bash
npm install
npm run build
cp ./dist/* ./MovieCruiserServer/src/main/resources/public/
mvn clean package
docker-compose up --build -d