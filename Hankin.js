class Hankin {
    constructor(a, v) {
        this.a = a;
        this.v = v;
        this.b = p5.Vector.add(a, v);
        this.end;
        this.previousDistance;
    }

    show() {
        // console.log(this.end)
        stroke(255);
        line(this.a.x, this.a.y, this.end.x, this.end.y);
        //for debugging
        // fill(255)
        // ellipse(this.a.x, this.a.y, 10, 10);
        // if(this.end){
        //     fill('red')
        //     ellipse(this.end.x, this.end.y, 10, 10);
        // }
    }

    findEnd(other) {
        //line intersection
        // this.z, this.v (P1, P2-P1)
        // other.a, other.b (P3, P4-P3)

        let denominator = other.v.y * this.v.x - other.v.x * this.v.y;
        let numeratorA =
            other.v.x * (this.a.y - other.a.y) -
            other.v.y * (this.a.x - other.a.x);
        let numeratorB =
            this.v.x * (this.a.y - other.a.y) -
            this.v.y * (this.a.x - other.a.x);

        let ua = numeratorA / denominator;
        let ub = numeratorB / denominator;

        let x = this.a.x + ua * this.v.x;
        let y = this.a.y + ub * this.v.y;

        if(ua > 0 && ub > 0){
            let candidate = createVector(x,y)
            let d1 = p5.Vector.dist(candidate, this.a)
            let d2 = p5.Vector.dist(candidate, other.a)
            let d = d1 + d2
            if(!this.end){
                this.end = candidate
                this.previousDistance = d
            }else if(d < this.previousDistance){
                this.previousDistance = d
                this.end = candidate
            }


        }
    }
}
