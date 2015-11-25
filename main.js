window.onload = function () {

        //FUNCTION CONSTRUCTORS / GAME OBJECT BLUEPRINTS

        //PADDLE
        //----------------------------------------------
        function Paddle (x, y, width, height, color_in) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = color_in;
            this.speed = 30;

        }

        Paddle.prototype.render =  function(ctx){
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        };

        Paddle.prototype.moveUp =  function(){

            // console.log("You pressed the Up Arrow");


            //Update the position
            this.y -= this.speed;

            //Check for collision with Board Edge
            //IF PADDLE <= TOP OF BOARD OR PADDLE >= BOTTOM OF BOARD
            if (this.y <= TOP_BOARD || this.y >= BOTTOM_BOARD){

                    //if there is collision, backtrack the value;
                    //THEN BACKTRACK VALUE AND RESTORE VALUE OF Y
                    this.y += this.speed;
              }


            
        }

        Paddle.prototype.moveDown =  function(){
            // Update the position
            this.y += this.speed;

           // //Check for collision with Board Edge
           // //IF PADDLE >= BOTTOM OF BOARD OR TOP OF BOARD
           if (this.y <= TOP_BOARD || this.y >= BOTTOM_BOARD){
           //      //if there is collision, backtrack the value;
           //          //THEN BACKTRACK VALUE AND RESTORE VALUE OF X
                  this.y -= this.speed;
           }   


           //  console.log("You pressed the Down Arrow");
        }




        //----------------------------------------------

        //BALL
        //----------------------------------------------
      
        function Ball (x, y, radius, color, speed, adam, joseph) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.speed = speed;
            this.directionX = adam;
            this.directionY = joseph;


            this.draw = function (ctx) {
              ctx.fillStyle = this.color;
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.radius, 0,2*Math.PI);
              ctx.fill();
            }

            this.updatePosition = function(){
               
              
                  //MOVE THE BALL TO A NEW LOCATION -> NEW_LOCATION = CURRENT_LOC + (SPEED * DIRECTION)
                     var newLocationX = this.x + (this.speed * this.directionX);
                     var newLocationY = this.y + (this.speed * this.directionY);
                  //CHECK FOR COLLISION WITH ALL FOUR WALLS
                  if (newLocationY<= TOP_BOARD || newLocationY >= BOTTOM_BOARD) {
                    this.directionY = (this.directionY * -1);
                  }

                  else if (newLocationX <= LEFT_BOARD || newLocationX >= RIGHT_BOARD) {
                    this.directionX = (this.directionX * -1);
                  }

                  else {
                      this.x = newLocationX;
                      this.y = newLocationY;
                  }
                   // paddles have fixed x range (paddle left and right have left and right x boudnaries)

                   // if (newLocationY >= player.y) {
                   //  this.directionY = (this.directionY * -1);
                   // }

                   // else {
                   //  this.y = (this.directionY * -1);
                   // }
            // variable y positions (update top and bottom y each paddle move)
            // for ball, if position x is in range of a  paddle and y is in range of that paddles y
            //     then reflect
            // then check for other paddle x and y ranges
          

            }

              //IF COLLIDES BACKTRACK, THEN REVERSE DIRECTION
              console.log("Updating Ball");

            
          }



        //--END OF BLUEPRINTS------------------  

        //GLOBAL Variables
        var context;
        var player;
        var computer;
        var pongBall;
        var canvas;

        var UP_ARROW = 38;
        var DOWN_ARROW = 40;

        var TOP_BOARD;
        var BOTTOM_BOARD;
        var RIGHT_BOARD;
        var LEFT_BOARD;

        var FRAME_RATE = 60;


        //initialize the canvas, and save the context
        InitCanvas();

        //initialize game variables
        InitGameVars();

        //add event listeners
        InitEventListeners();

        //call update/render
        //setInterval(Render, 1.0/FRAME_RATE);

        Render();

        function InitCanvas(){
              canvas = document.getElementById('myCanvas');
              context = canvas.getContext("2d");

              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;

              TOP_BOARD = 0; //canvas.offsetTop;
              BOTTOM_BOARD = 700;
              // canvas.offsetHeight;
              RIGHT_BOARD = canvas.width;
              LEFT_BOARD = 0;

        }

     
        function InitGameVars(){

              player = new Paddle(40,300,30,100, "blue");
              computer = new Paddle(1360, 300, 30, 100, "yellow");
              pongBall = new Ball(600,300,15, "yellow", 5, Math.random(), Math.random()); 
              // randomDirection(),randomDirection()

              //function randomDirection 
                // randomly generate a number +5 or - 5
                // function randomDirection {
                //   var rand = math.random() * 5;

                // }
                //pythagorean theorem
                //return direction

              // fucttion to move ball
                  // if ball position = max or min Y
                      //account for radius of ball
                  // switch speed of y (times -1)
                  //if ball position = paddle position

        }

        function InitEventListeners(){

              document.addEventListener("keydown", onKeyDown, false);

        }

        function onKeyDown(ev){

              ev.preventDefault();
              console.log(ev.keyCode);

              //Check for Which Key was Pressed

              //IF(KEYPRESS === UPKEY)
              if(ev.keyCode === UP_ARROW){
                //THEN MOVE PADDLE UP
                player.moveUp();

              }
              else if(ev.keyCode === DOWN_ARROW){
                //ELSE MIOVE PADDLE DOWN
                player.moveDown();

              }

              //Render();
              

        }

        function Render(){

              //Clear THE FRAME BUFFER
              context.clearRect(0, 0, canvas.width, canvas.height);


              player.render(context);
              computer.render(context);

              pongBall.updatePosition();
              pongBall.draw(context);

              requestAnimationFrame(Render);

    

        }


        //UTILITY FUNCTIONS START HERE
        //____________________________

        function movePaddleUp(){

            console.log("You pressed the Up Arrow");
        }


     

      }


      // copy + paste the animate function (calls a callback x60/s)

      var animate = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     ||
        function(callback) { window.setTimeout(callback, 1000/60) };

        
     //  // replace callback with function step (repaints the screen)

      // var step = function ()


      //   animate(step);
      // }
     //  // remove render's call from window.onload and move to step()

      // window.onload = function() {

      // }
     //  //   maybe need to call requestAnimationFrame() or animate()
     //  // window.onload call animate()

     //  // Append property speed to Paddle
     //  var xSpeed = 5;
     //  var ySpeed = 5;
      
     // function Paddle(speed) {
     //  this.speed = speed;
     // }

     //  // Append move() to Paddle

      // var keysDown = {};


     //  //   updates Y position based on speed and direction
     //  //   make sure doesn't go off screen

     //  // window.addEventListener() for key press
     //  //   call .move() for appropriate paddle passing in a variable diection
