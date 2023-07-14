import { analyseArray } from './sum';
import { sum } from './sum';
import { subtract } from './sum';
import { divide } from './sum';
import { multiply } from './sum';
import { capitalize } from './sum';
import { caesarCipher } from './sum';
import { reverseString } from './sum';



//test sum function
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

//test substract function
test('subtracts 1 from 3 to equal 2', () =>{
  expect(subtract(3,1)).toBe(2);
})

//test divide function
test('divides 9 by 3', () =>{
  expect(divide(9,3).toBe(3));
})

//TEST MULTIPLY FUNCTION
test('multiplies 5 by 2', () => {
  expect(multiply(5,2).toBe(10));
})

//Test capitalize function
test('capitalizes the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

//test reverseString function
test('reverses a string', () => {
  const input = 'hello';
  const expected = 'olleh';
  const result = reverseString(input);

  expected(result).toEqual(expected);
});

//test caeserCipher function
test('encrypts a string using a Caesar cipher', () => {
  // Test case 1: Basic encryption with shift = 1
  expect(caesarCipher('abc', 1)).toEqual('bcd');

  // Test case 2: Wrapping from 'z' to 'a'
  expect(caesarCipher('xyz', 1)).toEqual('yza');

  // Test case 3: Preserving case sensitivity
  expect(caesarCipher('Hello World', 3)).toEqual('Khoor Zruog');

  // Test case 4: Handling non-alphabetic characters
  expect(caesarCipher('123!@#', 5)).toEqual('123!@#');
});

//test analyseArray function
test('analyzes an array of numbers', () => {
  // Test case 1: Basic scenario with positive numbers
  expect(analyseArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });

  // Test case 2: Scenario with negative numbers
  expect(analyseArray([-5, -2, 0, -10, -1])).toEqual({
    average: -3.6,
    min: -10,
    max: 0,
    length: 5,
  });

  // Test case 3: Scenario with floating-point numbers
  expect(analyseArray([1.5, 2.25, 3.75, 4.33])).toEqual({
    average: 2.9575,
    min: 1.5,
    max: 4.33,
    length: 4,
  });

  // Test case 4: Empty array
  expect(analyseArray([])).toEqual({
    average: 0,
    min: undefined,
    max: undefined,
    length: 0,
  });

  // Test case 5: Array with a single element
  expect(analyseArray([10])).toEqual({
    average: 10,
    min: 10,
    max: 10,
    length: 1,
  });
});



