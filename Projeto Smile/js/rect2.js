class Rect{
    constructor(x,y,widht, height, color='green'){
        this.x = x;
        this.y = y;
        this.w = widht;
        this.h = height;
        this.c = color;
    }
    draw(ctx){
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    move(){

        console.log(this.x, this.w, "OLAR");
        if(this.x+this.w < 500){
            this.x -= 1;
        }
    }

    /* move(key){
        if(key==39){
            this.x+=5;
        }
        if(key==37){
            this.x-=5;
        }
        if(key==40){
            this.y+=5;
        }
        if(key==38){
            this.y-=5;
        }
    } */
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