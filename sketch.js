var font;
var vehicles = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var txtht = window.innerWidth/30;
var rowspace = 1.5*txtht;
var showTxt = 0;

function preload(){
    font = loadFont('avenir.otf')
}

function setup() {
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    //frameRate(30);
    DispAlphabet((window.innerHeight/2)+rowspace,alphabet)
}

function draw() {
    background(0);
    fill(255);
    textSize(txtht);
    for (var i = 0; i < this.alphabet.length; i++) {
        text(alphabet[i], (i+1)*(window.innerWidth)/28, window.innerHeight/2)
    }
    vehicles.forEach(function(vehicle) {
        vehicle.behaviours();
        vehicle.update();
        vehicle.show();
    });

    if(showTxt!=0){
        fill(255,0,0);
        mystr = "400,000,000,000,000,000,000,000,000";
        text(mystr,(window.innerWidth/2)-9*txtht,window.innerHeight/3);
        fill(255);
    }
}

function DispAlphabet(y, alphabet){
    this.y = y;
    this.alphabet = alphabet;

    for (var i = 0; i < this.alphabet.length; i++) {
        this.x = (i+1)*(window.innerWidth)/28
        var curletter = this.alphabet[i];
        var vehicle = new Vehicle(this.x,this.y, curletter);
        vehicles.push(vehicle);
    }

}

function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

function mousePressed(){
    shuffledbet = shuffle(Array.from(alphabet))
    vehicles.forEach(function(vehicle){
        var x = shuffledbet.indexOf(vehicle.letter);
        vehicle.target.x = (x+1)*(window.innerWidth)/28
    });
}

function keyPressed() {
    showTxt = 1;
}