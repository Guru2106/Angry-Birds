class Box1() {

    constructor() {

        var options = {
            restitution: 0.8
        }

        this.body = bodies.rectangle(100, 100, 40, 40, options);

            world.add(myWorld, this.body)
    
    }

    display() {

        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, 40, 40);

    }

}