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
    fullName: "sunday",
  },
  {
    id: 1,
    name: "Mon",
    fullName: "monday",
  },
  {
    id: 2,
    name: "Tue",
    fullName: "tuesday",
  },
  {
    id: 3,
    name: "Wed",
    fullName: "wednesday",
  },
  {
    id: 4,
    name: "Thu",
    fullName: "thursday",
  },
  {
    id: 5,
    name: "Fri",
    fullName: "friday",
  },
  {
    id: 6,
    name: "Sat",
    fullName: "saturday",
  },
];

const months = [
  {
    id: 0,
    name: "January",
    days: 31,
  },
  {
    id: 1,
    name: "February",
    days: new Date(getCurrentYear, 1, 29).getDate() === 29 ? 29 : 28,
  },
  {
    id: 2,
    name: "March",
    days: 31,
  },
  {
    id: 3,
    name: "April",
    days: 30,
  },
  {
    id: 4,
    name: "May",
    days: 31,
  },
  {
    id: 5,
    name: "June",
    days: 30,
  },
  {
    id: 6,
    name: "July",
    days: 31,
  },
  {
    id: 7,
    name: "August",
    days: 31,
  },
  {
    id: 8,
    name: "September",
    days: 30,
  },
  {
    id: 9,
    name: "October",
    days: 31,
  },
  {
    id: 10,
    name: "November",
    days: 30,
  },
  {
    id: 11,
    name: "December",
    days: 31,
  },
];



const addMonthsToDom = (currValue, maxNum, currDay) => {
  const currentDate = new Date().getDate();
  let staticCurrValue = currValue;
  console.log('curday >>', currDay)
  while (staticCurrValue <= maxNum) {

    if (staticCurrValue === currentDate) {
      document.querySelector(`#${currDay}`).innerHTML += `
  <li class="days__day days__day--selected">${staticCurrValue}</li>
  `;
    } else {
      document.querySelector(`#${currDay}`).innerHTML += `
  <li class="days__day">${staticCurrValue}</li>
  `;
    }
    
    staticCurrValue = staticCurrValue + 7;
  }

  // if this is the first month date, then get the weekdays from before, if any, put blank spaces for those
  const indexOfCurrDay = weekDays.find((day) => day.fullName === currDay);
  const arrayOfPreviousDays = weekDays.filter(
    (day) => day.id < indexOfCurrDay.id
  );
  if (currValue === 1) {
    arrayOfPreviousDays.forEach((day) => {
      document.querySelector(`#${day.fullName}`).innerHTML += `
      <li class="days__day"></li>
      `;
    });
  }

  document.querySelectorAll(`#${currDay} > li`).length < 6 &&
    (document.querySelector(`#${currDay}`).innerHTML += `
<li class="days__day"></li>
`);
};


const renderAllWeekdaysToDom = () => {
  const currentMonth = date.getMonth(); // to get current month as current month starts from 0;
  const currentYear = date.getFullYear();
  const firstDateOfMonth = new Date(
    `${currentMonth + 1}/1/${currentYear}`
  ).getDay();
  const currentMonthName = months.find(month => {
    return month.id === currentMonth;
  })
  const firstDayOfCurrentMonth = weekDays.find(
    (weekDay) => weekDay.id === firstDateOfMonth
  ).fullName; // gives me the current day but what do I do with it?
  console.log(firstDayOfCurrentMonth)
  
  // current month's maximum days
  const maxDays = months.find((month) => month.id === currentMonth);
  const copyOfWeekdays = [...new Set(weekDays)];
  const spliced = copyOfWeekdays.splice(copyOfWeekdays.map(day => day.fullName).indexOf(firstDayOfCurrentMonth))
  copyOfWeekdays.unshift(...spliced);
  console.log("copyOfWeekdays>>", copyOfWeekdays);
  copyOfWeekdays.forEach((day, index) => {
    console.log(day)
    addMonthsToDom(index + 1, maxDays.days, day.fullName)
  })

  document.querySelector('.app__headline').innerText = currentMonthName.name;
}

renderAllWeekdaysToDom();

// what is the first day of any month? 1-1-2020
// find the day for that and populate everything in that column right?
