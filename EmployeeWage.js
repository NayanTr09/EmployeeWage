
console.log("Welcome to Employee Wage Program!");

//UC2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HOURS_IN_MONTHS = 100;
const NUM_OF_WORKING_DAYS = 20;
let TotalempHrs = 0;
let TotalWorkingDays = 0;
let empCheck = Math.floor(Math.random()*10) %3;
function getWorkingHours(empCheck){
    switch(empCheck) {
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        default:
            return 0;
        }
    }
while (TotalempHrs<=MAX_HOURS_IN_MONTHS && TotalWorkingDays<NUM_OF_WORKING_DAYS){
    TotalWorkingDays++;
    TotalempHrs+= getWorkingHours(empCheck);
    }
let empWage = TotalempHrs*WAGE_PER_HOUR;
    console.log("\n Total Days : "+TotalWorkingDays+"\n Total Hours : "+TotalempHrs+ "\n Emp Wage : " +empWage);