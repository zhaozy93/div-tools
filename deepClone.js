'use strict';var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};Object.defineProperty(exports,'__esModule',{value:!0});function deepClone(a,b){try{for(var c in b=b||{},a)if('[object Array]'===Object.prototype.toString.call(a)||a.hasOwnProperty(c))if('object'===_typeof(a[c])){if(b[c]='[object Array]'===Object.prototype.toString.call(a[c])?[]:{},a[c]=a)continue;deepClone(a[c],b[c])}else b[c]=a[c]}catch(d){}return b}exports.default=deepClone;