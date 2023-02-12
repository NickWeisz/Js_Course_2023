let priceOfProductOne = parseFloat(prompt("введіть вартість першого товару"));
let priceOfProductTwo = parseFloat(prompt("введіть вартість другого товару"));
let priceOfProductThree = parseFloat(
  prompt("введіть вартість третього товару")
);
let quantityOfProductOne = parseInt(prompt("введіть кількість першого товару"));
let quantityOfProductTwo = parseInt(prompt("введіть кількість другого товару"));
let quantityOfProductThree = parseInt(
  prompt("введіть кількість третього товару")
);

let totalOfProductOne = priceOfProductOne * quantityOfProductOne.toFixed(2);
let totalOfProductTwo = priceOfProductTwo * quantityOfProductTwo.toFixed(2);
let totalOfProductThree =
  priceOfProductThree * quantityOfProductThree.toFixed(2);
let totalPrice = parseFloat(
  totalOfProductOne + totalOfProductTwo + totalOfProductThree
);

document.write(`<table border="1px"><tr>
<th>Загальна ціна першого товару</th><th>${totalOfProductOne}</th></tr>
<tr>
<th>Загальна ціна другого товару</th><th>${totalOfProductTwo}</th></tr>
<tr>
<th>Загальна ціна третього товару</th><th>${totalOfProductThree}</th></tr>
<th>Загальна ціна всіх товарів</th><th>${totalPrice}</th></tr>
`);
