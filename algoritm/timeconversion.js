/*
conver 12pm hour to 24hours
*/

const time = '11:05:45PM';

const changeTimeFormat = (s) => {
  let AMPM = s.slice(-2); //we catch the format value of pm or am
  let timeArr = s.slice(0, -2).split(':'); // we catch the value of time

  if (AMPM === 'AM' && timeArr[0] === '12') {
    //if the format value is AM and the time is 12
    timeArr[0] = '00';
  } else if (AMPM == 'PM') {
    timeArr[0] = (timeArr[0] % 12) + 12;
  }
  return timeArr.join(':');
};

console.log(changeTimeFormat(time));


const test = "testing"
console.log(test.length)