'use strict';Object.defineProperty(exports,'__esModule',{value:!0});function notifyBeforeClose(){return window.onbeforeunload=function(){return'\u786E\u8BA4\u8981\u79BB\u5F00\u5417\uFF1F'},{removeNotifyBeforeClose:function removeNotifyBeforeClose(){window.onbeforeunload=function(){}}}}exports.default=notifyBeforeClose;