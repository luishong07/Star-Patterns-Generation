class Edge{
    constructor(a,b){
        this.a = a
        this.b = b
        this.h1
        this.h2
    }

    show(){
        stroke(255)
        line(this.a.x, this.a.y, this.b.x, this.b.y)
        this.h1.show()        
        this.h2.show()

    }

    hankin(){
        let mid = p5.Vector.add(this.a,this.b)
        mid.mult(0.5)
        let v1 = p5.Vector.sub(this.a, mid)
        let v2 = p5.Vector.sub(this.b, mid)
        v2.rotate(radians(angle))
        v1.rotate(radians(-angle))


        this.h1 = new Hankin(mid,v1)
        this.h2 = new Hankin(mid,v2)
        
    }

    findEnd(edge){
        // for(let i = 0; i < edges.length; i++){

        // }

        this.h1.findEnd(edge.h1)
        this.h1.findEnd(edge.h2)
        this.h2.findEnd(edge.h2)
        this.h2.findEnd(edge.h1)
    }
}