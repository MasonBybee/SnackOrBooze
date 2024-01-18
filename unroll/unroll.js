function unroll(squareArray) {
  const sideLength = squareArray.length;
  const iterations = Math.ceil((sideLength - 1) / 2);
  // spread entire first row to new array
  let newArr = [...squareArray[0]];
  for (let j = 1; j <= iterations; j++) {
    // handles numbers going down on the right side
    for (let i = j; i <= sideLength - j; i++) {
      newArr.push(squareArray[i][sideLength - j]);
    }
    // handles numbers going right to left
    for (let i = sideLength - (j + 1); i >= j - 1; i--) {
      newArr.push(squareArray[sideLength - j][i]);
    }
    // Not sure if this break is necessary, tests seemed fine without it, but I spent a lot of time figuring out where it needed to be so I kept it as a comment.
    // if (j == iterations && sideLength % 2 == 0) {
    //   break;
    // }
    // handles numbers going up on the left side
    for (let i = sideLength - (j + 1); i >= j; i--) {
      newArr.push(squareArray[i][j - 1]);
    }
    // handles numbers going from left to right(besides the first row)
    for (let i = j; i <= sideLength - (j + 1); i++) {
      newArr.push(squareArray[j][i]);
    }
  }
  return newArr;
}

module.exports = unroll;
