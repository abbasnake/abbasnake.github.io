/*jshint esversion: 6 */
// GLOBAL VARIABLES***********************************************************************
//****************************************************************************************

let canvas;
let canvasWidth = document.getElementById("canvas").offsetWidth;
let canvasHeight = canvasWidth/2;

let simbolOne, simbolTwo, simbolThree;
let simbolArray = [simbolOne, simbolTwo, simbolThree];
let simbolOneOn = true;
let simbolTwoOn = false;
let simbolThreeOn = false;
let simbolOnArray = [simbolOneOn, simbolTwoOn, simbolThreeOn];

const simbolNames = [
"dievs1",
"dievs2",
"marasL",
"zalktis1",
"zalktis2",
"jumis",
"zvaigzne1",
"zvaigzne2",
"marasK",
"laimasS",
"metenis",
"usins",
"austra",
"martins",
"aka",
"janis",
"austrasK",
"krupitis",
"meness",
"saule",
"perkons",
"karogs"
];

let rBackgroundSlider, gBackgroundSlider, bBackgroundSlider; 
let rSlider, gSlider, bSlider, thickSlider, lineAreaSlider, lineCountSlider;
let simbolOneSelector, simbolTwoSelector, simbolThreeSelector;

let sliderWidth = canvasWidth/5;
let sliderArray = [];

// PROCESSING P5 SETUP FUNCTION***************************************************
//*****************************************************************************************

setup = () => {
    canvasSetup();

    backgroundSliderSetup();
    colorSliderSetup();
    thicknessSliderSetup();
    lineAreaSliderSetup();
    lineCountSliderSetup();
    simbolSelectorSetup();

    sliderArray = [
    rBackgroundSlider,
    gBackgroundSlider,
    bBackgroundSlider,
    rSlider,
    gSlider,
    bSlider,
    thickSlider,
    lineAreaSlider,
    lineCountSlider
    ];
};

// PROCESSING P5 DRAW FUNCTION*****************************************************
//******************************************************************************************

draw = () => {
    background(rBackgroundSlider.value(), gBackgroundSlider.value(), bBackgroundSlider.value());

    drawSimbols();

    noLoop(); // comment out for animation
};

// FUNCTIONS FOR RESPONSIVE WINDOW SIZE, MOUSE ACTIONS AND KEY PRESSES***********************
//*******************************************************************************************

// this function deals with canvas size when window size is changed
windowResized = () => {
    canvasWidth = document.getElementById('canvas').offsetWidth;
    canvasHeight = canvasWidth/2;
    sliderWidth = canvasWidth/5; // sort of responsive slider width
    resizeCanvas(canvasWidth, canvasHeight);
    for(let i = 0; i<sliderArray.length; i++){ // resize sliders
        sliderArray[i].size(sliderWidth);
    }
};

mouseActions = () => {
    loop();
};

keyPressed = () => {
    loop();
};

// SETUP FUNCTIONS**************************************************************************
//******************************************************************************************
canvasSetup = () => {
    pixelDensity(2); // this sets the resolution of the canvas or something
    canvas = createCanvas(canvasWidth, canvasHeight).parent("canvas"); // canvas is a div id
    canvas.style("border", "2px solid #740D09");
};

backgroundSliderSetup = () => {
    rBackgroundSlider = createSlider(0, 255, 255, 1).parent("rBackground");
    rBackgroundSlider.size(sliderWidth);
    rBackgroundSlider.mouseMoved(mouseActions);
    gBackgroundSlider = createSlider(0, 255, 255, 1).parent("gBackground");
    gBackgroundSlider.size(sliderWidth);
    gBackgroundSlider.mouseMoved(mouseActions);
    bBackgroundSlider = createSlider(0, 255, 255, 1).parent("bBackground");
    bBackgroundSlider.size(sliderWidth);
    bBackgroundSlider.mouseMoved(mouseActions);
};

