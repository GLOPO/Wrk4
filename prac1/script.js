console.log(`hello`)
// There are 2 teams, Alpha and Spartans.

// Each team competes 3 times and the average of the 3 scores is calculated( one average score per team)

// A team only wins if it has atleast double the average score of the other team otherwise no team wins.

// 1) create an arrow function 'calcAverage' to calculate the average of 3 scores.

// 2) use the function to calculate the average for both teams.

// 3) Create a function 'checkWinner' that takes the average score of each team as parameters ('aveAlpha' and 'aveSpartan') and then log the winner to the console together with the victory points, according to the rule above, i.e Spartan wins(30, vs 13)

// 4) use the checkWinner function to determine the winner for both Data

// 5) ignore draws this time

// Test Data 1 -- Alpha scores 43, 21 and 73. Spartan scores 63,55, and 47

// Test Data 2 -- Alpha scores 87,55 and 39. Spartan scores 21,33 and 2

// Expo

// To calculate average of 3 values and them all and divide by 3

// Expo 2

// To check if a is atleast double number b, check for a >= 2 * B .... apply this to the teams average score

let calcAverage = (a, b, c) => ((a + b + c)/3);
console.log(calcAverage(2, 6, 4))

let aveAlpha = calcAverage(87, 85, 39)
console.log(aveAlpha)
let aveSpartan = calcAverage(21, 33, 2)
console.log(aveSpartan)

function checkWinner (aveAlpha, aveSpartan) {
  if (aveAlpha >2 * aveSpartan) {
    console.log(`Alpha wins (${aveAlpha}, vs ${aveSpartan})`)
  }
  else {
    console.log(`Spartan wins (${aveSpartan}, vs ${aveAlpha})`)
  }
}

console.log(checkWinner(aveAlpha, aveSpartan))






// const MONTHS= [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sept",
//   "Oct",
//   "Nov",
//   "Dec"
// ];

// const DAYS = ["Sun","Mon", "Tue", "Wed", "Thu" ,"Fri" ,"Sat"]
// let date = new Date ();
// console.log(date);
// let dateOfYear = date.getFullYear()
// console.log(dateOfYear);
// let month = date.getMonth();
// console.log(month);
// let dayOfWeek = date.getDay()
// console.log(DAYS[dayOfWeek]);
// let hour = date.getHours();
// console.log(hour);
// let minute = date.getMinutes();
// console.log(minute);
// let seconds = date.getSeconds();
// console.log(seconds);
// let day = date.getDate()
// console.log(day);

// let statementOfYear = ${DAYS[dayOfWeek]} ${MONTHS[month]} ${day} ${dateOfYear}  ${hour}:${minute}:${seconds};
// console.log(statementOfYear);


// (1)
// console.log("=======map MEthod for companies=====");
// let companyNames = companies.map (company =>company.name)
// console.log(companyNames);

// (2)

// const longerCompanies= companies.filter(company=>{
  // const duration = company.end -company.start;
  // return duration >= 10
// });

// console.log('Companies with duration using forEach >= 10 ========');
// longerCompanies.forEach(company => {
// const duration = company.end - company.start;
// console.log(${company.name} lasted for ${duration} years.);

// });

// (3)
// const age = [30,15,10,5,40,80,2,20,21,25]
// const adults =age.filter(age=> age>=21);
//  console.log (People with ages ${adults} are adults);



// reduce() function 
const number = [5,5,5,5,20];
let addNumbers = number.reduce((accumulator, currItem) => accumulator + currItem);
console.log(addNumbers);

//TASK
// const companies = [
//   { name: "Company A", years: 30 },
//   { name: "Company B", years: 15 },
//   { name: "Company C", years: 10 },
//   { name: "Company D", years: 5 },
//   { name: "Company E", years: 40 },
//   { name: "Company F", years: 80 },
//   { name: "Company G", years: 2 },
//   { name: "Company H", years: 20 },
//   { name: "Company I", years: 21 },
//   { name: "Company J", years: 25 },
// ];

// 1) Log company names only
// const companyNames = companies.map((company) => company.name);
// console.log("Company Names:", companyNames);

// 2) Log companies that lasted 10 years or more
// const longLastingCompanies = companies.filter((company) => company.years >= 10);
// console.log(
//   "Companies that lasted 10 years or more:",
//   longLastingCompanies.map((company) => company.name)
// );

// 3) Log people with age greater or equal to 21
// const adults = age.filter((person) => person >= 21);
// console.log("Adults (age >= 21):", adults);

const companies = [
  { name: "Company A", years: 30 },
  { name: "Company B", years: 15 },
  { name: "Company C", years: 10 },
  { name: "Company D", years: 5 },
  { name: "Company E", years: 40 },
  { name: "Company F", years: 80 },
  { name: "Company G", years: 2 },
  { name: "Company H", years: 20 },
  { name: "Company I", years: 21 },
  { name: "Company J", years: 25 },
];

const companyName = companies.map((company) => company.name);
console.log(`Company Names:`, companyName)

const longLastingCompanies = companies.filter((company) => company.years >= 10);
console.log(
  `Companies that lasted 10 years or more:`,
  longLastingCompanies.map((company) => company.name)
)

//callBackFunction
function callBackFunction() {
  console.log('I am a callback function');
};
callBackFunction();

//higherOrderFunction
function highOrderFunction() {
  console.log('I am high order function');
  callBackFunction();
};
highOrderFunction()

//calculate area
const radius = [1, 2, 3];
// const calculateArea = function(radius) {
//   const output = [];
//   for(let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output
// }
// console.log(calculateArea(radius));

//calculate diameter
// const calculateDiameter = function(radius) {
//   const output = [];
//   for(let i =0; i < radius.length; i++) {
//     output.push(radius[i] * 2);
//   };
//   return output;
// };
// console.log(calculateDiameter(radius));

const calculate = function(radius, logic) {
  const output = [];
  for(let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
}
console.log(calculate(radius, logic));