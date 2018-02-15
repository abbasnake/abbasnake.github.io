/*jshint esversion: 6 */


class Simbol{
    constructor() {
        this.name = "dievs1"; // default simbol

        this.cacheDom();
        this.createCanvas();
        this.createControls();
        this.createSliders();
        this.createDropdown();
        this.createCheckbox();
        this.setDefaultVariables();
        this.setBasicUnits();
        this.render();
    }

    cacheDom() {
        this.grid = document.querySelector(".grid"); // everything goes in here
    }

    createCanvas() {
        this.canvas = document.createElement("canvas");
        this.canvas.classList.add("canvas");
        this.canvas.setAttribute("width", "1080px");
        this.canvas.setAttribute("height", "540px");
        this.grid.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
    }

    createControls() {
        this.controls = document.createElement("form"); // a form where all the controls will be placed
        this.controls.classList.add("controls");
        this.grid.appendChild(this.controls);

        this.controlTemplate("controls--bgColors");
        this.controlTemplate("controls--colors");
        this.controlTemplate("controls--settings");
        this.controlTemplate("controls--simbols");
    }

    controlTemplate(name) {
        this[name] = document.createElement("div"); // 4 user input groups, 3 sliders each except last one
        this[name].classList.add(name);
        this.controls.appendChild(this[name]);
    }

    createSliders() {
        this.sliderTemplate("sliderRedBg",   "controls--bgColors", "BgRed");
        this.sliderTemplate("sliderGreenBg", "controls--bgColors", "BgGreen");
        this.sliderTemplate("sliderBlueBg",  "controls--bgColors", "BgBlue");

        this.sliderTemplate("sliderRed",   "controls--colors", "Red",   "155");
        this.sliderTemplate("sliderGreen", "controls--colors", "Green", "0");
        this.sliderTemplate("sliderBlue",  "controls--colors", "Blue",  "0");

        this.sliderTemplate("sliderAmount", "controls--settings", "Amount", "100", "1",   "1000");
        this.sliderTemplate("sliderArea",   "controls--settings", "Area",   "22",  "1");
        this.sliderTemplate("sliderWidth",  "controls--settings", "Width",  "1",   "0.1", "255", "0.1");
    }

    sliderTemplate(name, parent, label, value="255", min="0", max="255", step="1") {
        this[label] = document.createElement("div");   // create div with the name of the current slider
        this[label].classList.add(label);              // add unique class
        this[label].classList.add("controls--labels"); // add shared class "label"
        this[label].textContent = `${label} ${value}`; // add the name + value for user
        this[parent].appendChild(this[label]);         // place in one of 4 divs

        this[name] = document.createElement("input");  // create input tag
        this[name].classList.add(name);                // add unique class
        this[name].classList.add("controls--sliders"); // add shared class "slider"
        this[name].setAttribute("type", "range");      // input type = range
        this[name].setAttribute("min", min);           // min value
        this[name].setAttribute("max", max);           // max value
        this[name].setAttribute("value", value);       // default value
        this[name].setAttribute("title", value);       // tooltip value
        this[name].setAttribute("step", step);
        /*
        next if's are to set the slider background to the color it's set on
        */
        if(this[name].classList.contains("sliderRedBg") || this[name].classList.contains("sliderRed")) {
            this[name].style.background = `rgb(${value}, 0, 0)`;
        }
        if(this[name].classList.contains("sliderGreenBg") || this[name].classList.contains("sliderGreen")) {
            this[name].style.background = `rgb(0, ${value}, 0)`;
        }
        if(this[name].classList.contains("sliderBlueBg") || this[name].classList.contains("sliderBlue")) {
            this[name].style.background = `rgb(0, 0, ${value})`;
        }
        this[parent].appendChild(this[name]); // place in one of 4 divs
        this.sliderEvent(this[name]);         // add event listeners
    }

