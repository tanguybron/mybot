#!/bin/bash
echo "starting..."

echo "get code updates"
git pull

echo "stop container"
docker-compose stop

echo "build and start container"
docker-compose up --build -d