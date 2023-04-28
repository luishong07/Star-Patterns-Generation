class Polygon {
    constructor(n) {
        this.edges = [];
        this.vertices = [];
        this.sides = n
    }

    addVertex(x, y) {
        let a = createVector(x, y);
        let total = this.vertices.length;
        if (total > 0) {
            let prev = this.vertices[total - 1];
            let edge = new Edge(prev, a);
            this.edges.push(edge);
        }
        this.vertices.push(a);
    }

    show() {
        for (var i = 0; i < this.edges.length; i++) {
            this.edges[i].show();
        }
    }
    close() {
        let total = this.vertices.length;
        let last = this.vertices[total - 1];
        let first = this.vertices[0];
        let edge = new Edge(last, first);
        this.edges.push(edge);
    }
    hankin() {
        for (var i = 0; i < this.edges.length; i++) {
            this.edges[i].hankin(this.sides);
        }

        // for (var i = 0; i < this.edges.length; i++) {
        //     for (var j = 0; j < this.edges.length; j++) {
        //         if (i !== j) {
        //             this.edges[i].findEnds(this.edges[j]);
        //         }
        //     }
        // }
    }
}
