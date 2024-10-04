// // Dom element

// const hourEl = document.querySelector('.hour');
// const minutesEl = document.querySelector('.minutes');
// const secondEl = document.querySelector('.second');
// const periodEl = document.querySelector('.period');

// // calender dom element
// const monthsEl = document.querySelector('.month-name');
// const dayEl = document.querySelector('day-name');
// const dayNumberEl = document.querySelector('day-number');
// const yearEl = document.querySelector('.year');

// const days = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saterday'];

// const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// // Get the current time in Javascript

// const clock = () => {
//     const today = new Date();
//     const hour = today.getHours();
//     const minutes = today.getMinutes();
//     const seconds = today.getSeconds();
//     const month = today.getMonth();
    
    
//     // add to the Dom element

//     hourEl.innerHTML = addZero(period(hour));
//     minutesEl.innerHTML = addZero(minutes);
//     secondEl.innerHTML = addZero(seconds);
//     periodEl.innerHTML = setTimePeriod(hour);
// };
// clock();

// // set the time period(Am/Pm)

// function setTimePeriod(time) {
//     let ampm ='';
//     if(time < 12) {
//         ampm = 'AM';
//     } else {
//         ampm = "PM";
//     }
//     return ampm;
// }

// // set the 12-hour clock format

// function period (time) {
//     if(time > 12) {
//         time = time - 12;
//         return time;
//     }
// }

// // add the 0 for the values lower then 10
// function addZero(time) {
//     if(time < 10) {
//         time = '0' + time; 
//     }
//     return time;
// }

// // calender function

// function setCalendarValue() {
//     const today = new Date();
//     yearEl.innerHTML = today.getFullYear();
//     dayNumberEl.innerHTML = today.getDate();
//     dayEl.innerHTML = days[today.getDay()];
//     monthsEl.innerHTML = month[today.getMonth()];
// }

// // events call

// const updateTime = setInterval(clock, 1000);

// setCalendarValue();


function updateClock() {
    const now = new Date();

    // সময়ের ভেরিয়েবল
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = hours >= 12 ? 'PM' : 'AM';

    // 12 ঘন্টার ফরম্যাট
    hours = hours % 12 || 12;

    // সিঙ্গেল ডিজিট হলে 0 যোগ করা
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // সময় আপডেট করা
    document.querySelector('.hour').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;
    document.querySelector('.period').textContent = period;

    // ক্যালেন্ডারের ভেরিয়েবল
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let dayName = dayNames[now.getDay()];
    let monthName = monthNames[now.getMonth()];
    let dayNumber = now.getDate();
    let year = now.getFullYear();

    // ক্যালেন্ডার আপডেট করা
    document.querySelector('.day-name').textContent = dayName;
    document.querySelector('.month-name').textContent = monthName;
    document.querySelector('.day-number').textContent = dayNumber;
    document.querySelector('.year').textContent = year;
}

// প্রতি সেকেন্ডে সময় আপডেট করা
setInterval(updateClock, 1000);

// পেজ লোড হওয়ার সময় ঘড়ি আপডেট করা
updateClock();
