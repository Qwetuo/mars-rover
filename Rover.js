const {
  getMaxX,
  getMaxY,
  getInitialDirection,
  getInitialX,
  getInitialY
} = require("./utils");

class Rover {
  constructor(PLATAEU_SIZE, INITIAL_POS, INSTRUCTIONS) {
    this.maxX = getMaxX(PLATAEU_SIZE);
    this.maxY = getMaxY(PLATAEU_SIZE);
    this.currentX = getInitialX(INITIAL_POS);
    this.currentY = getInitialY(INITIAL_POS);
    this.currentDirection = getInitialDirection(INITIAL_POS);
    this.instructions = INSTRUCTIONS;
    this.dropped = false;
  }

  changeDirectionToLeft(currentDirection) {
    if (currentDirection === "N") return "W";
    const compass = ["N", "E", "S", "W"];
    const currIndex = compass.indexOf(currentDirection);
    return compass[currIndex - 1];
  }

  changeDirectionToRight(currentDirection) {
    if (currentDirection === "W") return "N";
    const compass = ["N", "E", "S", "W"];
    const currIndex = compass.indexOf(currentDirection);
    return compass[currIndex + 1];
  }

  moveN(currentY) {
    return (+currentY + 1).toString();
  }

  moveS(currentY) {
    return (+currentY - 1).toString();
  }

  moveE(currentX) {
    return (+currentX + 1).toString();
  }

  moveW(currentX) {
    return (+currentX - 1).toString();
  }

  getFinalPosition() {
    const instructionsArr = this.instructions.split("");
    let result;
    instructionsArr.forEach(instruction => {
      if (this.dropped === false) {
        if (instruction === "L")
          this.currentDirection = this.changeDirectionToLeft(
            this.currentDirection
          );
        if (instruction === "R")
          this.currentDirection = this.changeDirectionToRight(
            this.currentDirection
          );
        if (instruction === "M") {
          if (this.currentDirection === "N")
            this.currentY = this.moveN(this.currentY);
          if (this.currentDirection === "S")
            this.currentY = this.moveS(this.currentY);
          if (this.currentDirection === "E")
            this.currentX = this.moveE(this.currentX);
          if (this.currentDirection === "W")
            this.currentX = this.moveW(this.currentX);
        }
        result =
          this.currentX + " " + this.currentY + " " + this.currentDirection;
      } else {
        result =
          this.currentX +
          " " +
          this.currentY +
          " " +
          this.currentDirection +
          " RIP";
      }
    });
    return result;
  }
}

module.exports = Rover;
