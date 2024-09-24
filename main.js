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

for (let n = 0; n <= num; n++)  {
    if(n == 4) {
        console.log(5)
    } else if (n == 5) {
        console.log(7)
    }
}



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