colorSliderSetup = () => {
    rSlider = createSlider(0, 255, 155, 1).parent("rColor");
    rSlider.size(sliderWidth);
    rSlider.mouseMoved(mouseActions);
    gSlider = createSlider(0, 255, 0, 1).parent("gColor");
    gSlider.size(sliderWidth);
    gSlider.mouseMoved(mouseActions);
    bSlider = createSlider(0, 255, 0, 1).parent("bColor");
    bSlider.size(sliderWidth);
    bSlider.mouseMoved(mouseActions);
};

thicknessSliderSetup = () => {
    thickSlider = createSlider(1, 500, 20, 1).parent("thickSetting");
    thickSlider.size(sliderWidth);
    thickSlider.mouseMoved(mouseActions);
};

lineAreaSliderSetup = () => {
    lineAreaSlider = createSlider(1, 100, 20, 1).parent("areaSetting");
    lineAreaSlider.size(sliderWidth);
    lineAreaSlider.mouseMoved(mouseActions);
};

lineCountSliderSetup = () => {
    lineCountSlider = createSlider(1, 500, 100, 1).parent("countSetting");
    lineCountSlider.size(sliderWidth);
    lineCountSlider.mouseMoved(mouseActions);
};

simbolSelectorSetup = () => {
    simbolOneSelector = createSelect().parent("simbolOne");
    simbolTwoSelector = createSelect().parent("simbolTwo");
    simbolThreeSelector = createSelect().parent("simbolThree");
    for(let i = 0; i<simbolNames.length; i++){
        simbolOneSelector.option(simbolNames[i]);
        simbolTwoSelector.option(simbolNames[i]);
        simbolThreeSelector.option(simbolNames[i]);
    }
};


// DRAW FUNCTIONS***************************************************************************
//******************************************************************************************

drawSimbols = () => {
    // check how many signs are selected

    // create selected signs
    for(let i = 0; i<simbolOnArray.length; i++){
        if(simbolOnArray[i]){
            simbolArray[i] = new Simbol();
            simbolArray[i].setLineArea(lineAreaSlider.value()); // default 20
            simbolArray[i].setLineCount(lineCountSlider.value()); // default 100
            simbolArray[i].setLineThickness(thickSlider.value()/10); // default 1
            simbolArray[i].setColorRandom(true); // default false
            simbolArray[i].setRGB(rSlider.value(), gSlider.value(), bSlider.value()); // default (0, 0, 0), 

            // simbolArray[i].dievs1(); // choose one or all or duplicate
            // simbolArray[i].dievs2();
            // simbolArray[i].marasL();
            // simbolArray[i].zalktis1();
            // simbolArray[i].zalktis2();
            // simbolArray[i].jumis();
            // simbolArray[i].zvaigzne1();
            // simbolArray[i].zvaigzne2();
            // simbolArray[i].marasK();
            // simbolArray[i].laimasS();
            // simbolArray[i].metenis();
            // simbolArray[i].usins();
            // simbolArray[i].austra();
            // simbolArray[i].martins();
            // simbolArray[i].aka();
            // simbolArray[i].janis();
            // simbolArray[i].austrasK();
            simbolArray[i].krupitis();
            // simbolArray[i].meness();
            // simbolArray[i].saule();
            // simbolArray[i].perkons();
            // simbolArray[i].karogs();
        }
    }

};

// LATVIAN SIMBOL OBJECT/CLASSE/FUNCTION, I DONT KNOW***************************************
//******************************************************************************************

