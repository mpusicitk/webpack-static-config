# Webpack config for static sites

Contains basic webpack setup for static sites with multiple pages

## Setup

- Run `npm install`
- For development use `npm run start` which uses webpack dev server
- For deployment to production use `npm run build` which will generate files in dist folder in root, index.html should be served

## Configuration

- Inside src/js is index.js which is getting bundled to dist folder.
- Css main.css is imported in index.js so its bundled in same file. For this we use `style-loader` and `css-loader`
