/*jshint esversion: 6 */

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 2;  // goes outside window otherwise
canvas.height = window.innerHeight- 6; // the same

let mouse = {
    x: undefined,
    y: undefined
};

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth - 2;  // goes outside window otherwise
    canvas.height = window.innerHeight- 6; // the same
});

class Circle {
    constructor(x, y, xs, ys, r) {
        this.x = x;
        this.y = y;
        this.xSpeed = xs;
        this.ySpeed = ys;
        this.radius = r;
        this.color = `rgb(${Math.floor(Math.random() * 255)}, 0, 0)`;
        this.maxRadius = 100;
        this.minRadius = r;
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

        if(this.x>canvas.width - this.radius || this.x<0 + this.radius) {
            this.xSpeed *= -1;
        }
        if(this.y>canvas.height - this.radius || this.y<0 + this.radius) {
            this.ySpeed *= -1;
        }

        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if(this.radius < this.maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

let circles = [];

for(let i = 0; i< 1000; i++) {
    let radius = Math.random() * 5 + 1;
    let xStart = Math.random() * (canvas.width-radius*2) + radius;
    let yStart = Math.random() * (canvas.height/40-radius*2) + radius;
    let xSpeedStart = (Math.random() - 0.5) * 1;
    let ySpeedStart = (Math.random() - 0.5) * 1;
    circles.push(new Circle(xStart, yStart, xSpeedStart, ySpeedStart, radius));
}

ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const animate = () => {
    requestAnimationFrame(animate);

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < circles.length; i++) {
        circles[i].update();
    }

};

animate();