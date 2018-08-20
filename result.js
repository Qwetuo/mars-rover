const Rover = require("./Rover");

const result = input => {
  const inputArr = input.split(" ");
  const PLATAEU_SIZE = inputArr[0] + " " + inputArr[1]

  const numOfRovers = (inputArr.length - 2) / 4
  let index = 2
  let result = ''
  for (let i = 0; i < numOfRovers; i++){
    const initialPos = inputArr[index] + " " + inputArr[index + 1] + " " + inputArr[index + 2]
    const instructions = inputArr[index + 3]
    const rover = new Rover(PLATAEU_SIZE, initialPos, instructions)
    result = result + rover.getFinalPosition() + ' '
    index += 4
  }

  return result.trim()
};

module.exports = result;
