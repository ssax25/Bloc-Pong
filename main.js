window.onload = function () {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;



        function Paddle (x, y, width, height, color_in) {
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
          this.color = color_in;

          }

          Paddle.prototype.render =  function(ctx){
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.fillRect(this.x, this.y, this.width, this.height);
                ctx.stroke();
            };

      
          var player = new Paddle(40,300,30,100, "blue");
          var computer = new Paddle(1360, 300, 30, 100, "yellow");

          player.render(context);
          computer.render(context);

          function Ball (x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;

            this.draw = function (ctx) {
              ctx.fillStyle = this.color;
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.radius, 0,2*Math.PI);
              ctx.fill();
            }
          }

          var pongBall = new Ball(600,300,15, "yellow");

          pongBall.draw(context);

      }


      // copy + paste the animate function (calls a callback x60/s)

     //  var animate = window.requestAnimationFrame ||
     //    window.webkitRequestAnimationFrame ||
     //    window.mozRequestAnimationFrame    ||
     //    window.oRequestAnimationFrame      || 
     //    window.msRequestAnimationFrame     ||
     //    function(callback) { window.setTimeout(callback, 1000/60) };

     //    var cancel = window.requestAnimationFrame {
     //      window.webkitCancelAnimationFrame ||
     //    window.mozCancelAnimationFrame    ||
     //    window.oCancelnimationFrame      || 
     //    window.msCancelAnimationFrame     ||
     //    }
     //  // replace callback with function step (repaints the screen)

     //  var step = function ()


     //    animate(step);
     //  }
     //  // remove render's call from window.onload and move to step()

     //  window.onload = function() {

     //  }
     //  //   maybe need to call requestAnimationFrame() or animate()
     //  // window.onload call animate()

     //  // Append property speed to Paddle
     //  var xSpeed = 5;
     //  var ySpeed = 5;
      
     // function Paddle(speed) {
     //  this.speed = speed;
     // }

     //  // Append move() to Paddle

     //  var keysDown = {};


     //  //   updates Y position based on speed and direction
     //  //   make sure doesn't go off screen

     //  // window.addEventListener() for key press
     //  //   call .move() for appropriate paddle passing in a variable diection
