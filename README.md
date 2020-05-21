# Webpack config for static sites

Contains basic webpack setup for static sites with multiple pages

## Setup

- Run `npm install`
- For development use `npm run start` which uses webpack dev server
- For deployment to production use `npm run build` which will generate files in dist folder in root, index.html should be served

## Configuration

Each javascript file should be improted in index.js which will get bundeled into dist folder. All css should be imported in main.css found in css folder
