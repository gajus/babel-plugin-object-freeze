# babel-plugin-object-freeze

[![Travis build status](http://img.shields.io/travis/gajus/babel-plugin-object-freeze/master.svg?style=flat-square)](https://travis-ci.org/gajus/babel-plugin-object-freeze)
[![NPM version](http://img.shields.io/npm/v/babel-plugin-object-freeze.svg?style=flat-square)](https://www.npmjs.org/package/babel-plugin-object-freeze)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

Uses `Object.freeze` to freeze all object and array expressions.

* [Example transpilation](#example-transpilation)
* [Motivation](#motivation)
* [Configuration](#configuration)

## Example transpilation

Input:

```js
const config = {
  firstThreeAlphabetLetters: [
    'a',
    'b',
    'c'
  ]
};

```

Output:

```js
const config = Object.freeze({
  firstThreeAlphabetLetters: Object.freeze([
    'a',
    'b',
    'c'
  ])
});

```

## Motivation

To enforce complete immutability.

## Configuration

N/A
