const rose = 8;
const lily = 10;
const tulip = 2;
const numberLilies = 50;
const numberRoses = 70;
const numberTulips = 120;
const value = numberLilies * lily

console.log("Rose - unit price:" + rose, "quantity:" +numberRoses, "value:" + numberRoses * rose);
console.log("Lily - unit price:" + lily, "quantity:" +numberLilies, "value:" + numberLilies * lily);
console.log("Tulip - unit price:" + tulip, "quantity:" +numberTulips, "value:" + numberTulips * tulip);
console.log("total", + numberLilies + numberRoses + numberRoses)

// getting todays date

const today = new Date();
const date = today.getDate()
const month = today.getMonth()
console.log(month)
const monthlist = ["January"]
const equivalentMonth = monthlist[month]
console.log(equivalentMonth)
const year = today.getYear()
console.log(year)
console.log(date)
console.log(today);
const day = today.getDay();
console.log(day);
const daylist = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

// to get the 3rd index from my list:
const showActualDay = daylist[day];
console.log(showActualDay)

// show the time now
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds =  today.getSeconds();


// want it to show like 12 hours 
const hour = (hours >= 12)? hours -12 : hours

console.log(hours, minutes, seconds, hour)

console.log(`Today ${showActualDay} on the ${date} of ${equivalentMonth}, I started rela learning of Javascript. Now it is ${hour} and all i could achieve is this`)


// 2. Print Current Window Contents
// Write a JavaScript program to print the current window contents. 

function printout(){
      console.log("i have printed out")
      window.print();
}

// 4. Calculate Area of Triangle (Sides: 5, 6, 7)
// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 
// area od triangle with 3 sides is A = √[s(s-a)(s-b)(s-c)] where s is parameter with i also calculatd as the sum of all three sides divided by 2

const side1 = 5;
const side2 = 6;
const side3 = 7;

const perimeter = (side1 + side2 + side3)/ 2;
console.log("perimeter", perimeter)

const area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)))
console.log("area", area)