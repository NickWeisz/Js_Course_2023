let minMonths = 0;
let maxMonth = 12;
let randomMonth =
  minMonths + Math.floor(Math.random() * (maxMonth - minMonths + 1));

let minDays = 0;
let maxDays = 6;
let randomDay = minDays + Math.floor(Math.random() * (maxDays - minDays + 1));

let resultOfSum = parseInt(randomMonth + randomDay);

document.write(`<div><h3>Випадковий місяць = ${randomMonth}</h3></div>
<div><h3>Випадковий день = ${randomDay}</h3></div>
<div><h3>Результат = ${resultOfSum}</h3></div>`);
