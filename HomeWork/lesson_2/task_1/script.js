// вираз №1 S1 = a + 12 + b
{
  let a = parseFloat(prompt("введіть значення а", "a"));
  let b = parseFloat(prompt("введіть значення b", "b"));
  const twelve = 12;

  let sOne = a + twelve + b;
  console.log(`S1 = ${sOne}`);
}
// вираз №2 S2 = √((a+b)/(2 * a))
{
  let a = parseFloat(prompt("введіть значення а для виразу 2", "a"));
  let b = parseFloat(prompt("введіть значення b для виразу 2", "b"));

  let sTwo = Math.sqrt((a + b) / (2 * a));
  console.log(`S2 = ${sTwo}`);
}
// вираз №3 S3= 3√(a+b)c
{
  let a = parseFloat(prompt("введіть значення а для виразу 3", "a"));
  let b = parseFloat(prompt("введіть значення b для виразу 3", "b"));
  let c = parseFloat(prompt("введіть значення c для виразу 3", "c"));

  let sThree = Math.cbrt((a + b) * c).toFixed(2);
  console.log(`S3 = ${sThree}`);
}
// вираз №4 S4 = sin(a / -b)
{
  let a = parseFloat(prompt("введіть значення а для виразу 4", "a"));
  let b = parseFloat(prompt("введіть значення b для виразу 4", "b"));

  let sFour = Math.sin(a / -b).toFixed(2);
  console.log(`S4 = ${sFour}`);
}
