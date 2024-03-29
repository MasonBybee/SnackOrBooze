const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("can handle even squares(4x4)", function () {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const answer = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    expect(unroll(square)).toEqual(answer);
  });
  it("can handle odd squares(3x3)", function () {
    const smallersquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"],
    ];
    const answer = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
    expect(unroll(smallersquare)).toEqual(answer);
  });
  it("can handle less than full iteration(2x2)", function () {
    const smallestsquare = [
      [1, 2],
      [3, 4],
    ];
    const answer = [1, 2, 4, 3];
    expect(unroll(smallestsquare)).toEqual(answer);
  });
  it("can handle multiple full itterations(6x6)", function () {
    const largesquare = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30],
      [31, 32, 33, 34, 35, 36],
    ];
    const answer = [
      1, 2, 3, 4, 5, 6, 12, 18, 24, 30, 36, 35, 34, 33, 32, 31, 25, 19, 13, 7,
      8, 9, 10, 11, 17, 23, 29, 28, 27, 26, 20, 14, 15, 16, 22, 21,
    ];
    expect(unroll(largesquare)).toEqual(answer);
  });
});
