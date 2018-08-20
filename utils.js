const getMaxX = PLATAEU_SIZE => {
  return PLATAEU_SIZE.split(" ")[0];
};

const getMaxY = PLATAEU_SIZE => {
  return PLATAEU_SIZE.split(" ")[1];
};

const getInitialDirection = INITIAL_POS => {
  return INITIAL_POS.charAt(INITIAL_POS.length - 1);
};

const getInitialX = INITIAL_POS => {
  return INITIAL_POS.split(" ")[0];
};

const getInitialY = INITIAL_POS => {
  return INITIAL_POS.split(" ")[1];
};

const changeDirectionToLeft = currentDirection => {
  if (currentDirection === "N") return "W";
  const compass = ["N", "E", "S", "W"];
  const currIndex = compass.indexOf(currentDirection);
  return compass[currIndex - 1];
};

const changeDirectionToRight = currentDirection => {
  if (currentDirection === "W") return "N";
  const compass = ["N", "E", "S", "W"];
  const currIndex = compass.indexOf(currentDirection);
  return compass[currIndex + 1];
};

const moveN = yPosition => {
  return (+yPosition + 1).toString();
};

const moveS = yPosition => {
  return (+yPosition - 1).toString();
};

const moveE = xPosition => {
  return (+xPosition + 1).toString();
};

const moveW = xPosition => {
  return (+xPosition - 1).toString();
};

const getFinalPosition = (
  instructions,
  initialX,
  initialY,
  initialDirection
) => {
  let currentX = initialX;
  let currentY = initialY;
  let currentDirection = initialDirection;
  instructionsArr = instructions.split("");
  instructionsArr.forEach(instruction => {
    if (instruction === "L")
      currentDirection = changeDirectionToLeft(currentDirection);
    if (instruction === "R")
      currentDirection = changeDirectionToRight(currentDirection);
    if (instruction === "M") {
      if (currentDirection === "N") currentY = moveN(currentY);
      if (currentDirection === "S") currentY = moveS(currentY);
      if (currentDirection === "E") currentX = moveE(currentX);
      if (currentDirection === "W") currentX = moveW(currentX);
    }
  });
  const result = currentX + " " + currentY + " " + currentDirection;
  return result;
};

module.exports = {
  getMaxX,
  getMaxY,
  getInitialDirection,
  getInitialX,
  getInitialY,
  changeDirectionToLeft,
  moveN,
  moveS,
  moveE,
  moveW,
  getFinalPosition,
  changeDirectionToRight
};
