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

//generate a few more employee examples
let names = ['Sean','Steven','George','Rebecca',"Elisabeth", "Betty","Adam","Paul","Wilson","Nina","Hieu"]
for (let i = 0; i< names.length; i++) {
  const obj ={
    name: names[i],
    employeeNumber: '89068' + i.toString(),
    annualSalary: (i*1000 + 45000).toString(),
    reviewRating: (i%5)+2
  }
  employees.push(obj);
}

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  
  let bonusPercentage =0;
  let totalCompensation =0;
  let totalBonus =0;

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
  // console.log(employee.name)                      ;
  // console.log( "bonus percentage",bonusPercentage);
  // console.log("total bonus:", totalBonus)         ;
  // console.log("total comp:", totalCompensation)   ;

  let employeeUpdated = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  };
  return employeeUpdated;
} //end calculate employee comp 


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




// console.log(outputForDOM)
function addDivs(){// the on click function
  // console.log("testArray:", testArray)
  for (let employee of outputForDOM){
    // TODO: attempting to make the click work only once.
    $("#clickButton").attr("onclick","removeDivs()"); //--------------------------------------
    //create a div
    const div = document.createElement('div');
    div.id = employee.name; //give the employee name as an ID

    //class for css is reserved
    div.classList = ['block']; //class block for the div

    const para = document.createElement('p'); //create the <p> tag
    // create the text node, that has the text to be a child of the <p>
    const nameParagraph = document.createTextNode(employee.name);
    para.appendChild(nameParagraph); 

    //create <ul> and <li> elements
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    //bonusPercent from 0.09 to 9%
    let bonusPercentText = employee.bonusPercentage*100;
    bonusPercentText = "Bonus Percent: " + bonusPercentText + "%";
    //add bonusPercentText to a TextNode
    const node1 = document.createTextNode(bonusPercentText);

    //get ready to format numbers
    let formatting_options = {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2, //change two zeros
    }
    //create totalCompString
    const compStringIntro = "Total Compensation: "
    let compensationString = employee.totalCompensation.toLocaleString("en-US",formatting_options) ;
    let totalCompFormatted = compStringIntro + compensationString;
    let node2 = document.createTextNode(totalCompFormatted); // Total Compensation: $67,310     

    //create totalBonus text
    let bonusString = "Bonus: "
    let bonus = employee.totalBonus.toLocaleString("en-US",formatting_options); //
    let bonusFormatted = bonusString + bonus;
    let node3 = document.createTextNode(bonusFormatted);

    //attach textNodes to HTML elements
    li1.appendChild(node1);
    li2.appendChild(node2);
    li3.appendChild(node3);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    para.appendChild(ul);
    div.appendChild(para);
    const insertHere = document.getElementById("insertionPoint");
    const element = document.getElementById("parentDiv");
    element.appendChild(div);
    element.insertBefore(insertHere,div); 

  }//end for loop

  // Change the div css to prettier format
  $('.block').css('display', 'inline-flex'); 
  $('.block').css('margin', '10px');
  $('.block').css('padding', '15px');
  $('.block').css('background-color',"#D4D4AA")
  // $('.block').css('width', '175px')

} //end addDivs()

// Double click test
function removeDivs() {
  console.log("SMOKE");
  $('.block').remove();
  $("#clickButton").attr("onclick","addDivs()")
  // $('.block').show();
}

// addDivs(); //Add first div on RUN


function onlyNeedsOneComma(number){
  if (number >= 1000000 || number < 1000){
    console.log("ERROR Over million under thousand total comp", number)
    return false
  }
  // console.log("onlyNeedsOneComma: TRUE")
  return true
}



// $(document).ready(readyNow);
// function readyNow(){
//   $
// }//end readyNow




// favorite collaborative board game (recent?)
// gloom haven spin off jaws aline.
//kings delema > legays eventually ends

// /quacks of quedlimberg

// something of balders gate -Larian balders gate 3 co-op video game
//betrayal of haunted hill^
//
