object-assign-symbols
=====================

[![build status](https://secure.travis-ci.org/WebReflection/object-assign-symbols.png)](http://travis-ci.org/WebReflection/object-assign-symbols)

# What
This is a very simple/pragmatic approach to a standard `Object.assign` method.

## How
On browser, simply includes [this file](https://github.com/WebReflection/object-assign-symbols/blob/master/build/object-assign-symbols.js) after [this one](https://github.com/WebReflection/get-own-property-symbols/blob/master/build/get-own-property-symbols.js).

On nodejs or browserify:

```
npm install get-own-property-symbols --save
npm install object-assign-symbols --save
```
And to be sure these are included:
```js
var
  getOwnPropertySymbols = require('get-own-property-symbols'),
  assign = require('object-assign-symbols')
;

// from now on, both
Object.assign
// and
Object.getOwnPropertySymbols
// will be available
// as well as
// getOwnPropertySymbols and assign methods
```

## Compatibility
It works with every browser that is also compatible with [Object.getOwnPropertySymbols](https://github.com/WebReflection/get-own-property-symbols#get-own-property-symbols) partial polyfill,
which aim is to bring a reasonably spec compliant `Symbol` function so that we can all happily move forward.

## Caveats
If you are trying to assign other objects to one to a Dictionary (e.g. an `Object.create(null)` object), all eventual `Symbol` properties might show up in a `for/in` loop.
Accordingly, please don't do that if you care about consistency.

## Compatibility
You can [test compatibility directly here](http://webreflection.github.io/object-assign-symbols/test/) but
overall you need a browser that supports [this Object.getOwnPropertySymbols](http://webreflection.github.io/get-own-property-symbols/test/) too,
so if latter is green, so should be the former. If that's not the case, please file a bug, thank you!