// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


//------my solution
function solution(str, ending){
  //declare a const variable that will represent the 2nd argument as a negative number number
  //use the slice method on the str parameter listed inputting the const variable declared
  //state the conditions with if/else statement
  const number = 0 - ending.length;
//   console.log(number);
  if(str.slice(number) === ending) {
    return true;
  } else {
    return false;
  }
}