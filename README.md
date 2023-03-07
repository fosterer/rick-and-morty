# Rick and Morty API Explorer / Client
This project is a web app client for https://rickandmortyapi.com/.
Built with Nextjs, Apollo Client, Zustand and Tailwind CSS. 

## Live Demo
https://rick-and-morty-blue.vercel.app/

## Run locally
1. clone
1. `yarn install` (or `npm i`)
1. `yarn dev` (or `npm start`)

## Run tests
https://mswjs.io/ is used to mock the api calls locally. However, the latest version of MSW requires node v16 which is not supported by Vercel (yet), due to lack of support for v16 in AWS Lambda functions. More: https://github.com/vercel/community/discussions/37
When I included it as dev dependency in package.json, then the (demo) build failed on Vercel. As a temporary walkaround, I removed MSW from dev dependencies in package.json.

In order to run tests, please make sure you added MSW by `yarn add msw --dev` (or `npm i --dev msw`) first, and then say `yarn test` (or `npm test`).
