// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


//my solution takes in an argument (name) which contains a string with a first and last name, splits the string into substrings using the seperator and limiter provided, then interpolates a new string using indicing.
const abbrevName = (name) => {
    const splitString = name.split(" ", 2);
    const initials = splitString[0][0] + "." + splitString[1][0];
    return initials.toUpperCase();
    
  }