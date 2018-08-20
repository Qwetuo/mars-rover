const {
  getMaxX,
  getMaxY,
  getInitialDirection,
  getInitialX,
  getInitialY
} = require("./utils");

let sucidePositions = [];

class Rover {
  constructor(PLATAEU_SIZE, INITIAL_POS, INSTRUCTIONS) {
    this.maxX = getMaxX(PLATAEU_SIZE);
    this.maxY = getMaxY(PLATAEU_SIZE);
    this.currentX = getInitialX(INITIAL_POS);
    this.currentY = getInitialY(INITIAL_POS);
    this.currentDirection = getInitialDirection(INITIAL_POS);
    this.instructions = INSTRUCTIONS;
    this.dropped = false;
    this.sucidePositions = sucidePositions;
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
    const incY = +currentY + 1;
    const currentPosition = this.currentX + "," + currentY;
    if (incY > this.maxY && this.sucidePositions.indexOf(currentPosition) >= 0) return currentY
    if (incY > this.maxY) {
      this.dropped = true
      return currentY
    }
    return incY.toString();
  }

  moveS(currentY) {
    const decY = +currentY - 1;
    if (decY < 0) {
      this.dropped = true;
      return currentY;
    }
    return decY.toString();
  }

  moveE(currentX) {
    const incX = +currentX + 1;
    const currentPosition = currentX + "," + this.currentY;
    if (incX > this.maxX && this.sucidePositions.indexOf(currentPosition) >= 0) return currentX
    if (incX > this.maxX) {
      this.dropped = true;
      return currentX
    }
    return incX.toString();
  }

  moveW(currentX) {
    const decX = +currentX - 1;
    if (decX < 0) {
      this.dropped = true;
      return currentX;
    }
    return decX.toString();
  }

  getFinalPosition() {
    const instructionsArr = this.instructions.split("");
    let result;
    instructionsArr.forEach(instruction => {
      if (this.dropped === true) {
        const sucidePosition = this.currentX + "," + this.currentY;
        this.sucidePositions.push(sucidePosition);
        result =
          this.currentX +
          " " +
          this.currentY +
          " " +
          this.currentDirection +
          " RIP";
      } else {
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
      }
    });
    return result;
  }
}

module.exports = Rover;
