# React Snowpack Chrome Extension

> ✨ Bootstrapped with Create Snowpack App (CSA).

This repo is an example on how to write a chrome extension with snowpack and react.
It strives for minimum overhead for bundling files into the chrome extension
so that the developer can focus on it's extension!

Note: This example currently uses Chrome Extension Manifest V2.
The typings in @types/chrome are not up-to-date yet (as of 2020-12-18)

For all Steps done to convert this template repo into a working chrome extension,
see the end of this README.md.

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.

---

# Chronic of changes

This section of the readme contains all steps & changes neccessary
to get a good setup for a Chrome Extension dev environment.
It is based on this [Snowpack React Tutorial](https://www.snowpack.dev/tutorials/react)

1. Bootstrap Command
   `npx create-snowpack-app react-snowpack-chrome-extension --template @snowpack/app-template-minimal`
2. `npm install react react-dom --save`
3. `mv index.js index.jsx`
4. Follow along source tutorial, changes will be recorded from here on
5. Fast Refresh Plugin install:  
   `npm i -D @snowpack/plugin-react-refresh`
6. Convert this repo to typescript based on the repo:
   [app-template-react-typescript](https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app/app-template-react-typescript)

   1. Install Typescript & Snowpack TS Plugin & Additional Types
      ```sh
      npm i -D @snowpack/plugin-typescript typescript
      npm i -D @types/react @types/react-dom
      ```
   2. Update `snowpack.config.js`
      ```js
      mount: {
         public: {url: '/', static: true},
         src: {url: '/dist'},
      },
      plugins: [
         '@snowpack/plugin-typescript',
      ],
      ```

7. Add chrome typings: `npm i -D @types/chrome `
8. Add sample icons in `public/assets/img` for sizes
   icon-16.png, icon-32.png, icon-128.png, icon-256.png, icon-512.png
9. Add `public/manifest.json` file (find this file in this repo for example manifest)
10. Solve problems with Hot Module Reloading by installing `npm i -D @types/snowpack-env`
11. Move `src/background.script.ts` to `public-scripts/background.script.ts` and add `public-scripts`
    folder to snowpack config to be emitted to '/', to have the background chrome script in the webroot
    of the chrome extension.
12. rename **snowpack** folder in snowpack.config: buildOptions.metaDir to `private/snowpack`
    to avoid errors with underscores when loading chrome extensions
    (underscores are reserved by the system in chrome)
