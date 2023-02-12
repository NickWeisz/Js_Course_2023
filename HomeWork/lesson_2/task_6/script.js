let seconds = parseInt(prompt("введіть кількість секунд"));
let secondsToMinutes = seconds / 60;
let minutesToHours = Math.floor(secondsToMinutes / 60);
let hoursToMinutes = Math.round(secondsToMinutes - minutesToHours * 60);

document.write(
  `<div><h3>від почастку доби пройшло ${minutesToHours} годин, і ${hoursToMinutes} хвилин</h3></div>`
);
