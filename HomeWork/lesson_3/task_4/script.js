// З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
// вводимо дані
const personAge = parseInt(prompt(`Введіть вік людини`));

// порівнюємо дані
if (personAge >= 2 && personAge < 6) document.write("дитина в садочку");
else if (personAge >= 6 && personAge < 18) document.write("школяр");
else if (personAge >= 18 && personAge < 23)
  document.write("вчиться в університеті");
else if (personAge >= 23 && personAge < 65) document.write("працює");
else if (personAge >= 65) document.write("пенсіонер");
else {
  document.write("дитині менше двох років");
}
