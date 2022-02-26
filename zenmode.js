api.addButtonToToolbar({
    title: 'Zen mode',
    icon: 'fullscreen',
    action: function() {
         $("body").toggleClass("zen-mode");
    },
    shortcut: 'alt+z'
});

$(document).ready(function(){
    $(document).on({
       keypress: debounce(function () { hideMore(); }, 500),
       mousemove: debounce(function (e) { showSome(e); }, 500)
    });
});
function hideMore() {
    if (document.body.classList.contains('zen-mode'))
        $("#center-pane > div:nth-child(2)").fadeTo("slow", 0); // word count
}
function showSome(e) {
    var bottomY = $(window).height() - e.pageY;
    if (bottomY <= 50)
        $("#center-pane > div:nth-child(2)").fadeTo("slow", 1);
}
function debounce(func, interval) {
    var lastCall = -1;
    return function() {
        clearTimeout(lastCall);
        var args = arguments;
        var self = this;
        lastCall = setTimeout(function() {
            func.apply(self, args);
        }, interval);
    };
}
