class Smile{

    constructor(canvas){
        this.canvas = canvas;
        this.x=100;
        this.y=100;
        this.r=30;
        console.log("smile");
    }
    draw(ctx){
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.arc(this.x,this.y, this.r, 0, 2*Math.PI, false);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();


        //olho esquerdo
        var olhoraio = 5;

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.arc(this.x -(olhoraio*2),this.y - olhoraio, olhoraio, 0, 2*Math.PI, false);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        
        //olho direito
        var olhoraiod = 5;

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.arc(this.x+(olhoraiod*2),this.y - olhoraiod, olhoraiod, 0, 2*Math.PI, false);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();


        //boca

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        840
        ctx.arc(this.x,this.y, this.r-10, 0, 1*Math.PI, false);
        ctx.stroke();
        ctx.closePath();

    }
    update(){

    }    
    move(key){
        
        if(key==39 || key==68){
            this.x+=5;
        }
        if(key==37 || key==65){
            this.x-=5;
        }
        if(key==40 || key==83){
            this.y+=5;
        }
        if(key==38 || key==87){
            this.y-=5;
        }
        this.limite();
    }
    limite(){
        if(this.x< this.r){
            this.x = this.r;
        }
        //console.log(this.canvas.width);
        if(this.x>this.canvas.width-this.r){
            this.x = this.canvas.width-this.r;
        }
        if(this.y<this.r){
            this.y = this.r;
        }
        if(this.y>this.canvas.height-this.r){
            this.y = this.canvas.height-this.r;
        }
    }
}