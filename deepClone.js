'use strict';Object.defineProperty(exports,'__esModule',{value:!0});function deepClone(a,b){try{for(var c in b=b||{},a){var d=Object.prototype.toString.call(a[c]);if('[object Array]'===d||'[object Object]'===d&&a.hasOwnProperty(c)){if(b[c]='[object Array]'===d?[]:{},b[c]===b)continue;deepClone(a[c],b[c])}else b[c]=a[c]}}catch(f){console.error(f)}return b}exports.default=deepClone;