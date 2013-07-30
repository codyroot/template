// Enterbugfix
eventUtility.addEvent(document, "keyup", function (e) {
    var el = eventUtility.getTarget(e),
    tag = el.tagName,
    code = eventUtility.keyCode(e);

    if (tag !== "INPUT") return;
    if (/checkbox/.test(el.type)) {
        if (code === 13) {
            if (el.checked) {
                el.checked = false;
            } else {
                el.checked = true;
            }
        }
    }
});