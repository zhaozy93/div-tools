// add the alert modal function before the page will be closed
// also you get one object that can remove this function
function notifyBeforeClose(){
  window.onbeforeunload = function(){
    return '确认要离开吗？'
  };
  return {
    removeNotifyBeforeClose: function(){
      window.onbeforeunload = function(){}
    }
  }
}
export default notifyBeforeClose;