import cookies from './cookies';
import localStorage from './localStorage';
import deepClone from './deepClone.js';
import removeUndefined from './removeUndefined.js';
import addEventListener from './addEventListener.js';
import notifyBeforClose from './notifyBeforClose.js';
import camelCase from './camelCase.js';

// for webpack destruction
export {
  addEventListener,
  camelCase,
  cookies,
  deepClone,
  localStorage,
  notifyBeforClose,
  removeUndefined
};

export default {
  addEventListener: addEventListener,
  camelCase: camelCase,
  cookies: cookies,
  deepClone: deepClone,
  localStorage: localStorage,
  notifyBeforClose: notifyBeforClose,
  removeUndefined: removeUndefined
};