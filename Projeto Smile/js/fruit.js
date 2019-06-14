class Fruit{
    constructor(canvas){
        this.canvas = canvas;
        this.xf;
        this.yf;
        this.rf=10;
        console.log("fruit");
        if(!this.xf && !this.yf){
            this.position();
        }
    }
    draw(ctx){
        ctx.beginPath();
        ctx.strokeStyle = "green";
        ctx.lineWidth = 1;
        ctx.arc(this.xf,this.yf, this.rf, 0, 2*Math.PI, false);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    position(){
        this.xf = Math.random() * this.canvas.width - this.rf;
        this.yf = Math.random() * this.canvas.height - this.rf;

        if(this.yf < this.rf){
            this.yf = this.rf;
        }
        if(this.yf > this.canvas.height - this.rf){
            this.yf = this.canvas.height-this.rf;
        }
        if(this.xf < this.rf){
            this.xf = this.rf;
        }
        if(this.xf > this.canvas.width - this.rf){
            this.xf = this.canvas.width - this.rf;
        }

    }

}