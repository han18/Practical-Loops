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

// console.log(stringCVS);

// variables to hold the new flow

// will put the string in an array
let splitCVS = stringCVS.split("\n");

console.log(splitCVS);

// looping through each row using split method to create an array
for (let i = 0; i < splitCVS.length; i++) {
  // splitting the row into cells
  const cells = splitCVS[i].split(","); // removing the comma
  console.log(cells[0], cells[1], cells[2], cells[3]);
}

let firstRow = " ";
let arrayHolder = [];

for (let i = 0; i < stringCVS.length; i++) {
    const rowSplit = stringCVS[i]; 
}

// CSV data
const csvData1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const csvData2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// looping through 
for (const csvData of [csvData1, csvData2]) {
    let row = [];
    let cell = '';

    for (let i = 0; i < csvData.length; i++) {
        const char = csvData[i];

        if (char === ',') {
            // next cell
            row.push(cell);
            cell = ''; // next input
        } else if (char === '\n' || (char === '\r' && csvData[i + 1] === '\n')) {
            // the next row
            row.push(cell); // Pushing the row
            console.log(...row); 
            row = []; // reseting
            cell = ''; // reset next input

            if (char === '\r') {
                i++; //skipping the next character
            }
        } else {
            cell += char;
        }
    }

    // last cell if there's no new line at the end
    if (cell) {
        row.push(cell);
        console.log(...row);
    }
}




// Part 5
// let returnToCSV = "";
// returnToCSV += Object.keys(objArray[0]).toString() + "\n";
// for (let i = 0; i < objArray.length; i++) {
//   // let objString = `${objArray[id],objArray[name],objArray[occupation],objArray[age],}`
//   if (i != objArray.length - 1) {
//     returnToCSV += Object.values(objArray[i]) + "\n";
//   } else {
//     returnToCSV += Object.values(objArray[i]);
//   }
// }
// console.log(returnToCSV);