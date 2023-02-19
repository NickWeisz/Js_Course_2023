// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

//вводимо дані
const weekDayNumber = parseInt(prompt(`введіть номер дня тижня від 1 до 7`));

//перевіряємо
if (weekDayNumber == 1) document.write(`Понеділок`);
else if (weekDayNumber == 2) document.write(`вівторок`);
else if (weekDayNumber == 3) document.write(`середа`);
else if (weekDayNumber == 4) document.write(`четвер`);
else if (weekDayNumber == 5) document.write(`п'ятниця`);
else if (weekDayNumber == 6) document.write(`субота`);
else if (weekDayNumber == 7) document.write(`неділя`);
else document.write("такого дня в тижні нема");
