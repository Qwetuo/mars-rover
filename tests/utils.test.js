const {getInitialDirection} = require ("../utils")

test('getInitialDirection should return only the direction of the rover when provided its initial position', () => {
    expect(getInitialDirection("1 2 N")).toEqual("N")
    expect(getInitialDirection("11 22 E")).toEqual("E")
    expect(getInitialDirection("1 22 S")).toEqual("S")
});