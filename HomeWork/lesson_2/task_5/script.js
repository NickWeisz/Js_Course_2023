let centimetersLength = parseInt(prompt("Введіть довжину в сантиметрах"));
let metersLenght = centimetersLength / 100;
let kilometersLength = centimetersLength / 100000;

document.write(`<div><h3>Довжина в метрах = ${metersLenght}</h3></div>
<div><h3>Довжина в кілометрах = ${kilometersLength}</h3></div>`);
