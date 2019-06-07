class Rect{
    constructor(canvas){
        this.x = 100;
        this.y = 100;
        this.w = 50;
        this.h = 50;
        this.c = "green";
        this.direcao = "top";
        this.direcao2 = "right";
        this.canvas = canvas;
        this.speed = 1;
    }

    draw(ctx){
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    move(){

        //console.log(this.y, this.h, "OLAR");
            if(this.direcao == "top"){
                this.y-=this.speed;
            }
            if(this.direcao=="bottom"){
                this.y+=this.speed;
            }
        if(this.y > this.canvas.height - this.h){
            this.direcao = "top";
           // console.log(this.y, this.h, "OLAR");
        }
        if(this.y < 0){
            this.direcao = "bottom";
        }
        if(this.direcao == "right"){
            this.x-=this.speed;
            //console.log(this.x, this.w, "OLAR");
        }
        if(this.direcao == "left"){
            this.x+=this.speed;
        }
        if(this.x>this.canvas.width - this.w){
            this.direcao = "right";
            
        }
        if(this.x < 0){
            this.direcao = "left";
        }
    }
   /*  move2(){

        if(this.direcao2 == "right"){
            this.x-=this.speed;
            //console.log(this.x, this.w, "OLAR");
        }
        if(this.direcao2 == "left"){
            this.x+=this.speed;
        }
        if(this.x>this.canvas.width - this.w){
            this.direcao2 = "right";
            
        }
        if(this.x < 0){
            this.direcao2 = "left";
        }
    } */



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