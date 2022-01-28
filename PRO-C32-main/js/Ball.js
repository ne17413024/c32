class Ball {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        if (ball.body.position.x < 300){
            score = 500;
        }
        if (ball.body.position.x > 301  &&  ball.body.position.x <600 ){
            score = 100;
        }
        if (ball.body.position.x > 601  &&  ball.body.position.x <900 ){
            score = 200;
        }

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};