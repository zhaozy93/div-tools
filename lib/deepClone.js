// here is one amazing thing
// if you delete try catch mechanism,
// case1: a={}, a.a=a; will throw error;
// case2: a={}, b={}, a.b=b, b.a=a; will throw error too;
// but with the try catch mechanism, you also can process the self-reference problems
function deepClone(origin, target){
  try{
    target = target || {};
    for (var i in origin){
      let _type = Object.prototype.toString.call(origin[i]);
      if (_type === '[object Array]' || (_type === '[object Object]' && origin.hasOwnProperty(i))){
          target[i] = _type === '[object Array]' ? [] : {};
          if(target[i] === target){
            continue;
          }
          deepClone(origin[i], target[i]);
      } else {
          target[i] = origin[i];
        }
    }
  }catch(e){
    console.error(e);
  }
  return target;
}

export default deepClone;