    sliderEvent(slider) {
        slider.addEventListener("input", (e) => {
            /*
            - setting the simbol color to slider value;
            - changing the tooltip to correspond to slider value;
            - changing background color to correspond to slider value
            - finally hardcoding the name of the label to update the visible value,
              careful with the naming, this.BgRed is the label, this.bgRed is the 
              red value of this class
              */
              if(e.target.classList.contains("sliderRedBg")){
                this.setBgColor(e.target.value, this.bgGreen, this.bgBlue);
                slider.setAttribute("title", e.target.value);
                slider.style.background = `rgb(${e.target.value}, 0, 0)`;
                this.BgRed.textContent = `BgRed ${e.target.value}`;
            }
            if(e.target.classList.contains("sliderGreenBg")){
                this.setBgColor(this.bgRed, e.target.value, this.bgBlue);
                slider.setAttribute("title", e.target.value);
                slider.style.background = `rgb(0, ${e.target.value}, 0)`;
                this.BgGreen.textContent = `BgGreen ${e.target.value}`;
            }
            if(e.target.classList.contains("sliderBlueBg")){
                this.setBgColor(this.bgRed, this.bgGreen, e.target.value);
                slider.setAttribute("title", e.target.value);
                slider.style.background = `rgb(0, 0, ${e.target.value})`;
                this.BgBlue.textContent = `BgBlue ${e.target.value}`;
            }
            if(e.target.classList.contains("sliderRed")){
                this.setColor(e.target.value, this.green, this.blue);
                slider.setAttribute("title", e.target.value);
                slider.style.background = `rgb(${e.target.value}, 0, 0)`;
                this.Red.textContent = `Red ${e.target.value}`;
            }
            if(e.target.classList.contains("sliderGreen")){
                this.setColor(this.red, e.target.value, this.blue);
                slider.setAttribute("title", e.target.value);
                slider.style.background = `rgb(0, ${e.target.value}, 0)`;
                this.Green.textContent = `Green ${e.target.value}`;
            }
            if(e.target.classList.contains("sliderBlue")){
                this.setColor(this.red, this.green, e.target.value);
                slider.setAttribute("title", e.target.value);
                slider.style.background = `rgb(0, 0, ${e.target.value})`;
                this.Blue.textContent = `Blue ${e.target.value}`;
            }
            if(e.target.classList.contains("sliderAmount")){ // these last 3 dont have the background color setting
                this.setAmount(e.target.value);
                slider.setAttribute("title", e.target.value);
                this.Amount.textContent = `Amount ${e.target.value}`;
            }
            if(e.target.classList.contains("sliderArea")){
                this.setArea(e.target.value);
                slider.setAttribute("title", e.target.value);
                this.Area.textContent = `Area ${e.target.value}`;
            }
            if(e.target.classList.contains("sliderWidth")){
                this.setLineWidth(e.target.value);
                slider.setAttribute("title", e.target.value);
                this.Width.textContent = `Width ${e.target.value}`;
            }
        });
    }

    createDropdown() {
        this.select = document.createElement("select");
        this.select.classList.add("controls--simbols--dropdown");
        this.select.setAttribute("name", "simbol");
        this["controls--simbols"].appendChild(this.select);

        const arr = [ // not very DRY
        "dievs1", "dievs2", "marasL", "zalktis1", "zalktis2", 
        "jumis", "zvaigzne1", "zvaigzne2", "marasK", "laimasS", 
        "metenis", "usins", "austra", "martins", "aka", "janis", 
        "austrasK", "krupitis", "meness", "saule", "perkons", "karogs"
        ];
        for(let i = 0; i < arr.length; i++) {
            this.option = document.createElement("option");
            this.option.setAttribute("value", arr[i]);
            this.option.textContent = arr[i];
            this.select.appendChild(this.option);
        }
        this.dropdownEvent(this.select);
    }

    dropdownEvent(select) {
        select.addEventListener("change", (e) => {
            this.changeSimbol(e.target.value);
        });
    }

    createCheckbox() {
        this.checkboxDiv = document.createElement("div");
        this.checkboxDiv.classList.add("controls--simbols--checkbox");
        this.checkboxDiv.textContent = "Randomize Colors";
        this["controls--simbols"].appendChild(this.checkboxDiv);

        this.checkbox = document.createElement("input");
        this.checkbox.setAttribute("type", "checkbox");
        this.checkbox.setAttribute("checked", "true");
        this.checkboxDiv.appendChild(this.checkbox);
        this.checkbox.addEventListener("click", (e) => {
            if(e.target.checked) { // ternery operator didn't work for some reason
                this.setIsColRandom(true);
            } else {
                this.setIsColRandom(false);
            }
        });
    }

    setBasicUnits() {
        this.centerWidth = this.canvas.width/2;   // center width
        this.centerHeight = this.canvas.height/2; // center height
        this.widthUnit = this.canvas.width/20;    // width divided in 20 units
        this.heightUnit = this.canvas.height/10;  // height divided in 10 units
    }

    setDefaultVariables() {
        this.amount = 100;
        this.area = 22;

        this.red = 150;
        this.green = 0;
        this.blue = 0;
        this.isColRandom = true;

        this.lineWidth = 1;

        this.bgRed = 255;
        this.bgGreen = 255;
        this.bgBlue = 255;
    }

