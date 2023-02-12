let numOfGoods = parseFloat(prompt("введіть кількість одиниць товару"));
let priceOfGoods = parseFloat(prompt("введіть вартість одиниць товару"));

let totalPriceOfGoods = numOfGoods * priceOfGoods;
let totalPriceTax = (totalPriceOfGoods / 100) * 5;

document.write(`<div><h3>Кількість товару = ${numOfGoods}</h3></div><br>
<div><h3>Вартість одиниці товару = ${priceOfGoods}</h3></div><br>
<div><h3>Загальна вартість товару = ${totalPriceOfGoods}</h3></div><br>
<div><h3>Податок на додану вартість = ${totalPriceTax}</h3></div>`);
