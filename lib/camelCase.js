/**
 * 驼峰转换
 * @param string 带转换的字符串
 * @param dir 转换方式 true为向驼峰转换 false为解构驼峰， 默认为true
 * @param split dir为false时需要， 作为解构时的分隔符号，默认 -
 */
function camelCase( string, dir, split){
  // 修正转换方式
  // true：hello_world  --> helloWorld
  //       hello-world  --> helloWorld
  // false:  helloWorld  --> hello_world
  if(typeof dir !== 'boolean'){
    dir = true;
  } else {
    // 表示dir传入了，但不知道是true|false， 但可以直接修正split
    split = split || '-';
  }
  return dir ? string.replace( /(-|_)([a-z]|[0-9])/ig, function(all, split, letter){
    return ( letter + '' ).toUpperCase();
  }) : string.replace( /([A-Z])/g, function(all, letter){
    return ( '' + split + letter  ).toLowerCase();
  })
}

export default camelCase;