let poly 
let angle = 45
function setup() {
	createCanvas(500, 500);
	// put setup code here
	background(0)
	poly = new Polygon()
	poly.addVertex(width/4, height/4)
	poly.addVertex(width/2, height/4)
	poly.addVertex(width/2, height/2)
	poly.addVertex(width/4, height/2)
	poly.close()
	poly.hankin()
	poly.show()


}

function draw() {
	// put drawing code here
	// for(let i = 0; i < this.edges.length; i++){
	// 	this.edges[i].show()
	// }
}
