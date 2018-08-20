const { getUserInput, rl } = require("./readline-helper");
const {
  getInitialDirection,
  getInitialX,
  getInitialY,
  getFinalPosition
} = require("./utils");

const main = async () => {
  const PLATAEU_SIZE = await getUserInput(
    "Specify the size of the Mars plateau (e.g. 5 5):"
  );
  console.log("Plataeu size is", PLATAEU_SIZE);

  const INITIAL_POS = await getUserInput(
    "Specify the initial coordinates and direction of the mars rover (e.g. 1 2 N):"
  );
  console.log("Rover Initial Position  is", INITIAL_POS);

  const INSTRUCTIONS = await getUserInput(
    "Specify the instructions for the mars rover (e.g. LMLMLMLMM):"
  );
  console.log("Move Instructions for Rover is", INSTRUCTIONS);

  // TODO: include the functions that you've implemented for this kata
  let initialDirection = getInitialDirection(INITIAL_POS);
  let initialX = getInitialX(INITIAL_POS);
  let initialY = getInitialY(INITIAL_POS);

  const result = getFinalPosition(INSTRUCTIONS,initialX,initialY,initialDirection)

  console.log(
    `The final coordinates of the mars rover is: ${result}`
  );

  rl.close();
};

main();
