describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(101)).toBe(101);
  });

  //Added four additional test cases starting at the next line
  
  it("should return a number for values indivisible by 3", function() {
    expect(fizzBuzz(20)).toBeNumber;
  });

  it("should return a number for values indivisible by 5", function() {
    expect(fizzBuzz(16)).toBeNumber;
  });

  it("should return a string for a number divisible by 3", function(){
    expect(fizzBuzz(3)).toBeString;
  });

  it("should return a string for a number divisible by 5", function(){
    expect(fizzBuzz(25)).toBeString;
  });

});
