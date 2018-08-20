const { getUserInput, rl } = require("./readline-helper");
const Rover = require("./Rover");

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

  const rover = new Rover(PLATAEU_SIZE, INITIAL_POS, INSTRUCTIONS);
  const result = rover.getFinalPosition();

  console.log(`The final coordinates of the mars rover is: ${result}`);

  rl.close();
};

main();
