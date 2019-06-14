$().ready(canvas_app);

function canvas_app(){
    
    var canvas = $('#canvas');
    var ctx = canvas[0].getContext('2d');
    //var xr = 10;
    /* var direcaor1 = "top"; 
    var direcaor2 = "esquerda"; */
    var r1 = new Rect(canvas[0]);
    var r2 = new Rect(canvas[0]);
    var r3 = new Rect(canvas[0]);
    r2.direcao = "left";
    r2.c = "blue";
    r2.speed = 2;
    r3.direcao = "right";
    r3.y = 200;
    r3.c = "pink";
    r3.speed = 3;
    var key =0;
    const total = 1;


    var load =0;
    var score= 0;
    var loop = setInterval(isLoaded, 1000);


    var theme = new Audio();
    var smile = new Smile(canvas[0]);
    var fruit = new Fruit(canvas[0]);


    function isLoaded(){
        if(load==total){
            let msg="PRONTO: Click para jogar!!";
            ctx.font='28px arial';
            ctx.fillText(msg,100,50);
            canvas.click(function(){
                theme.play();
                //mainLoop();
                drawScreen();
            });
            clearInterval(loop);
        }
    }

    loadAssets();

    function loadAssets(){
        theme.src = 'sounds/theme.mp3';
        theme.oncanplaythrough = function(){
            load++;
            theme.volume = 0.2;
            theme.loop = true;
            console.log('LOAD: '+theme.src);
        };
        theme.load();

    }

    $(document).keydown(function(e){
        key = e.which;
        console.log(key);
        console.log(e.key);
    });
    $(document).keyup(function(){
        key=0;
    })

    //drawScreen(); Está sendo chamado na função isLoaded, quando o usuário clicar para começar.

    function drawScreen(){
       
        //background
        ctx.fillStyle = "red";
        ctx.fillRect(0,0,500,300);
        
        //box
        ctx.strokeStyle = "black";
        ctx.strokeRect(5,5,490,290);

       

       /* //Retangulo
        ctx.fillStyle = "gray";
        ctx.fillRect(xr,10,50,50);
        xr++;*/

        /* //circulo
        ctx.beginPath();
        ctx.strokeStyle = "Violet";
        ctx.lineWidth = 2;
        ctx.arc(35,
            35, //Posição X, referencia o centro do circulo;
            20, //Posição Y;
            0, // Angulo inicial, onde começa o traço
            (Math.PI / 180)*360, //Angulo final;
            false //Sentido horário;
            );
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.stroke();
        ctx.closePath(); */

        /*ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.arc(15,
            35, //Posição X, referencia o centro do circulo;
            10, //Posição Y;
            50, // Angulo inicial, onde começa o traço
            (Math.PI / 180)*360, //Angulo final;
            false //Sentido horário;
            );
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.strokeStyle = "Violet";
        ctx.lineWidth = 2;
        ctx.arc(35,
            35, //Posição X, referencia o centro do circulo;
            20, //Posição Y;
            0, // Angulo inicial, onde começa o traço
            (Math.PI / 180)*360, //Angulo final;
            false //Sentido horário;
            );
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();*/
            
           // r1.move(key);

            r1.draw(ctx);
            r1.move();
            
            
            r2.draw(ctx);
            r2.move();

            r3.draw(ctx);
            r3.move();
            smile.draw(ctx);
            smile.move(key);
            fruit.draw(ctx);

            function colision(smile,fruit){
                
                if((smile.x - fruit.xf)**2+(smile.y-fruit.yf)**2 < (smile.r+fruit.rf)**2){
                    console.log("Chegoooou");
                    fruit.position();   
                }
                else{
                        
                }
            } 
        colision(smile, fruit);
        requestAnimationFrame(drawScreen);
    }

}