/*Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.*/

//my solution
function getGrade (s1, s2, s3) {
    const sum = (s1 + s2 + s3);
    const average = Math.floor(sum / 3);
    
    //if condition that will return a letter grade
    if(90 <= average && average <= 100) {
      return 'A';
    } else if(80 <= average && average < 90) {
      return 'B';
    } else if(70 <= average && average < 80) {
      return 'C';
    } else if(60 <= average && average < 70) {
      return 'D';
    } else {
      return 'F';
    }
  }

  //The three calls should return 'A', 'B', 'C'
console.log(getGrade(95,90,93));
console.log(getGrade(70,70,100));
console.log(getGrade(75,70,79));