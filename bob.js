class Bob {
    constructor(x,y,r){
    var options={
    density:0.7,
    restituiton:0.8
    }
    this.radius=r;
    this.bob=Bodies.circle(x,y,r,options);
    World.add(world,this.bob);
    }
    display(){
        var pos=this.bob.position;
        push();
        translate(pos.x, pos.y);
        
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
    }