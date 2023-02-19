//З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

//вводимо дані
const numberOfMonth = parseInt(prompt(`введіть номер місяця від 1 до 12`));
// порівнюємо дані
if (numberOfMonth > 0) {
  if (numberOfMonth === 12 || numberOfMonth <= 2) document.write(`Зима`);
  else if (numberOfMonth > 2 && numberOfMonth <= 5) document.write(`Весна`);
  else if (numberOfMonth > 5 && numberOfMonth <= 8) document.write(`Літо`);
  else if (numberOfMonth > 8 && numberOfMonth <= 11) document.write(`Осінь`);
  else document.write(`Такого місяця нема`);
} else document.write(`Введіть число з вказаного діапазону `);
