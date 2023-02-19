//Умова задачі З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

// вводимо дані
const firstChildName = prompt("Ввеліть ім'я першої дитини");
const firstChildCandy = parseInt(
  prompt("введіть кількість цукерок першої дитини")
);
const secondChildName = prompt("Ввеліть ім'я другої дитини");
const secondChildCandy = parseInt(
  prompt("введіть кількість цукерок другої дитини")
);

// порівнюємо кількість цукерок
if (firstChildCandy > secondChildCandy)
  document.write(`кільість цукерок y ${firstChildName} більша`);
else if (secondChildCandy > firstChildCandy)
  document.write(`кільість цукерок y ${secondChildName} більша`);
else {
  document.write(`кільість цукерок однакова`);
}
