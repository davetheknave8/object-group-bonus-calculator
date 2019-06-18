$( document ).ready( readyNow );
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

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

for (let currentEmployee of employees){
  console.log(currentEmployee);
}

function bonusPercentageCalculation(rating, number, salary){
  let totalPercentage = 0;
  if(rating === 5){
    totalPercentage += 10;
  } else if (rating === 4) {
    totalPercentage += 6;
  } else if (rating === 3) {
    totalPercentage += 4; 
  }

  if(number.length === 4){
    totalPercentage += 5;
  }

  if(salary > 65000){
    totalPercentage -= 1;
  }

  if(totalPercentage > 13) {
    totalPercentage = 13
  }

  if(totalPercentage < 0){
    totalPercentage = 0;
  }

  return totalPercentage;
}

function Bonus(employee) {
    this.name = employee.name,
    this.bonusPercentage = bonusPercentageCalculation(employee.reviewRating, employee.employeeNumber, employee.annualSalary),
    this.totalCompensation = Number(employee.annualSalary) + Number(((this.bonusPercentage / 100) * employee.annualSalary)),
    this.totalBonus = (this.bonusPercentage / 100) * employee.annualSalary
}

const jemBonus = new Bonus(employees[1])
const atticusBonus = new Bonus(employees[0])
console.log( jemBonus );
console.log( atticusBonus );

function addBonus(){
    let employeeBonus = {};
    let el = $('#bonus');

    for (let currentEmployee of employees){
        if (currentEmployee.name === $('#employeesName').val()){
          employeeBonus = currentEmployee;
        }   
    }
    let finalBonus = new Bonus(employeeBonus);
        el.empty();
        el.append( `<li>Employee Name: ` + finalBonus.name + `</li><li>Bonus Percentage: ` + finalBonus.bonusPercentage + `</li><li>Total Compensation: ` + finalBonus.totalCompensation + `</li><li>Total Bonus: ` + finalBonus.totalBonus + `</li>` )
    return true;
}

function readyNow(){
  $( '#addButton' ).on( 'click', addBonus );
}