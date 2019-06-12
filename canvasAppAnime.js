window.onload = canvasApp;

function canvasApp(){
    //alert("teste");
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    drawScreen();

    function drawScreen(){

        //gradiente
         var lingrad = context.createLinearGradient(0,0,500,0);
         lingrad.addColorStop(0.08,'red');
         lingrad.addColorStop(0.18,"white");
         lingrad.addColorStop(0.78,'white');
         lingrad.addColorStop(0.9,'purple');
         //context.fillStyle = "#000000";
         //context.fillStyle = lingrad;
         //context.fillText(message,x,y);
 

        //background
        context.fillStyle = lingrad;
        context.fillRect(0,0,500,300);

        //texto com gradiente
        var textgrad = context.createLinearGradient(0,0,500,0);
        
        textgrad.addColorStop(0.02,'blue');
        textgrad.addColorStop(0.5,"red");
        textgrad.addColorStop(0.8,'green');
        context.fillStyle = textgrad;
        context.font = "50px, sans-serif";
        var texto = "MDS ta tudo indo muito rápido, pelo menos estou entendendo";
        var tw = context.measureText(texto).width;
        var tx = 500/2 - tw/2;
        //var textgrad = context.createLinearGradient(0,0,500,0);
        
        //textgrad.addColorStop(0.02,'blue');
        //textgrad.addColorStop(0.5,"red");
        //textgrad.addColorStop(0.8,'green');
        //context.fillStyle = textgrad;
        //context.font = "50px, sans-serif";
        context.textBaseLine = 'top';
        context.fillText(texto,tx,50);
        //context.fillText("Mas Bah! Tchê, que barbaridade!!", 100,50);
        
        //gradiente radial
        var wr = 100; var hr = wr;
        var xr = 10; var yr = xr;
        var cr = wr/2+xr //formula para calcular o raio
         
        //                                  x0,y0,r0,x1,y1,r1
        var radial = context.createRadialGradient(cr,cr,1,cr,cr,50);
        radial.addColorStop(0.2,"yellow");
        radial.addColorStop(0.6,"white");

        //Rect
        context.fillStyle = radial;
        context.fillRect(xr,yr,wr,hr);
        context.strokeStyle = 'black';
        context.strokeRect(xr,yr,wr,hr);

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