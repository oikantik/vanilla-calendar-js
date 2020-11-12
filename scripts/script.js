/*
Calendar Principle: what is the first day of any month? 1-1
Find the day for that and populate everything in that column
*/
class Calendar {
  constructor() {
      this.date = new Date(); // always set new date to a variable
      this.currentYear = this.date.getFullYear();
      this.currentMonth = this.date.getMonth();
      this.currentDate = this.date.getDate();
      this.todaysDay = this.date.getDay();
      this.firstDateOfMonth = new Date(
          `${this.currentMonth + 1}/1/${this.currentYear}`
      ).getDay();
      this.weekDays = [{
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

      this.months = [{
              id: 0,
              name: "January",
              days: 31,
          },
          {
              id: 1,
              name: "February",
              days: new Date(this.getCurrentYear, 1, 29).getDate() === 29 ? 29 : 28, // to find the leap year
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
      this.currentMonthName = this.months.find(month => {
          return month.id === this.currentMonth;
      }).name;

      this.firstDayOfCurrentMonth = this.weekDays.find(
          (weekDay) => {
              return weekDay.id === this.firstDateOfMonth
          }
      ).fullName;

      this.domMonthYear = this.currentMonthName + " " + this.currentYear;
      this.todaysDayName = this.weekDays.find(day => day.id === this.todaysDay).fullName;
      this.maxDays = this.months.find((month) => month.id === this.currentMonth); // current month's maximum days
  }

  generateDays = (currentDayNum, maxNumberOfDays, currentDay) => {

      let currentDayNumber = currentDayNum; // assigning to a variable as otherwise currentDayNum will change 

      while (currentDayNumber <= maxNumberOfDays) {
          if (currentDayNumber === this.currentDate) {
              document.querySelector(
                  `#${currentDay}`
              ).innerHTML += `<li class="days__day days__day--selected">${currentDayNumber}</li>`;
          } else {
              document.querySelector(
                  `#${currentDay}`
              ).innerHTML += `<li class="days__day">${currentDayNumber}</li>`;
          }

          currentDayNumber = currentDayNumber + 7;
      }

      // if this is the first month date, then get the weekdays from before, if any, put blank spaces for those
      const indexOfCurrDay = this.weekDays.find(
          (day) => day.fullName === currentDay
      );
      const arrayOfPreviousDays = this.weekDays.filter(
          (day) => day.id < indexOfCurrDay.id
      );
      if (currentDayNum === 1) {
          arrayOfPreviousDays.forEach((day) => {
              document.querySelector(
                  `#${day.fullName}`
              ).innerHTML += `<li class="days__day"></li>`;
          });
      }

      document.querySelectorAll(`#${currentDay} > li`).length < 6 &&
          (document.querySelector(
              `#${currentDay}`
          ).innerHTML += `<li class="days__day"></li>`);
  };

  render = () => {

      const copyOfWeekdays = [...new Set(this.weekDays)]; // copying array so we don't alter the main one

      const splicedWeekdays = copyOfWeekdays.splice(copyOfWeekdays.map(day => day.fullName).indexOf(this.firstDayOfCurrentMonth)); // splicing all the weekdays from afterwards, and adding them to the beginning of the array

      copyOfWeekdays.unshift(...splicedWeekdays);
      copyOfWeekdays.forEach((day, index) => {
          this.generateDays(index + 1, this.maxDays.days, day.fullName)
      })

      document.querySelector('.calendar__headline').innerText = this.domMonthYear;
      document.querySelector('.calendar__day-name').innerText = this.todaysDayName;
      document.querySelector('.calendar__day-num').innerText = this.currentDate;
  }
}

const calendar = new Calendar();

calendar.render();