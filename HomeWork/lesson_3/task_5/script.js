//З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.
//вводимо дані
const driverCategory = prompt(
  `Введіть категорію водія англійскими літерами A , B або C`
);
const driverCategoryLow = driverCategory.toLowerCase();

if (driverCategoryLow === "a") document.write(`категорія А - мотоцикли`);
else if (driverCategoryLow === "b")
  document.write(`категорія B - легковий автомобіль`);
else if (driverCategoryLow === "c")
  document.write(`категорія С-вантажний автомобіль`);
else document.write(`такої категорії нема в списку`);
