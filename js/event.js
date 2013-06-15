// Cross Browser Eventhandling
(function (window, undefined) {
  var eventUtility = {
   addEvent : function(el, type, fn) {
      if (el.addEventListener) {
        el.addEventListener(type, fn, false);
      } else if (el.attachEvent) {
        el.attachEvent("on" + type, fn);
      } else {
        el["on" + type] = fn;
      }
   },

   //removeEvent : function(el, type, fn) {
   // if (typeof removeEventListener !== undefined) {
   //     el.removeEventListener(type, fn, false);
   //   } else if (typeof detachEvent !== undefined) {
   //     el.detachEvent("on" + type, fn);
   //   } else {
   //     el["on" + type] = null;
   //   }
   //},

   getTarget : function(event) {
      if (event.target) {
        return event.target;
      } else {
        return event.srcElement;
      }
   },
   
   preventDefault : function(event) {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    }
  }

  window.eventUtility = eventUtility;

}(window, undefined));