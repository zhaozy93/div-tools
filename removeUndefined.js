// use for remove all undefined value in an object or array
function removeUndefined(origin){
  for(var i in origin){
    if (Object.prototype.toString.call(origin) === '[object Array]' || origin.hasOwnProperty(i)){
      if( Object.prototype.toString.call(origin[i]) === '[object Array]' || Object.prototype.toString.call(origin[i]) === '[object Object]') {
        removeUndefined(origin[i]);
      } else if(origin[i] === undefined){
        if(Object.prototype.toString.call(origin) === '[object Array]'){
          origin.splice(i--, 1 );
        } else {
          delete origin[i]
        }
      }
    }
  }
}

export default removeUndefined;