// let poly
let polys = [];

let angle = 75;
let delta = 10;

let deltaSlider;
let angleSlider;

function setup() {
    createCanvas(innerWidth, innerHeight);
    //angleMode(DEGREES);
    background(51);
    deltaSlider = createSlider(0, 25, 10);
    angleSlider = createSlider(0, 90, 75);

    let inc = 100;
    for (let x = 0; x < width; x += inc) {
        for (let y = 0; y < height; y += inc) {
            let poly = new Polygon(4);
            poly.addVertex(x, y);
            poly.addVertex(x + inc, y);
            poly.addVertex(x + inc, y + inc);
            poly.addVertex(x, y + inc);
            poly.close();
            polys.push(poly);
        }
    }
}

function draw() {
    background(51);
    angle = angleSlider.value();
    delta = deltaSlider.value();
    //console.log(angle, delta);
    for (let i = 0; i < polys.length; i++) {
        polys[i].hankin();
        polys[i].show();
    }
}
