// let poly
let polies = [];

let angle = 60;
let delta = 10;

let deltaSlider;
let angleSlider;

function setup() {
    createCanvas(500, 500);
    // put setup code here
    background(0);
    deltaSlider = createSlider(0, 25, 0);
    angleSlider = createSlider(0, 90, 60);
    let inc = 100;
    for (let x = 0; x < width; x += inc) {
        for (let y = 0; (y = height); y += inc) {
            poly = new Polygon();
            poly.addVertex(x, y);
            poly.addVertex(x + inc, y);
            poly.addVertex(x + inc, y + inc);
            poly.addVertex(x, y + inc);
            poly.close();
            polies.push(poly);
        }
    }

    // poly.hankin()
    // poly.show()
}

function draw() {
    background(0);
    angle = angleSlider.value();
    delta = deltaSlider.value();

    for (let i = 0; i < polies.length; i++) {
        polies[i].hankin();
        polies[i].show();
    }
}
