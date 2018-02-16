/*jshint esversion: 6 */

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 2;  // goes outside window otherwise
canvas.height = window.innerHeight- 6; // the same

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth - 2;  // goes outside window otherwise
    canvas.height = window.innerHeight- 6; // the same
});

const colors = [
    "#0f5e9c", 
    "#2389da", 
    "#1ca3ec", 
    "#5abcd8", 
    "#74ccf4"
];

class Circle {
    constructor(x, y, xs, ys, r, c) {
        this.x = x;
        this.y = y;
        this.xSpeed = xs;
        this.ySpeed = ys;
        this.lowerBound = canvas.height - r;
        this.upperBound = canvas.height - 200;
        this.radius = r;
        const rand = Math.floor(Math.random()*colors.length);
        this.color = `${c}`;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x>canvas.width - this.radius) {
            this.x = 0;
        }
        if(this.y>this.lowerBound || this.y<this.upperBound) {
            this.ySpeed *= -1;
        }

        this.draw();
    }
}



let circles = [];
for(let i = 0; i<1000; i++) {
    const rand = Math.floor(Math.random()*colors.length);
    let x = Math.random() * canvas.width;
    let y = canvas.height - (Math.random() * 200);
    let speedX = Math.random()*1 + 1;
    let speedY = Math.random() * 0.2 - 0.2;
    circles.push(new Circle(x, y, speedX, speedY, 1, colors[rand]));
}

// const c1 = new Circle(0, canvas.height - 300, 0.5, 0, 10, "white");
const animate = () => {
    requestAnimationFrame(animate);

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // c1.update();
    for(let i = 0; i<circles.length; i++) {
        circles[i].update();
    }
};

animate();