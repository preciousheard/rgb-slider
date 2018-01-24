var precious, brooke, rickya;

function setup(){
    createCanvas(600,400).parent("sketch-holder");
    background(0);

    // precious = createSlider(0, 255, 125);
    // precious.position(20, 20);
    
    // brooke = createSlider(0, 255, 133);
    // brooke.position(20, 50);
    
    // rickya = createSlider(0, 255, 146);
    // rickya.position(20, 80);
}

function draw(){
    pv = precious.value();
    bv = brooke.value();
    rv = rickya.value();

    background(pv, bv, rv);
    
    textSize(30);
    textAlign(CENTER, CENTER);
    message = pv + " , " + bv + " , " + rv;
    text(message, width/2, height/2);
    
}

