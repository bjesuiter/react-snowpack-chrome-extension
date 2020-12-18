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

-------------------------------
# Chronic of changes 

This section of the readme contains all steps & changes neccessary 
to get a good setup for a Chrome Extension dev environment.
It is based on this [Snowpack React Tutorial](https://www.snowpack.dev/tutorials/react)

1. Bootstrap Command 
   `npx create-snowpack-app react-snowpack-chrome-extension --template @snowpack/app-template-minimal`
2. `npm install react react-dom --save`