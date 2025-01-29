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