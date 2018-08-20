const Rover = require("../Rover");

const basicRover = new Rover("5 5", "2 2 N");

test("Rover constructor working as expected", () => {
  const rover = new Rover("5 5", "1 2 N", "LMLMLMLMM");
  expect(rover.maxX).toEqual("5");
  expect(rover.maxY).toEqual("5");
  expect(rover.currentX).toEqual("1");
  expect(rover.currentY).toEqual("2");
  expect(rover.currentDirection).toEqual("N");
  expect(rover.instructions).toEqual("LMLMLMLMM");
});

test("Rover's changeDirectionToLeft should return the direction 90 degrees left from provided input", () => {
  expect(basicRover.changeDirectionToLeft("E")).toEqual("N");
  expect(basicRover.changeDirectionToLeft("S")).toEqual("E");
  expect(basicRover.changeDirectionToLeft("W")).toEqual("S");
  expect(basicRover.changeDirectionToLeft("N")).toEqual("W");
});

test("Rover's changeDirectionToRight should return the direction 90 degrees right from provided input", () => {
  expect(basicRover.changeDirectionToRight("N")).toEqual("E");
  expect(basicRover.changeDirectionToRight("E")).toEqual("S");
  expect(basicRover.changeDirectionToRight("S")).toEqual("W");
  expect(basicRover.changeDirectionToRight("W")).toEqual("N");
});

test("Rover's moveN should return new y coordinate from a move towards North", () => {
  expect(basicRover.moveN("0")).toEqual("1");
});

test("Rover's moveS should return new y coordinate from a move towards South", () => {
  expect(basicRover.moveS("1")).toEqual("0");
});

test("moveE should return new x coordinate from a move towards East", () => {
  expect(basicRover.moveE("0")).toEqual("1");
});

test("moveW should return new x coordinate from a move towards West", () => {
  expect(basicRover.moveW("1")).toEqual("0");
});

test("Rover.getFinalPosition should return position of Rover after executing instructions", () => {
  const rover = new Rover("5 5", "1 2 N", "LMLMLMLMM");
  expect(rover.getFinalPosition()).toEqual("1 3 N");
});