    setAmount(a) {
        this.amount = a;
        this.render();
    }

    setArea(a) {
        this.area = a;
        this.render();
    }

    setColor(r, g, b) {
        this.red = r;
        this.green = g;
        this.blue = b;
        this.render();
    }

    setBgColor(r, g, b) {
        this.bgRed = r;
        this.bgGreen = g;
        this.bgBlue = b;
        this.render();
    }

    setIsColRandom(bool) {
        this.isColRandom = bool;
        this.renderColor();
        this.render();
    }

    renderColor() {
        let r = this.red;
        let g = this.green;
        let b = this.blue;
        if(this.isColRandom) {
            if(this.red == 0 && this.green == 0 && this.blue == 0){
                const gray = Math.floor(Math.random() * 255);
                r = gray;
                g = gray;
                b = gray;
            } else {
                r = Math.floor(Math.random() * this.red);
                g = Math.floor(Math.random() * this.green);
                b = Math.floor(Math.random() * this.blue);
            }
        }
        return `rgb(${r}, ${g}, ${b}`;
    }

    setLineWidth(w) {
        this.lineWidth = w;
        this.render();
    }

    setBackground(r, g, b) {
        this.bgRed = r;
        this.bgGreen = g;
        this.bgBlue = b;
        this.render();
    }

