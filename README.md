![](https://img.shields.io/badge/React-informational?style=flat&logo=react&logoColor=5ed3f3&color=282c34)&nbsp;
![](https://img.shields.io/badge/TypeScript-informational?style=flat&logo=typescript&logoColor=white&color=0076c6)&nbsp;
![](https://img.shields.io/badge/Vite-informational?style=flat&logo=vite&logoColor=white&color=646cff)
![](https://img.shields.io/badge/Docker-informational?style=flat&logo=docker&logoColor=white&color=2392e6)
![](https://img.shields.io/badge/React%20Redux-informational?style=flat&logo=redux&logoColor=white&color=764abc)

# Speed test

This a simple demo for speed test.

## To Start

- install pnpm (npm install -g pnpm)
- run <code>pnpm install && pnpm dev</code>
- open url in browser http://localhost:3000/

## In Docker

- <code>docker build -t speed-test .</code>
- <code>docker run -d --rm -p 3000:3000 --name speed-test speed-test</code>
- open url in browser http://localhost:3000/
- (see running containers with docker ps)

## Using Docker compose

- <code>docker-compose up --build -d</code>
- open url in browser http://localhost:3000/

## App Structure:

STORE:
- stores game scores and theme

UTILS:
- helper functions

TYPES:
- data types

HOOKS:
- custom hook for interval

VIEWS:
- app views and other components

