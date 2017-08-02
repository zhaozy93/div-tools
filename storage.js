import cookies from './cookies.js';
// define the localstorage 4 APIs
// if the browser dont support localStorage, use cookie
// why always check localStorage, because safari private mode will throw error if you use any function in window.localStorage
// ERROR: QuotaExceededError (DOM Exception 22): The quota has been exceeded.
// see Note from https://developer.mozilla.org/en/docs/Web/API/Window/localStorage
var _localStorage = window.localStorage;
var localStorageSupport = true;
try {
  _localStorage.setItem('localStorageTestqwertyuiop', 'test1234');
  _localStorage.removeItem('localStorageTestqwertyuiop');
} catch(e){
  localStorageSupport = false;
  console.log('test fail');
}
var storage = {
  getItem: function (key) { 
    return localStorageSupport ? _localStorage.getItem(key) : cookies.getCookie(key);
  },
  setItem: function (key, val) {
    if (localStorageSupport) {
      _localStorage.setItem(key, val);
    } else {
      cookies.setCookie(key, val);
    }
  },
  delItem: function (key) {
    localStorageSupport && _localStorage.removeItem(key);
  },
  clear: function (){
    localStorageSupport && _localStorage.clear();
  }
};
export default storage;