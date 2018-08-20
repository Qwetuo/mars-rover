const result = require("../result");

test("result should return a string of all Rovers position", () => {
  const input = "5 5 1 2 N LMLMLMLMM 3 3 E MMRMMLMRRM 4 1 S MLMLMRMRM";
  const output = "1 3 N 5 1 E RIP 5 0 S";
  expect(result(input)).toEqual(output);
});
