class Sprite {
  constructor({
    position,
    velocity,
    image,
    frames = { max: 1 },
    sprites,
    scale = 1,
  }) {
    this.position = position;
    this.image = image;
    this.frames = { ...frames, val: 0, elapsed: 0 };
    this.image.onload = () => {
      this.width = this.image.width / this.frames.max;
      this.height = this.image.height;
    };
    this.moving = false;
    this.sprites = sprites;
    this.scale = scale;
  }
  complete() {
    if (this.frames.val < this.frames.max - 1) {
      this.frames.val++;
    }
  }
  draw() {
    c.drawImage(
      this.image,
      this.frames.val * this.width,
      0,
      this.image.width / this.frames.max / this.scale,
      this.image.height / this.scale,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height
    );
    if (!this.moving) return;
    if (this.frames.max >= 1) {
      this.frames.elapsed++;
    }
    if (this.frames.elapsed % 10 === 0) {
      if (this.frames.val < this.frames.max - 1) {
        this.frames.val++;
      } else {
        this.frames.val = 0;
      }
    }
  }
}

class choiceBox {
  constructor({ position, image, correctChoice, selected }) {
    this.position = position;
    this.image = image;
    this.correctChoice = correctChoice;
    this.selected = selected;
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

class Boundary {
  static width = 48;
  static height = 48;

  constructor({ position, code }) {
    this.position = position;
    this.height = 16;
    this.width = 16;
    this.code = code;
  }
  draw() {
    c.fillStyle = "rgba(255,0,0,0 )";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
