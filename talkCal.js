/**
 * 
 * Still thinking....
 * It's out of support in JS date format...
 * 
 */

const talkingCalendar = function(date) {
    // Your code here
    const event = new Date(date)
    let ans = event.toDateString();

    return ans;

  };
  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));

