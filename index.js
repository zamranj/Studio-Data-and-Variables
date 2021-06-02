// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
const input = require("readline-sync");
let astronautCount = Number(input.question("How many astronauts are going on the mission? : "));

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautStatus ="ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760.000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%"
let weatherStatus = "clear";


// Write code to generate the LC04 report here:
console.log("-----------------------------");
console.log("> LC04 - LAUNCH CHECKLIST");
console.log("-----------------------------");
console.log(date);
console.log(time);
console.log("");
console.log("-----------------------------");
console.log("> ASTRONAUT INFO");
console.log("-----------------------------");

console.log("* count: "+ astronautCount);
console.log("* status: "+ astronautStatus);
console.log("");
console.log("-----------------------------");
console.log("> FULE DATA");
console.log("-----------------------------");
console.log("* Fuel temp celsius: -225 C");
console.log("* Fuel level: 100%");
console.log("");
console.log("-----------------------------");
console.log("-----------------------------");
console.log("> MASS DATA");
console.log("-----------------------------");
console.log("* Crew mass: "+ crewMassKg+"Kg");
console.log("* Fuel mass: "+ fuelMassKg+"Kg");
console.log("* Shuttle mass: "+ shuttleMassKg+"Kg");
console.log("* Total mass: "+ totalMassKg+"Kg");
console.log("-----------------------------");
console.log("> FLIGHT PLAN");
console.log("-----------------------------");
console.log("* weather: clear");
console.log("");
console.log("-----------------------------");
console.log("> OVERALL STATUS");
console.log("-----------------------------");
console.log("* clear for takeoff: YES");
// When done, have your TA check your code.
console.log("");
console.log("");


// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.
