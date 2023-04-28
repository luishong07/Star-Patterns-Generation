class Hankin {
    constructor(a, v) {
        this.a = a;
        this.v = v;
        this.end = p5.Vector.add(a, v);
        // this.end;
        // this.previousDistance;
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

    // findEnd(other) {
    //     // line line intersection???
    //     // this.a, this.v  (P1, P2-P1)
    //     // other.a, other.v (P3, P4-P3)

    //     // for geometry formulas:  http://paulbourke.net/geometry/pointlineplane/
    //     let den = other.v.y * this.v.x - other.v.x * this.v.y;
    //     if (!den) {
    //         return;
    //     }
    //     let numa =
    //         other.v.x * (this.a.y - other.a.y) -
    //         other.v.y * (this.a.x - other.a.x);
    //     let numb =
    //         this.v.x * (this.a.y - other.a.y) -
    //         this.v.y * (this.a.x - other.a.x);
    //     let ua = numa / den;
    //     let ub = numb / den;
    //     let x = this.a.x + ua * this.v.x;
    //     let y = this.a.y + ua * this.v.y;

    //     if (ua > 0 && ub > 0) {
    //         let candidate = createVector(x, y);
    //         let d1 = p5.Vector.dist(candidate, this.a);
    //         let d2 = p5.Vector.dist(candidate, other.a);
    //         let d = d1 + d2;
    //         let diff = abs(d1 - d2);
    //         if (diff < 0.001) {
    //             if (!this.end) {
    //                 this.end = candidate;
    //                 this.prevD = d;
    //             } else if (d < this.prevD) {
    //                 this.prevD = d;
    //                 this.end = candidate;
    //             }
    //         }
    //     }
    // }
}
