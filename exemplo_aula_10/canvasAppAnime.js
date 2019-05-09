window.onload = canvasApp;

function canvasApp(){
    //alert("teste");
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    drawScreen();

    function drawScreen(){
        //background
        context.fillStyle = "#ffffff";
        context.fillRect(0,0,500,300);

        //Rect
        context.fillStyle = "#0000ff";
        context.fillRect(10,10,50,50);

        //text
        //context.fillStyle = "#000000";
        //context.font = "20px sans-serif";
        //context.Baseline = "top";
        //context.fillText("Olá Mundo!", 195, 80);

        //image
        var img = new Image();
        img.src = "img/alomundo.png";
        img.onload = function (){
            context.drawImage(img,160,130);
            
            //shadow
            context.shadowColor = "#f00";
            context.shadowOffsetX = 5;
            context.shadowOffsetY = 5;
            context.shadowBlur = 5;

            //text

            context.fillStyle = "#fff";
            context.font = "20px sans-serif";
            context.Baseline = "top";
            context.fillText("Olá Mundo!", 195, 210);
        }

        //box
        context.strokeStyle = "rgb(0,0,0)";
        context.strokeRect(5,5,490,290);
    }
}