window.addEventListener('keydown', function (e) {
    window.keyPressed = e.key;
}, false);

var keyboard = {
    button: function() {
        return window.keyPressed;
    }
}