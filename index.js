import cookies from './cookies';
import localStorage from './storage';
import deepClone from './deepClone.js';
import removeUndefined from './removeUndefined.js';
import addEventListener from './addEventListener.js';
import notifyBeforClose from './notifyBeforClose.js';

export default {
  cookies: cookies,
  localStorage: localStorage,
  deepClone: deepClone,
  removeUndefined: removeUndefined,
  notifyBeforClose: notifyBeforClose,
  addEventListener: addEventListener
};