class Dot {
  top = 50;
  left = 50;

  constructor(color) {
    this.color = color;
  }

  init() {
    this.createElement();
    this.updateStyles();
    this.createControls();
  }

  updateStyles() {
    this.element.style.height = "50px";
    this.element.style.width = "50px";
    this.element.style.borderRadius = "100px";
    this.element.style.background = this.color;
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}%`;
    this.element.style.left = `${this.left}%`;
    this.element.style.transform = "translate(-50%, -50%)";
    this.element.style.transition = "all 0.3s ease";
    this.element.style.opacity = "0.75";
  }

  createElement() {
    const dot = document.createElement("div");
    this.element = dot;

    document.getElementById("dots").append(dot);
  }
  createControls() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("control");

    const upBtn = document.createElement("button");
    upBtn.innerText = "Up";

    upBtn.addEventListener("click", () => {
      this.top -= 10;
      this.updateStyles();
    });

    const leftBtn = document.createElement("button");
    leftBtn.innerText = "Left";

    leftBtn.addEventListener("click", () => {
      this.left -= 10;
      this.updateStyles();
    });

    const rightBtn = document.createElement("button");
    rightBtn.innerText = "Right";

    rightBtn.addEventListener("click", () => {
      this.left += 10;
      this.updateStyles();
    });

    const downBtn = document.createElement("button");
    downBtn.innerText = "Down";

    downBtn.addEventListener("click", () => {
      this.top += 10;
      this.updateStyles();
    });

    wrapper.append(upBtn);
    wrapper.append(leftBtn);
    wrapper.append(rightBtn);
    wrapper.append(downBtn);

    document.getElementById("controls").append(wrapper);
  }
}

const dot1 = new Dot("red");
dot1.init();

const dot2 = new Dot("blue");
dot2.init();

const dot3 = new Dot("yellow");
dot3.init();

const dot4 = new Dot("magenta");
dot4.init();

console.log(dot2);
