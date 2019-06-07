$().ready(canvas_app);

function canvas_app(){
    
    var canvas = $('#canvas');
    var ctx = canvas[0].getContext('2d');
    var r1 = new Rect(100, 100, 50, 50, 'green');
    var r2 = new Rect(450, 100, 50, 50, 'blue');
    var key =0;
    const total = 1;
    var load =0;
    var loop = setInterval(isLoaded, 1000);

    var theme = new Audio();
    var smile = new Smile(canvas[0]);


    function isLoaded(){
        if(load==total){
            let msg="PRONTO: Click para jogar!!";
            ctx.font='28px arial';
            ctx.fillText(msg,100,50);
            canvas.click(function(){
                theme.play();
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
        r1.draw(ctx);
            r1.y += 1;
            
            r2.draw(ctx);
            r2.x--;
            smile.draw(ctx);
            smile.move(key);
        requestAnimationFrame(drawScreen);
    }

}