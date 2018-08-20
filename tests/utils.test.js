const {
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
} = require("../utils");

test("getInitialDirection should return only the direction of the rover when provided its initial position", () => {
  expect(getInitialDirection("1 2 N")).toEqual("N");
  expect(getInitialDirection("11 22 E")).toEqual("E");
  expect(getInitialDirection("1 22 S")).toEqual("S");
});

test("getInitialX should return the x-coordinate/1st position of the rover when provided its initial position", () => {
  expect(getInitialX("1 2 N")).toEqual("1");
  expect(getInitialX("11 22 E")).toEqual("11");
  expect(getInitialX("1 22 S")).toEqual("1");
});

test("getInitialY should return the y-coordinate/2nd position of the rover when provided its initial position", () => {
  expect(getInitialY("1 2 N")).toEqual("2");
  expect(getInitialY("11 22 E")).toEqual("22");
  expect(getInitialY("1 22 S")).toEqual("22");
});

test("changeDirectionToLeft should return the direction 90 degrees left from provided input", () => {
  expect(changeDirectionToLeft("E")).toEqual("N");
  expect(changeDirectionToLeft("S")).toEqual("E");
  expect(changeDirectionToLeft("W")).toEqual("S");
  expect(changeDirectionToLeft("N")).toEqual("W");
});

test("changeDirectionToRight should return the direction 90 degrees right from provided input", () => {
  expect(changeDirectionToRight("N")).toEqual("E");
  expect(changeDirectionToRight("E")).toEqual("S");
  expect(changeDirectionToRight("S")).toEqual("W");
  expect(changeDirectionToRight("W")).toEqual("N");
});

test("moveN should return new y coordinate from a move towards North", () => {
  expect(moveN("0")).toEqual("1");
});

test("moveS should return new y coordinate from a move towards South", () => {
  expect(moveS("1")).toEqual("0");
});

test("moveE should return new x coordinate from a move towards East", () => {
  expect(moveE("0")).toEqual("1");
});

test("moveW should return new x coordinate from a move towards West", () => {
  expect(moveW("1")).toEqual("0");
});

test("getFinalPosition should return final position of Rover after moving according to the instructions", () => {
  const instructions = "LMLMLMLMM";
  const initialX = "1";
  const initialY = "2";
  const initialDirection = "N";
  expect(getFinalPosition("MMM", "0", "0", "N")).toEqual("0 3 N");
  expect(
    getFinalPosition(instructions, initialX, initialY, initialDirection)
  ).toEqual("1 3 N");
  expect(getFinalPosition("MMRMMRMRRM", "3", "3", "E")).toEqual("5 1 E");
});
