// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

// вводимо дані
const minNumber = 1;
const maxNumber = 5;
let guessNumberOne = parseInt(prompt(`введіть перше число від 1 до 5`));
let guessNumberTwo = parseInt(prompt(`введіть друге число від 1 до 5`));

// генеруємо рандом
let randomNumber = minNumber + Math.floor(Math.random() * maxNumber);

// порівнюємо інпут з випадковим числом
if (guessNumberOne === randomNumber || guessNumberTwo === randomNumber)
  document.write(`Ви вгадали число, число було ${randomNumber}`);
else {
  document.write(`Пощастить наступного разу`);
}
