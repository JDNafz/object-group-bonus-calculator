// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  


let bonusPercentage
let totalCompensation
let totalBonus
  if(employee.reviewRating <= 2){
    bonusPercentage = 0
  } else if (employee.reviewRating === 3) {
    bonusPercentage = 0.04 
  }else if (employee.reviewRating === 4) {
    bonusPercentage = 0.06 
  }else if (employee.reviewRating === 5) {
    bonusPercentage = 0.1 
  }
  if (employee.employeeNumber.length === 4) {
    bonusPercentage += 0.05 
  }
  if(employee.annualSalary > 65000){
    bonusPercentage -= 0.01
  }
  
  //if above the max, set it at the max
  if (bonusPercentage > 0.13){
    bonusPercentage = 0.13;
  }
  //if it's below the min, set at the min
  if (bonusPercentage < 0){
    bonusPercentage = 0;
  }

  totalBonus = bonusPercentage * employee.annualSalary;
  totalCompensation = totalBonus + Number(employee.annualSalary);
  

  // testing console.logs:
  // console.log(employee.name);
  // console.log( "bonus percentage",bonusPercentage);
  // console.log("total bonus:", totalBonus);
  // console.log("total comp:", totalCompensation);

  
  let employeeUpdated = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  };

  return employeeUpdated;

  // let newObject = {
  //   propertyName1: value1,
  //   propertyName2: value2,
  //   propertyName1: value1,
  // }
} 

// FIRST TEST WITH ONE USER
// let attyboy =
// { name: 'Atticus',
//   employeeNumber: '2405',
//   annualSalary: '47000',
//   reviewRating: 3           }
// console.log(attyboy);
// let newAtty = calculateIndividualEmployeeBonus(attyboy);

let outputForDOM = [];
for (let employee of employees){ 
  let result = calculateIndividualEmployeeBonus( employee )
  outputForDOM.push(result);
  // console.log(result);
}//end for loop


//GENERATE SIMPLE STRING OUTPUT ON DOM
//copy contents of function here:

//GENERATE ON CLICK
function onClickFunction(){
  const paragraph = document.createElement("p"); //create <p></p>
  const newParagraph = JSON.stringify(outputForDOM); // make objArray into String
  const node = document.createTextNode(newParagraph);// put string into node
  paragraph.appendChild(node); //append text node to <p> element as a child
  
  const element = document.getElementById("div1");
  element.appendChild(paragraph); 
}

// for (let employee of outputForDOM) {
//   // do for each result.
// }


// let text = JSON.stringify(outputForDOM[0]);
// console.log(text);
// const newParagraph = document.createElement("p")

// console.log(outputForDOM[0].totalCompensation)

let testArray= [];
testArray.push(outputForDOM[0]);
function addDivs(){
  for (let employee of testArray){
    const div = document.createElement('div');
    div.id = employee.name;
    div.class = 'block';
    const para = document.createElement('p');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    let bonusPercentText = employee.bonusPercentage*100;

    //continue formating text so it looks nice, ad $ , and other text formatting.
    const node1 = document.createTextNode(employee.bonusPercentText+'%');
    console.log(node1);
    const node2 = document.createTextNode(employee.totalCompensation); // 51230
    const node3 = document.createTextNode(employee.totalBonus);
    li1.appendChild(node1);
    li2.appendChild(node2);
    ul.appendChild(li1,li2,li3);
    para.appendChild(ul);
    div.appendChild(para);
  }
} //end addDivs()
addDivs();


// <div class="block">
// <p>Name: Atticus</p>
// <ul>
//   <li>Bonus Percentage: 9%</li>
//   <li>Total Compensation: $51,230</li>
//   <li>Total Bonus: $4,230</li>
// </ul>

// </div>