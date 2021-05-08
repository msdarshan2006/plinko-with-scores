class Plinko{
    constructor(x,y){
        var options = {
            isStatic : true,
            friction:0,
            restitution:1
        };
        this.radius=10;
        this.body=Bodies.circle(x,y,this.radius,options);

        Matter.World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        fill("white");
        ellipse( 0, 0, this.radius, this.radius);

        pop();
      }

}