class Polygon {
    constructor(){
        this.edges =[]
        this.vertices =[]

    }

    addVertex(x,y){
        let a = createVector(x,y)
        let total = this.vertices.length
        if(total>0){
            let previous = this.vertices[total-1]
            let edge = new Edge(previous, a)
            this.edges.push(edge)
        }
        this.vertices.push(a)
    }

    show(){
        for(let i = 0; i < this.edges.length; i++){
            this.edges[i].show()
        }
    }
    close(){
        let total = this.vertices.length
        let last = this.vertices[total -1]
        let first = this.vertices[0]
        let edge = new Edge(last, first)
        this.edges.push(edge)
    }
    hankin(){
        for(let i = 0; i< this.edges.length; i++){
            this.edges[i].hankin()
        }
    }
}