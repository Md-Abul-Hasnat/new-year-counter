const dayEl = document.querySelector(".day");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function counter() {
  // calculating gap of miliseconds between current and new year

  const newYear = new Date("1 jan 2023").getTime();
  const currentTime = new Date().getTime();
  const timeLeft = newYear - currentTime;

  // calculationg milisecond
  const second = 1000;
  const minute = 60 * 1000;
  const hour = 60 * 60 * 1000;
  const day = 24 * 60 * 60 * 1000;

  const dayLeft = Math.floor(timeLeft / day);
  const hourLeft = Math.floor((timeLeft % day) / hour);
  const minuteLeft = Math.floor((timeLeft % hour) / minute);
  const secondLeft = Math.floor((timeLeft % minute) / second);

  // setting value
  dayEl.innerText = dayLeft;
  hourEl.innerText = hourLeft;
  minuteEl.innerText = minuteLeft;
  secondEl.innerText = secondLeft;

  setTimeout(() => {
    counter();
  }, 1000);
}

counter();
