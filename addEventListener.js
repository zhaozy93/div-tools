// you will get one new object that have remove and readd function
// you can trigger remove to remove this event listener;
// or use readd to add this event listener again;
function addEventListener(dom, type, fn, capture){
  return new _addEventListener(dom, type, fn, capture);
}

function _addEventListener(dom, type, fn, capture){
  if(document.addEventListener){
    dom.addEventListener(type, fn, capture || false);
    this.IE = false;
  } else {
    dom.attachEvent('on'+type, fn);
    this.IE = true;
  }
  this.dom = dom;
  this.type = type;
  this.fn = fn;
  this.capture = capture;
  this.isWorking = true;
}
_addEventListener.prototype.remove = function(){
  if(this.IE){
    this.dom.detachEvent('on' + this.type, this.fn);
  } else {
    console.log('remove !IE')
    this.dom.removeEventListener(this.type, this.fn, this.capture);
  }
  this.isWorking = false;
}
_addEventListener.prototype.readd = function(){
  if(this.isWorking){ return; }
  this.isWorking = true;
  if(this.IE){
    this.dom.attachEvent('on'+type, fn);
  } else {
    this.dom.addEventListener(type, fn, capture || false);
  }
}

export default addEventListener;