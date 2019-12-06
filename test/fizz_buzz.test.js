/* eslint-env mocha */
const assert = chai.assert;

suite("FizzBuzzTest", () => {
  suite("数を文字列にして返す", () => {
    test("数を文字列にして返す", () => {
      assert.equal("1", fizzBuzz(1));
    });
    test("1ならば文字型の1を返す", () => {
      assert.equal("1", fizzBuzz(1));
    });
    test("2ならば文字型の2を返す", () => {
      assert.equal("2", fizzBuzz(2));
    });
    test("3ならば文字型のFizzを返す", () => {
      assert.equal("Fizz", fizzBuzz(3));
    });
    test("5ならば文字型のBuzzを返す", () => {
      assert.equal("Buzz", fizzBuzz(5));
    });
    test("15ならば文字型のFizzBuzzを返す", () => {
      assert.equal("FizzBuzz", fizzBuzz(15));
    });
    suite("1から100までを返す", () => {
      const result = generateList();
      test("100ならば文字のBuzzを返す", () => {
        assert.equal("Buzz", result[99]);
      });
      test("3ならば文字のFizzを返す", () => {
        assert.equal("Fizz", result[2]);
      });
      test("5ならば文字のBuzzを返す", () => {
        assert.equal("Buzz", result[4]);
      });
    });
  });
});

function generateList() {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    result.push(fizzBuzz(i));
  }
  return result;
}

function fizzBuzz(number) {
  let result = number.toString();
  if (number % 3 === 0 && number % 5 === 0) result = "FizzBuzz";
  else if (number % 3 === 0) result = "Fizz";
  else if (number % 5 === 0) result = "Buzz";
  return result;
}
