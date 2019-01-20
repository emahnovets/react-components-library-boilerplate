# React Components Library Boilerplate

[![Build Status](https://travis-ci.org/emahnovets/react-components-library-boilerplate.svg?branch=master)](https://travis-ci.org/emahnovets/react-components-library-boilerplate)
[![airbnb-style](https://img.shields.io/badge/eslint-airbnb-4B32C3.svg)](https://github.com/airbnb/javascript)

Simple boilerplate for easy creation of own react components library.

## Basic usage

1. Clone this repo using
```
git clone git@github.com:emahnovets/react-components-library-boilerplate.git <my-awesome-lib>
```
2. Remove .git directory
```
rm -rf .git
```
3. Personalize package.json. Changes:
* Name
* Author
* Repository
* Licence
4. Initialize git and commit your changes

## Features
* Typescript
* TSLint & Prettier (with airbnb config)
* Jest for testing (Enzyme + jest-image-snapshot) (one note: it would be better to use one machine to update and compare image snapshot since rendering can be a bit different from platform to platform)
* Webpack 4
* Storybook for components demo
* CSS Modules (SCSS supported)
* Example component

## Tasks
1. `yarn start` - run storybook for development and demo
2. `yarn build:storybook` - build components demo with docs
3. `yarn build` - build package
4. `yarn lint` - lints components code
5. `yarn test` - perform all tests. (storybook demo should be started using 1st command)
6. `yarn format` - format code using prettier

## License
react-components-library-boilerplate is available under MIT. See LICENSE for more details.
