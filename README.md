# Stateless

| A serverless app for stateless people

[![License][license-image]][license-url]

## Getting Started
1. Create a [firebase app](https://console.firebase.google.com) and login into firebase using the steps described in *Deployment* below.

2. Create a `src/config.js` using `src/config.default.js` as a template with the firebase settings.

3. Create a `.firebaserc` using `.firebaserc.default` as a template with the firebase app id.

4. Install dependencies: `yarn`

5. Start Development server: `npm start`

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`build:dev`|Same as `build` but overrides `NODE_ENV` to "development".|
|`build:prod`|Same as `build` but overrides `NODE_ENV` to "production".|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

### Production

Build code before deployment by running `npm run build:prod`.

### Deployment

#### Login
1. Login to [Firebase](firebase.google.com) (or Signup if you don't have an account) and create a new project
2. Install cli: `npm i -g firebase-tools`
3. Login: `firebase login`

#### CI
**Note:** The next steps automatically through config set in the `.travis.yml`. Use `firebase login:ci` to generate a token and set it to `FIREBASE_TOKEN` within your travis config.

#### Deploy 
1. Build Project: `npm run build:prod`
2. Confirm Firebase config by running locally: `firebase serve`
3. Deploy to firebase: `firebase deploy`

## About
This project is deployed to [stateless.botverse.com](https://stateless.botverse.com). Project was based on the material example from react-redux-firebase](https://github.com/prescottprue/react-redux-firebase/tree/master/examples/complete/material) which is in turn based on the output of [`generator-react-firebase`](https://github.com/prescottprue/generator-react-firebase).

[license-image]: https://img.shields.io/npm/l/material.svg?style=flat-square
[license-url]: https://github.com/botverse/stateless/blob/master/LICENSE

