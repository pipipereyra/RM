class Smile{
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

    move(key){
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
    }
}