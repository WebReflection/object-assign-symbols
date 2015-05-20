//remove:
var getOwnPropertySymbols = require('../get-own-property-symbols/build/get-own-property-symbols.node.js');
var assign = require('../build/object-assign-symbols.node.js');
//:remove

wru.test([
  {
    name: 'main',
    test: function () {
      wru.assert(typeof Object.assign == 'function');
    }
  }, {
    name: 'works with objects',
    test: function () {
      var
        source1 = {a: 'a'},
        source2 = {b: 'b'},
        o = Object.assign({}, source1, source2)
      ;
      wru.assert('source1 in', o.hasOwnProperty('a') && o.a === 'a');
      wru.assert('source2 in', o.hasOwnProperty('b') && o.b === 'b');
    }
  }, {
    name: 'works with Symbols',
    test: function () {
      var
        whatever = Symbol('whatever'),
        source1 = {a: 'a'},
        source2 = {b: 'b'},
        o = {},
        res
      ;
      source1[whatever] = 'c';
      res = Object.assign(o, source1, source2);
      wru.assert('same object', res === o);
      wru.assert('Symbol inherited', o.hasOwnProperty(whatever) && o[whatever] === 'c');
      wru.assert('also source1 in', o.hasOwnProperty('a') && o.a === 'a');
      wru.assert('also source2 in', o.hasOwnProperty('b') && o.b === 'b');
    }
  }
]);
