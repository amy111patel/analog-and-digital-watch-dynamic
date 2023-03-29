function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // update digital clock
  const digitalClock = document.querySelector('.digital-clock');
  digitalClock.textContent = `${hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;

  // update hour hand
  const hourHand = document.querySelector('.hour-hand');
  const hourAngle = (hour % 12) * 30 + (minute / 60) * 30;
  hourHand.style.transform = `rotate(${hourAngle}deg)`;

  // update minute hand
  const minuteHand = document.querySelector('.minute-hand');
  const minuteAngle = minute * 6 + (second / 60) * 6;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;

  // update second hand
  const secondHand = document.querySelector('.second-hand');
  const secondAngle = second * 6;
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

// initialize clock
updateClock();
setInterval(updateClock, 1000);
