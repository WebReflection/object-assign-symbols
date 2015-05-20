object-assign-symbols
=====================

[![build status](https://secure.travis-ci.org/WebReflection/object-assign-symbols.png)](http://travis-ci.org/WebReflection/object-assign-symbols)

# What
This is a very simple/pragmatic approach to a standard `Object.assign` method.

It works with every browser that is also compatible with [Object.getOwnPropertySymbols](https://github.com/WebReflection/get-own-property-symbols#get-own-property-symbols) partial polyfill,
which aim is to bring a reasonably spec compliant `Symbol` function so that we can all happily move forward.

## Caveats
If you are trying to assign other objects to one to a Dictionary (e.g. an `Object.create(null)` object), all eventual `Symbol` properties might result as enumerable.
Accordingly, please don't do that if you care about consistency.

## Compatibility
You can [test compatibility directly here](http://webreflection.github.io/object-assign-symbols/test/) but
overall you need a browser that supports [this Object.getOwnPropertySymbols](http://webreflection.github.io/get-own-property-symbols/test/) too,
so if latter is green, so should be the former. If that's not the case, please file a bug, thank you!