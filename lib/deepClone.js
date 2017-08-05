// here is one amazing thing
// if you delete try catch mechanism,
// case1: a={}, a.a=a; will throw error;
// case2: a={}, b={}, a.b=b, b.a=a; will throw error too;
// but with the try catch mechanism, you also can process the self-reference problems
function deepClone(origin, target){
  try{
    target = target || {};
    for (var i in origin){
      if (Object.prototype.toString.call(origin) === '[object Array]' || origin.hasOwnProperty(i)){
        if (typeof origin[i] === 'object'){
          target[i] = Object.prototype.toString.call(origin[i]) === '[object Array]' ? [] : {};
          if(origin[i] = origin){
            continue;
          }
          deepClone(origin[i], target[i]);
        } else {
          target[i] = origin[i];
        }
      }
    }
  }catch(e){
  }
  return target;
}

export default deepClone;
