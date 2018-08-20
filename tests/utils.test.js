const {
  getMaxX,
  getMaxY,
  getInitialDirection,
  getInitialX,
  getInitialY
} = require("../utils");

test("getMaxX should return the highest x coordinate possible", () => {
  expect(getMaxX("5 5")).toEqual("5");
  expect(getMaxX("10 6")).toEqual("10");
});

test("getMaxY should return the highest y coordinate possible", () => {
  expect(getMaxY("5 5")).toEqual("5");
  expect(getMaxY("10 12")).toEqual("12");
});

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
