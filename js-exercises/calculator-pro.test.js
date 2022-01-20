/*  
proyecto Calculator
Berenguer Pou
precourse ISDI Coders 2022-1
*/

function getSquareRoot(number) {
  if (typeof number !== "number") return null;
  return Math.sqrt(number);
}

// Tests

describe("Given a getSquareRoot function that takes one argument", () => {
  describe("When it receives number 9", () => {
    test("Then it should return 3", () => {
      // Arrange
      const value = 9;
      const expectedResult = 3;

      // Act
      const result = getSquareRoot(value);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });
  describe("When it receives number -8", () => {
    test("Then it should return NaN", () => {
      // Arrange
      const value = -8;
      const expectedResult = NaN;

      // Act
      const result = getSquareRoot(value);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });
  describe("When it receives a string value '4'", () => {
    test("Then it should return null", () => {
      // Arrange
      const value = "4";
      const expectedResult = null;

      // Act
      const result = getSquareRoot(value);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });
});
