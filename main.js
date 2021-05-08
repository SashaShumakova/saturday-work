var canvas = document.getElementById('game')
    var context = canvas.getContext('2d')

    var x = 0;
    var y = 0;
    var direction = 'up'

    function play() {
        var key = keyboard.button()


        if (key == 'ArrowUp') {
            y = y - 1
        }

        if (key == 'ArrowDown') {
            y = y + 1
        }

        if (key == 'ArrowLeft') {
            x = x - 1
        }

        if (key == 'ArrowRight') {
            x = x + 1;
        }

        context.clearRect(0,0,600,500)
        context.fillRect(x, y, 20, 20)

        window.webkitRequestAnimationFrame(play); 
    }

    play();