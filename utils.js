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

module.exports = {
  getMaxX,
  getMaxY,
  getInitialDirection,
  getInitialX,
  getInitialY
};
