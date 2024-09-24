// Part 1: Fizz Buzz
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

const num = 100;

for (let i = 0; i <= num; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log("Fizz Buzzzzzzzzzzzz");
  } else if (i % 3 !== 0 && i % 5 !== 0) {
    console.log(`${i} not divisible by 3 or 5 `);
  }
}

// Part 2: Prime Time

// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

// Switch would be the correct loop for this case


// for (let n = 0; n <= numPrime; n++) {
//       switch (n) {
//         case n % 5 == 1:
//         console.log("this is a prime");
//         break;
//       }
// }

// for (let n = 0; n <= numPrime; n++) {
//     if (n % 5 === 1) {
//         console.log(`Prime ${5}`)
//     }
//     if ()

// }



for (let n = 5; n <= 100; n++) {
    let numPrime = true;
    console.log(n); 
  
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        numPrime = false; 
        break;
      }
    }
  
    if (numPrime) {
      console.log(`${n} is a prime number.`);
    }
  }

  // Part 3: Feeling Loopy

  let stringCVS =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

  console.log(stringCVS);

  // will put the string in an array
  let splitCVS = stringCVS.split("\n")

  console.log(splitCVS);

  // looping through each row using split method to create an array
for (let i = 0; i < splitCVS.length; i++) {
    // splitting the row into cells
    const cells = splitCVS[i].split(","); // removing the comma 
    console.log(cells[0], cells[1], cells[2], cells[3]);
}