function Simbol() {

    let lineArea = 20; // size of area for random start and end points
    let lineCount = 100; // how many lines to use
    let lineThickness = 1;

    // Local size variables
    let centerOfWidth = canvasWidth/2;
    let centerOfHeight = canvasHeight/2;
    let widthUnit = canvasWidth/20; //the whole width divided in 20 units
    let heightUnit = canvasHeight/10; // the whole height divided in 10 units

    // Local color variables
    let redColor = 0;
    let greenColor = 0;
    let blueColor = 0;
    let colorRandom = false;

    // set area method
    this.setLineArea = (num) => {
        lineArea = num;
    };

    // set count method
    this.setLineCount = (num) => {
        lineCount = num;
    };

    this.setLineThickness = (num) => {
        lineThickness = num;
    };

    // Color setting method
    this.setRGB = (r, g, b) => {
        redColor = r;
        greenColor = g;
        blueColor = b;
    };

    // Color randomization method (true or false)
    this.setColorRandom = (rand) => {
        colorRandom = rand;
    };

    // color + randomness
    let setColor = () => {
        if (colorRandom){
            stroke(int(random(redColor)), int(random(greenColor)), int(random(blueColor)));
            // make greyscale if color set to black and randomness is true
            if (redColor + greenColor + blueColor === 0){
                stroke(int(random(255)));
            }
        } else {
            stroke(redColor, greenColor, blueColor);
        }
    };

    let adjustAndSetThickness = () => {
        let adjustedLineThickness = map(width, 300, 960, lineThickness/3, lineThickness);
        strokeWeight(adjustedLineThickness);
    };

    // Return a random point within the given area + resizing it according to window size
    let randomAreaPoint = () => {
        for(let i = 0; i<lineCount; i++){
            let adjustedLineArea = map(width, 300, 960, lineArea/3, lineArea);
            return int(random(-adjustedLineArea, adjustedLineArea));
        }
    };

    // Each of the line start and end points are calculated in the following way:
    // center of canvas + how many units away from center + add user set randomness (lineArea).
    // It's basically a modified line() function
    let createLines = (x1FromCenter, y1FromCenter, x2FromCenter, y2FromCenter) => {
        for (let i = 0; i<lineCount; i++){

            adjustAndSetThickness();
            setColor(); // setting color for each line

            // point = center + (one unit * number of units) + randomness;
            let x1 = centerOfWidth + (x1FromCenter * widthUnit) + randomAreaPoint();
            let y1 = centerOfHeight + (y1FromCenter * heightUnit) + randomAreaPoint();
            let x2 = centerOfWidth + (x2FromCenter * widthUnit) + randomAreaPoint();
            let y2 = centerOfHeight + (y2FromCenter * heightUnit) + randomAreaPoint();
            line(x1, y1, x2, y2);
        }
    };


    // SIGN CREATION 

    // So, for the first line in "dievs1" below you have:
    // x1 - stay in center, 
    // y1 - 3 units to the top, 
    // x2 - 5 units to the left,
    // y2 - 2 units to the bottom
    this.dievs1 = () => {
        createLines(0, -3, -5, 2);
        createLines(0, -3, 5, 2);
    };

    this.dievs2 = () => {
        createLines(0, -3, -5, 2);
        createLines(0, -3, 5, 2);
        createLines(-5, 2, 5, 2);
    };

    this.marasL = () => {
        createLines(-6, 3, -4, -3);
        createLines(-4, -3, -2, 3);
        createLines(-2, 3, 0, -3);
        createLines(0, -3, 2, 3);
        createLines(2, 3, 4, -3);
        createLines(4, -3, 6, 3);
    };

    this.zalktis1 = () => {
        createLines(-4, -3, -4, 3);
        createLines(-4, 3, 0, 3);
        createLines(0, 3, 0, -3);
        createLines(0, -3, 4, -3);
        createLines(4, -3, 4, 3);
    };

    this.zalktis2 = () => {
        createLines(-3, -3, -6, 0);
        createLines(-6, 0, -3, 3);
        createLines(-3, 3, 3, -3);
        createLines(3, -3, 6, 0);
        createLines(6, 0, 3, 3);
    };

    this.jumis = () => {
        createLines(-4, 0, -2, -3);
        createLines(-2, -3, 3, 3);
        createLines(-3, 3, 2, -3);
        createLines(2, -3, 4, 0);
    };

    this.zvaigzne1 = () => {
        createLines(-4, 0, 4, 0);
        createLines(-3, -3, 3, 3);
        createLines(0, -4, 0, 4);
        createLines(-3, 3, 3, -3);
    };

    this.zvaigzne2 = () => {
        createLines(-3, -1, -1, -1);
        createLines(-1, -1, -1, -3);
        createLines(-1, -3, 0, -2);
        createLines(0, -2, 1, -3);
        createLines(1, -3, 1, -1);
        createLines(1, -1, 3, -1);
        createLines(3, -1, 2, 0);
        createLines(2, 0, 3, 1);
        createLines(3, 1, 1, 1);
        createLines(1, 1, 1, 3);
        createLines(1, 3, 0, 2);
        createLines(0, 2, -1, 3);
        createLines(-1, 3, -1, 1);
        createLines(-1, 1, -3, 1);
        createLines(-3, 1, -2, 0);
        createLines(-2, 0, -3, -1);
    };

    this.marasK = () => {
        createLines(-3, -3, 3, 3);
        createLines(-3, 3, 3, -3);
        createLines(-3, -1, -1, -3);
        createLines(1, -3, 3, -1);
        createLines(3, 1, 1, 3);
        createLines(-1, 3, -3, 1);
    };

    this.laimasS = () => {
        createLines(-1, -2, -1, 2);
        createLines(0, -2, 0, 2);
        createLines(1, -2, 1, 2);
        createLines(-5, -2, -4, 0);
        createLines(-4, 0, -5, 2);
        createLines(-4, -2, -3, 0);
        createLines(-3, 0, -4, 2);
        createLines(-3, -2, -2, 0);
        createLines(-2, 0, -3, 2);
        createLines(5, -2, 4, 0);
        createLines(4, 0, 5, 2);
        createLines(4, -2, 3, 0);
        createLines(3, 0, 4, 2);
        createLines(3, -2, 2, 0);
        createLines(2, 0, 3, 2);
    };

    this.metenis = () => {
        createLines(-1, -1, 1, 1);
        createLines(-1, 1, 1, -1);
        createLines(-3, -1, 0, 2);
        createLines(0, 2, 3, -1);
        createLines(-3, 1, 0, -2);
        createLines(0, -2, 3, 1);
    };

    this.usins = () => {
        createLines(0, -3, 0, -3);
        createLines(0, 0, 0, 0);
        createLines(0, 3, 0, 3);
        createLines(-5, -3, -1, -3);
        createLines(-1, -3, -1, 3);
        createLines(-1, 3, -5, 3);
        createLines(-5, 0, -1, 0);
        createLines(5, -3, 1, -3);
        createLines(1, -3, 1, 3);
        createLines(1, 3, 5, 3);
        createLines(1, 0, 5, 0);
    };

    this.austra = () => {
        createLines(-2, -1, 0, 1);
        createLines(0, 1, 2, -1);
        createLines(-3, 0, -2, 1);
        createLines(-2, 1, 1, -2);
        createLines(-1, -2, 2, 1);
        createLines(2, 1, 3, 0);
    };

    this.martins = () => {
        createLines(-3, -2, -2, -3);
        createLines(-2, -3, 2, 1);
        createLines(2, 1, 4, -1);
        createLines(4, -1, 6, 1);
        createLines(6, 1, 4, 3);
        createLines(-4, 3, -6, 1);
        createLines(-6, 1, -4, -1);
        createLines(-4, -1, -2, 1);
        createLines(-2, 1, 2, -3);
        createLines(2, -3, 3, -2);
    };

    this.aka = () => {
        createLines(-1, -3, 3, 1);
        createLines(-3, 1, 1, -3);
        createLines(-1, 3, 3, -1);
        createLines(-3, -1, 1, 3);
    };

    this.janis = () => {
        createLines(-1, 2, 0, 1);
        createLines(1, 2, 0, 1);
        createLines(0, 1, 0, -1);
        createLines(0, -1, -1, -2);
        createLines(-1, -2, 0, -3);
        createLines(0, -3, 1, -2);
        createLines(1, -2, 0, -1);
    };

    this.austrasK = () => {
        createLines(0, -3, 0, 3);
        createLines(-1, -2, 0, -1);
        createLines(1, -2, 0, -1);
        createLines(-3, -2, 0, 1);
        createLines(3, -2, 0, 1);
        createLines(-3, -1, -2, -1);
        createLines(-2, -2, -2, -1);
        createLines(-2, 0, -1, 0);
        createLines(-1, -1, -1, 0);
        createLines(3, -1, 2, -1);
        createLines(2, -2, 2, -1);
        createLines(2, 0, 1, 0);
        createLines(1, -1, 1, 0);
    };

    this.krupitis = () => {
        createLines(-3, -1, -1, -3);
        createLines(-1, -3, 2, 0);
        createLines(3, -1, 1, -3);
        createLines(1, -3, -2, 0);
        createLines(-2, 0, 1, 3);
        createLines(1, 3, 3, 1);
        createLines(2, 0, -1, 3);
        createLines(-1, 3, -3, 1);
    };

    this.meness = () => {
        createLines(-2, -1, -1, 0);
        createLines(-1, 0, -2, 1);
        createLines(0, -1, 1, -2);
        createLines(1, -2, 2, -1);
        createLines(2, -1, 2, 1);
        createLines(2, 1, 1, 2);
        createLines(1, 2, 0, 1);
    };

    this.saule = () => {
        createLines(-1, 0, 0, -1);
        createLines(0, -1, 1, 0);
        createLines(1, 0, 0, 1);
        createLines(0, 1, -1, 0);
        createLines(0, 1, 0, 3);
        createLines(0, 3, -1, 4);
        createLines(-1, 4, -2, 3);
        createLines(-2, 3, -2, 2);
        createLines(-2, 2, -0.5, 0.5);
        createLines(-2, 2, -3, 2);
        createLines(-3, 2, -4, 1);
        createLines(-4, 1, -3, 0);
        createLines(-3, 0, -1, 0);
        createLines(0, -1, 0, -3);
        createLines(0, -3, -1, -4);
        createLines(-1, -4, -2, -3);
        createLines(-2, -3, -2, -2);
        createLines(-2, -2, -0.5, -0.5);
        createLines(-2, -2, -3, -2);
        createLines(-3, -2, -4, -1);
        createLines(-4, -1, -3, 0);
        createLines(0, 3, 1, 4);
        createLines(1, 4, 2, 3);
        createLines(2, 3, 2, 2);
        createLines(2, 2, 0.5, 0.5);
        createLines(2, 2, 3, 2);
        createLines(3, 2, 4, 1);
        createLines(4, 1, 3, 0);
        createLines(3, 0, 1, 0);
        createLines(1, -4, 2, -3);
        createLines(2, -3, 2, -2);
        createLines(2, -2, 0.5, -0.5);
        createLines(2, -2, 3, -2);
        createLines(3, -2, 4, -1);
        createLines(4, -1, 3, -0);
        createLines(0, -3, 1, -4);
    };

    this.perkons = () => {
        createLines(-2, 2, 2, -2);
        createLines(-2, -2, 2, 2);
        createLines(-1, 1, -3, -1);
        createLines(-3, -1, -4, 0);
        createLines(-2, 0, -3, 1);
        createLines(1, -1, 3, 1);
        createLines(3, 1, 4, 0);
        createLines(2, 0, 3, -1);
        createLines(1, 1, -1, 3);
        createLines(-1, 3, 0, 4);
        createLines(0, 2, 1, 3);
        createLines(-1, -1, 1, -3);
        createLines(1, -3, 0, -4);
        createLines(0, -2, -1, -3);
    };

    this.karogs = () => {
        createLines(-4, -1, 4, -1);
        createLines(-4, 1, 4, 1);
    };
}

