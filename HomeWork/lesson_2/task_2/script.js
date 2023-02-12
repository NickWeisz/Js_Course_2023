let numberOne = parseFloat(prompt("введіть перше число"));
let numberTwo = parseFloat(prompt("введіть друге число"));

let totalSum = numberOne + numberTwo;
let multiply = numberOne * numberTwo;
let diff = numberOne / numberTwo;

document.write(`
<table border="1px"><tr>
<th>Сумма</th><th>Добуток</th><th>Частка
</th></tr>
<tr><th>${totalSum}</th><th>${multiply}</th>
<th>${diff}</th></tr>
</table>`);