    renderBackground() {
        this.ctx.fillStyle = `rgb(${this.bgRed}, ${this.bgGreen}, ${this.bgBlue})`;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    randomizeArea() {
        return (Math.random() * this.area) - (Math.random() * this.area); 
    }


    renderLines(x1, y1, x2, y2) {
        x1 = this.centerWidth + (this.widthUnit*x1);
        y1 = this.centerHeight + (this.heightUnit*y1);
        x2 = this.centerWidth + (this.widthUnit*x2);
        y2 = this.centerHeight + (this.heightUnit*y2);
        for(let i = 0; i<this.amount; i++){
            const xx1 = x1 + this.randomizeArea();
            const yy1 = y1 + this.randomizeArea();
            const xx2 = x2 + this.randomizeArea();
            const yy2 = y2 + this.randomizeArea();
            this.ctx.beginPath();
            this.ctx.moveTo(xx1, yy1);
            this.ctx.lineTo(xx2,yy2);
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.strokeStyle = this.renderColor();
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }

    // dictionary (object) of all the simbols
    renderSimbol(name) {
        const dictionary = {
            dievs1: () => {
                this.renderLines(0, -3, -5, 2);
                this.renderLines(0, -3, 5, 2);
            },
            dievs2: () => {
                this.renderLines(0, -3, -5, 2);
                this.renderLines(0, -3, 5, 2);
                this.renderLines(-5, 2, 5, 2);
            },
            marasL: () => {
                this.renderLines(-6, 3, -4, -3);
                this.renderLines(-4, -3, -2, 3);
                this.renderLines(-2, 3, 0, -3);
                this.renderLines(0, -3, 2, 3);
                this.renderLines(2, 3, 4, -3);
                this.renderLines(4, -3, 6, 3);
            },
            zalktis1: () => {
                this.renderLines(-4, -3, -4, 3);
                this.renderLines(-4, 3, 0, 3);
                this.renderLines(0, 3, 0, -3);
                this.renderLines(0, -3, 4, -3);
                this.renderLines(4, -3, 4, 3);
            },
            zalktis2: () => {
                this.renderLines(-3, -3, -6, 0);
                this.renderLines(-6, 0, -3, 3);
                this.renderLines(-3, 3, 3, -3);
                this.renderLines(3, -3, 6, 0);
                this.renderLines(6, 0, 3, 3);
            },
            jumis: () => {
                this.renderLines(-4, 0, -2, -3);
                this.renderLines(-2, -3, 3, 3);
                this.renderLines(-3, 3, 2, -3);
                this.renderLines(2, -3, 4, 0);
            },
            zvaigzne1: () => {
                this.renderLines(-4, 0, 4, 0);
                this.renderLines(-3, -3, 3, 3);
                this.renderLines(0, -4, 0, 4);
                this.renderLines(-3, 3, 3, -3);
            },
            zvaigzne2: () => {
                this.renderLines(-3, -1, -1, -1);
                this.renderLines(-1, -1, -1, -3);
                this.renderLines(-1, -3, 0, -2);
                this.renderLines(0, -2, 1, -3);
                this.renderLines(1, -3, 1, -1);
                this.renderLines(1, -1, 3, -1);
                this.renderLines(3, -1, 2, 0);
                this.renderLines(2, 0, 3, 1);
                this.renderLines(3, 1, 1, 1);
                this.renderLines(1, 1, 1, 3);
                this.renderLines(1, 3, 0, 2);
                this.renderLines(0, 2, -1, 3);
                this.renderLines(-1, 3, -1, 1);
                this.renderLines(-1, 1, -3, 1);
                this.renderLines(-3, 1, -2, 0);
                this.renderLines(-2, 0, -3, -1);
            },
            marasK: () => {
                this.renderLines(-3, -3, 3, 3);
                this.renderLines(-3, 3, 3, -3);
                this.renderLines(-3, -1, -1, -3);
                this.renderLines(1, -3, 3, -1);
                this.renderLines(3, 1, 1, 3);
                this.renderLines(-1, 3, -3, 1);
            },
            laimasS: () => {
                this.renderLines(-1, -2, -1, 2);
                this.renderLines(0, -2, 0, 2);
                this.renderLines(1, -2, 1, 2);
                this.renderLines(-5, -2, -4, 0);
                this.renderLines(-4, 0, -5, 2);
                this.renderLines(-4, -2, -3, 0);
                this.renderLines(-3, 0, -4, 2);
                this.renderLines(-3, -2, -2, 0);
                this.renderLines(-2, 0, -3, 2);
                this.renderLines(5, -2, 4, 0);
                this.renderLines(4, 0, 5, 2);
                this.renderLines(4, -2, 3, 0);
                this.renderLines(3, 0, 4, 2);
                this.renderLines(3, -2, 2, 0);
                this.renderLines(2, 0, 3, 2);
            },
            metenis: () => {
                this.renderLines(-1, -1, 1, 1);
                this.renderLines(-1, 1, 1, -1);
                this.renderLines(-3, -1, 0, 2);
                this.renderLines(0, 2, 3, -1);
                this.renderLines(-3, 1, 0, -2);
                this.renderLines(0, -2, 3, 1);
            },
            usins: () => {
                this.renderLines(0, -3, 0, -3);
                this.renderLines(0, 0, 0, 0);
                this.renderLines(0, 3, 0, 3);
                this.renderLines(-5, -3, -1, -3);
                this.renderLines(-1, -3, -1, 3);
                this.renderLines(-1, 3, -5, 3);
                this.renderLines(-5, 0, -1, 0);
                this.renderLines(5, -3, 1, -3);
                this.renderLines(1, -3, 1, 3);
                this.renderLines(1, 3, 5, 3);
                this.renderLines(1, 0, 5, 0);
            },
            austra: () => {
                this.renderLines(-2, -1, 0, 1);
                this.renderLines(0, 1, 2, -1);
                this.renderLines(-3, 0, -2, 1);
                this.renderLines(-2, 1, 1, -2);
                this.renderLines(-1, -2, 2, 1);
                this.renderLines(2, 1, 3, 0);
            },
            martins: () => {
                this.renderLines(-3, -2, -2, -3);
                this.renderLines(-2, -3, 2, 1);
                this.renderLines(2, 1, 4, -1);
                this.renderLines(4, -1, 6, 1);
                this.renderLines(6, 1, 4, 3);
                this.renderLines(-4, 3, -6, 1);
                this.renderLines(-6, 1, -4, -1);
                this.renderLines(-4, -1, -2, 1);
                this.renderLines(-2, 1, 2, -3);
                this.renderLines(2, -3, 3, -2);
            },
            aka: () => {
                this.renderLines(-1, -3, 3, 1);
                this.renderLines(-3, 1, 1, -3);
                this.renderLines(-1, 3, 3, -1);
                this.renderLines(-3, -1, 1, 3);
            },
            janis: () => {
                this.renderLines(-1, 2, 0, 1);
                this.renderLines(1, 2, 0, 1);
                this.renderLines(0, 1, 0, -1);
                this.renderLines(0, -1, -1, -2);
                this.renderLines(-1, -2, 0, -3);
                this.renderLines(0, -3, 1, -2);
                this.renderLines(1, -2, 0, -1);
            },
            austrasK: () => {
                this.renderLines(0, -3, 0, 3);
                this.renderLines(-1, -2, 0, -1);
                this.renderLines(1, -2, 0, -1);
                this.renderLines(-3, -2, 0, 1);
                this.renderLines(3, -2, 0, 1);
                this.renderLines(-3, -1, -2, -1);
                this.renderLines(-2, -2, -2, -1);
                this.renderLines(-2, 0, -1, 0);
                this.renderLines(-1, -1, -1, 0);
                this.renderLines(3, -1, 2, -1);
                this.renderLines(2, -2, 2, -1);
                this.renderLines(2, 0, 1, 0);
                this.renderLines(1, -1, 1, 0);
            },
            krupitis: () => {
                this.renderLines(-3, -1, -1, -3);
                this.renderLines(-1, -3, 2, 0);
                this.renderLines(3, -1, 1, -3);
                this.renderLines(1, -3, -2, 0);
                this.renderLines(-2, 0, 1, 3);
                this.renderLines(1, 3, 3, 1);
                this.renderLines(2, 0, -1, 3);
                this.renderLines(-1, 3, -3, 1);
            },
            meness: () => {
                this.renderLines(-2, -1, -1, 0);
                this.renderLines(-1, 0, -2, 1);
                this.renderLines(0, -1, 1, -2);
                this.renderLines(1, -2, 2, -1);
                this.renderLines(2, -1, 2, 1);
                this.renderLines(2, 1, 1, 2);
                this.renderLines(1, 2, 0, 1);
            },
            saule: () => {
                this.renderLines(-1, 0, 0, -1);
                this.renderLines(0, -1, 1, 0);
                this.renderLines(1, 0, 0, 1);
                this.renderLines(0, 1, -1, 0);
                this.renderLines(0, 1, 0, 3);
                this.renderLines(0, 3, -1, 4);
                this.renderLines(-1, 4, -2, 3);
                this.renderLines(-2, 3, -2, 2);
                this.renderLines(-2, 2, -0.5, 0.5);
                this.renderLines(-2, 2, -3, 2);
                this.renderLines(-3, 2, -4, 1);
                this.renderLines(-4, 1, -3, 0);
                this.renderLines(-3, 0, -1, 0);
                this.renderLines(0, -1, 0, -3);
                this.renderLines(0, -3, -1, -4);
                this.renderLines(-1, -4, -2, -3);
                this.renderLines(-2, -3, -2, -2);
                this.renderLines(-2, -2, -0.5, -0.5);
                this.renderLines(-2, -2, -3, -2);
                this.renderLines(-3, -2, -4, -1);
                this.renderLines(-4, -1, -3, 0);
                this.renderLines(0, 3, 1, 4);
                this.renderLines(1, 4, 2, 3);
                this.renderLines(2, 3, 2, 2);
                this.renderLines(2, 2, 0.5, 0.5);
                this.renderLines(2, 2, 3, 2);
                this.renderLines(3, 2, 4, 1);
                this.renderLines(4, 1, 3, 0);
                this.renderLines(3, 0, 1, 0);
                this.renderLines(1, -4, 2, -3);
                this.renderLines(2, -3, 2, -2);
                this.renderLines(2, -2, 0.5, -0.5);
                this.renderLines(2, -2, 3, -2);
                this.renderLines(3, -2, 4, -1);
                this.renderLines(4, -1, 3, -0);
                this.renderLines(0, -3, 1, -4);
            },
            perkons: () => {
                this.renderLines(-2, 2, 2, -2);
                this.renderLines(-2, -2, 2, 2);
                this.renderLines(-1, 1, -3, -1);
                this.renderLines(-3, -1, -4, 0);
                this.renderLines(-2, 0, -3, 1);
                this.renderLines(1, -1, 3, 1);
                this.renderLines(3, 1, 4, 0);
                this.renderLines(2, 0, 3, -1);
                this.renderLines(1, 1, -1, 3);
                this.renderLines(-1, 3, 0, 4);
                this.renderLines(0, 2, 1, 3);
                this.renderLines(-1, -1, 1, -3);
                this.renderLines(1, -3, 0, -4);
                this.renderLines(0, -2, -1, -3);
            },
            karogs: () => {
                this.renderLines(-4, -1, 4, -1);
                this.renderLines(-4, 1, 4, 1);
            }
        };

        dictionary[name](); // it turns out you can call object functions this way, just adding the "()" at the end
    }

    changeSimbol(name) {
        this.name = name;
        this.render();
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //clear canvas
        this.renderBackground();
        this.renderSimbol(this.name);
    }
} // class Simbol end

//************************************************************************

const s1 = new Simbol();

// const bobo = ()=> {
//     s1.render();
// };
// setInterval(bobo, 1000);
// const timer = setInterval(console.log("bobo"), 1000);