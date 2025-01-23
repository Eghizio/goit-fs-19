const math = require("./math.js");
/* For ESM https://jestjs.io/docs/ecmascript-modules */

const debug = false;
const log = (text) => debug && console.log(text);

describe("math.plus", () => {
  /* Hooks, Setup & Teardown */
  // beforeAll(() => log("Before all!"));
  // afterAll(() => log("After all!"));
  // beforeEach(() => log("Before each!"));
  // afterEach(() => log("After each!"));

  test("should add 2 and 2 returning 4", () => {
    log("\n 2 + 2 = 4 \n");
    const result = math.plus(2, 2);

    expect(result).toBe(4);
  });

  // test("should add 2 and -2 returning 0", () => {
  //   log("\n 2 + -2 = 0 \n");
  //   const result = math.plus(2, -2);

  //   expect(result).toBe(0);
  // });

  // test("should add 2 and -44 returning -42", () => {
  //   log("\n 2 + -44 = -42 \n");
  //   const result = math.plus(2, -44);

  //   expect(result).toBe(-42);
  // });

  // test.each([
  //   { a: 2, b: 2, expected: 4 },
  //   { a: 2, b: -2, expected: 0 },
  //   { a: 2, b: -44, expected: -42 },
  // ])("should add $a and $b returning $expected", ({ a, b, expected }) => {
  //   log(`\n ${a} + ${b} = ${expected} \n`);

  //   const result = math.plus(a, b);

  //   expect(result).toBe(expected);
  // });
});

// Todo: Implement remaining tests for math methods.
