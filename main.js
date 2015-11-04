window.onload = function () {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext("2d");

        context.fillStyle = "blue";
        context.fillRect(40, 300, 30, 100);
        context.fillRect(1120, 300, 30, 100);