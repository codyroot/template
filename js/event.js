// Cross Browser Eventhandling
(function (window, undefined) {

    // Implementierung nach Init-Time Branching
    var eventUtility = {
        addEvent: null,
        getTarget: null,
        keyCode: null,
        preventDefault: null
    };

    // Eventschnittstelle
    if (typeof window.addEventListener === 'function') {
        eventUtility.addEvent = function (el, type, fn) {
            el.addEventListener(type, fn, false);
        };
        eventUtility.getTarget = function (event) {
            return event.target;
        };
        eventUtility.keyCode = function (event) {
            return event.keyCode;
        };
        eventUtility.preventDefault = function (event) {
            event.preventDefault();
        };
        // IE < 9
    } else {
        eventUtility.addEvent = function (el, type, fn) {
            el.attachEvent('on' + type, fn);
        };
        eventUtility.getTarget = function (event) {
            return event.srcElement;
        };
        eventUtility.keyCode = function (event) {
            return event.charCode;
        };
        eventUtility.preventDefault = function (event) {
            event.returnValue = false;
        };
    }

    window.eventUtility = eventUtility;

}(window, undefined));