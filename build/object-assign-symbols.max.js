/*!
Copyright (C) 2015 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function (O) {
  if ('assign' in O) return;
  O.defineProperty(
    O,
    'assign',
    {
      configurable: true,
      writable: true,
      value: (function () {
        var
          gOPS = O.getOwnPropertySymbols,
          // shortcut without explicitly passing through prototype
          pIE = O.propertyIsEnumerable,
          filterOS = gOPS ?
            function (self) {
              return gOPS(self).filter(pIE, self);
            } :
            function () {
              // just empty Array won't do much within a .concat(...)
              return Array.prototype;
            }
        ;
        return function assign(where) {
          // Object.create(null) and null objects in general
          // might not be fully compatible with Symbols libraries
          // it is important to know this, in case you assign Symbols
          // to null object ... but it should NOT be a show-stopper
          // if you know what you are doing ... so .... 
          if (gOPS && !(where instanceof O)) {
            console.warn('problematic Symbols', where);
            // ... now this script does its bloody business !!!
          }
          // avoid JSHint "don't make function in loop"
          function set(keyOrSymbol) {
            where[keyOrSymbol] = arg[keyOrSymbol];
          }
          // the loop
          for (var
            arg,
            i = 1; i < arguments.length; i++
          ) {
            arg = arguments[i];
            O
              .keys(arg)
              .concat(filterOS(arg))
              .forEach(set)
            ;
          }
          return where;
        };
      }())
    }
  );
}(Object));