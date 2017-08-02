// define 3 APIs of cookies
// set\get\delCookie
// try cookies support first, if fail use window.fakeCookie to replace
var _cookies = window.cookie;
var cookiesSupport = true;
var encode = window.encodeURIComponent;
var decode = window.decodeURIComponent;
try{
  setCookie('cookiesTestqwertyuiop', 'test1234', 1);
  if (getCookie('cookiesTestqwertyuiop') !== 'test1234'){
    cookiesSupport = false;
  } else {
    delCookie('cookiesTestqwertyuiop');
  }
} catch(e){
  cookiesSupport = false;
}

/**
 * @param {} title
 * @param {*} value
 */
function setCookie(title, value, day, internal){
  if(!cookiesSupport){
    return;
  }
  // var host = window.location.host;
  // get the top host of this site
  var host = /\.[\d\w]+\.[\d\w]+$/.exec(window.location.host)[0];
  var d = new Date();
  d.setTime( d.getTime() + 1000 * 60 * 60 * 24 * day);
  document.cookie = encode(title) + '=' + encode(value) + ';expires=' + d.toGMTString() + ';path=/;domain='+ host +';';
}

/**
 * @param {} title
 */
function getCookie(c_name){
  if(!cookiesSupport){
    return '';
  }
  if (document.cookie.length > 0){
    c_name = encode(c_name)
    let c_start = document.cookie.indexOf(c_name + '=');
    if (c_start !== -1){
      c_start = c_start + c_name.length + 1;
      let c_end = document.cookie.indexOf(';', c_start);
      c_end === -1 && (c_end = document.cookie.length);
      return decode(document.cookie.substring(c_start, c_end));
    }
  }
  return '';
}

function delCookie(name) {
  if(!cookiesSupport){ return }
  setCookie(name, 'will be delete', -1, true);
}

let cookies = {
  getCookie: getCookie,
  setCookie: setCookie,
  delCookie: delCookie
};

export default cookies;
