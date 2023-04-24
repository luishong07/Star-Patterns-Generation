class Hankin {
    constructor(a, v) {
        this.a = a;
        this.v = v;
        this.b = p5.Vector.add(a,v)
    }

    show(){
        stroke(255)
        line(this.a.x, this.a.y, this.b.x, this.b.y)
        ellipse(this.a.x, this.a.y, 10,10)
        
        fill('blue')
        // ellipse(this.b.x+10, this.b.y+10, 10,10)

    }
}
