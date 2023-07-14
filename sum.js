// claculator for testing
const sum = (a, b) => {
    return a + b;
  }
  module.exports = sum;

  const subtract = (a,b) => {
    return a - b;
  }
  module.exports = subtract;

  const divide = (a,b) => {
    return a/b
  }
  module.exports = divide;

  const multiply = (a,b) => {
    return a*b
  }
  module.exports = multiply;

  //   capitalizing first letter of string
  const capitalize = (str) => {
    if (typeof str !== 'string') {
      return ''; 
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
module.exports = capitalize;

//reverse a string
const reverseString = (str) => {
    if (typeof str !== 'string') {
      return '';
    }
    return str.split('').reverse().join('');
  };
module.exports = reverseString;

//caesar cypher
const caesarCipher = (str, shift) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);
    
    return str.replace(/[a-z]/gi, (match) => {
      const isUpperCase = match === match.toUpperCase();
      const letterIndex = alphabet.indexOf(match.toLowerCase());
      const shiftedLetter = shiftedAlphabet[letterIndex];
      
      return isUpperCase ? shiftedLetter.toUpperCase() : shiftedLetter;
    });
  };
  module.exports = caesarCipher;
  
  //analyse array function
  const analyseArray = (arr) => {
    if (!Array.isArray(arr)) {
      throw new Error('Invalid input. Expected an array.');
    }
  
    if (arr.length === 0) {
      return {
        average: 0,
        min: undefined,
        max: undefined,
        length: 0,
      };
    }
  
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    return {
      average,
      min,
      max,
      length: arr.length,
    };
  };
module.exports = analyseArray;