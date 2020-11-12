// You should ALWAYS take a local copy of the date before extracting values from it as there is a significant chance that each newDate() will be returning a slightly different date/time and you could end up with unexpected results. – Chris Walsh Jan 10 '19 at 9:43

// how can I make this work?
// this will be based on UTC probably
// get first Sunday for the month
// if there are more than 6 sundays start based on --- i don't know lost track of the thought

const date = new Date();

const getCurrentYear = date.getFullYear();

const weekDays = [
  {
    id: 0,
    name: "Sun",
  },
  {
    id: 1,
    name: "Mon",
  },
  {
    id: 2,
    name: "Tue",
  },
  {
    id: 3,
    name: "Wed",
  },
  {
    id: 4,
    name: "Thu",
  },
  {
    id: 5,
    name: "Fri",
  },
  {
    id: 6,
    name: "Sat",
  },
];

const months = [
  {
    id: 0,
    name: "January",
    days: 31
  },
  {
    id: 1,
    name: "February",
    days: new Date(getCurrentYear, 1, 29).getDate() === 29 ? 29 : 28
  },
  {
    id: 2,
    name: "March",
    days: 31
  },
  {
    id: 3,
    name: "April",
    days: 30
  },
  {
    id: 4,
    name: "May",
    days: 31
  },
  {
    id: 5,
    name: "June",
    days: 30
  },
  {
    id: 6,
    name: "July",
    days: 31
  },
  {
    id: 7,
    name: "August",
    days: 31
  },
  {
    id: 8,
    name: "September",
    days: 30
  },
  {
    id: 9,
    name: "October",
    days: 31
  },
  {
    id: 10,
    name: "November",
    days: 30
  },
  {
    id: 11,
    name: "December",
    days: 31
  },
];

const currentMonth = date.getMonth(); // to get current month as current month starts from 0;
const currentYear = date.getFullYear();
const firstDayOfCurrentMonth = new Date(
  `${currentMonth + 1}/1/${currentYear}`
).getDay();
const currentDay = weekDays.find(
  (weekDay) => weekDay.id === firstDayOfCurrentMonth
).name; // gives me the current day but what do I do with it?

// current month's maximum days

const maxDays = months.find(month => month.id === currentMonth);
let countWednesday = 1;

while(countWednesday <= maxDays.days) {
  document.querySelector(`#wednesday`).innerHTML += `
  <li class="days__day">${countWednesday}</li>
  `
  countWednesday = countWednesday + 7;
}

document.querySelector(`#tuesday`).innerHTML += `
<li class="days__day"></li>
`
document.querySelector(`#monday`).innerHTML += `
<li class="days__day"></li>
`
document.querySelector(`#sunday`).innerHTML += `
<li class="days__day"></li>
`

document.querySelectorAll('#wednesday > li').length < 6 && (document.querySelector(`#wednesday`).innerHTML += `
<li class="days__day"></li>
`);

let countThursday = 2;
while(countThursday <= maxDays.days) {
  document.querySelector(`#thursday`).innerHTML += `
  <li class="days__day">${countThursday}</li>
  `
  countThursday = countThursday + 7;
}

document.querySelectorAll('#thursday > li').length < 6 && (document.querySelector(`#thursday`).innerHTML += `
<li class="days__day"></li>
`);

let countFriday = 3;
while(countFriday <= maxDays.days) {
  document.querySelector(`#friday`).innerHTML += `
  <li class="days__day">${countFriday}</li>
  `
  countFriday = countFriday + 7;
}

document.querySelectorAll('#friday > li').length < 6 && (document.querySelector(`#friday`).innerHTML += `
<li class="days__day"></li>
`);

let countSaturday= 4;
while(countSaturday <= maxDays.days) {
  document.querySelector(`#saturday`).innerHTML += `
  <li class="days__day">${countSaturday}</li>
  `
  countSaturday = countSaturday + 7;
}

document.querySelectorAll('#saturday > li').length < 6 && (document.querySelector(`#saturday`).innerHTML += `
<li class="days__day"></li>
`);

let countSunday = 5;
while(countSunday <= maxDays.days) {
  document.querySelector(`#sunday`).innerHTML += `
  <li class="days__day">${countSunday}</li>
  `
  countSunday = countSunday + 7;
}

document.querySelectorAll('#sunday > li').length < 6 && (document.querySelector(`#sunday`).innerHTML += `
<li class="days__day"></li>
`);

let countMonday = 6;
while(countMonday <= maxDays.days) {
  document.querySelector(`#monday`).innerHTML += `
  <li class="days__day">${countMonday}</li>
  `
  countMonday = countMonday + 7;
}

document.querySelectorAll('#monday > li').length < 6 && (document.querySelector(`#monday`).innerHTML += `
<li class="days__day"></li>
`);

let countTuesday = 7;
while(countTuesday <= maxDays.days) {
  document.querySelector(`#tuesday`).innerHTML += `
  <li class="days__day">${countTuesday}</li>
  `
  countTuesday = countTuesday + 7;
}

document.querySelectorAll('#tuesday > li').length < 6 && (document.querySelector(`#tuesday`).innerHTML += `
<li class="days__day"></li>
`);

// what is the first day of any month? 1-1-2020
// find the day for that and populate everything in that column right?
