// Shop

const choose = prompt("Оберіть напій:").toLowerCase().trim();

switch (choose) {
  case "кава":
    alert("Кава");
    break;

  case "чай":
    alert("Чай");
    break;

  case "сік":
    alert("Сік");
    break;

  default:
    alert("Такого напію немає");
}

// Week

const day = prompt("Який день оберете?").toLowerCase().trim();

switch (day) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п'ятниця":
    alert("Робочий");
    break;

  case "субота":
  case "неділя":
    alert("Вихідний");
    break;

  default:
    alert("Такого дня в тижні не існує");
}

// Month

const numMonth = Number(prompt("Напишіть номер місяця").trim());

switch (numMonth) {
  case 1:
  case 2:
  case 12:
    alert("Зима");
    break;

  case 3:
  case 4:
  case 5:
    alert("Весна");
    break;

  case 6:
  case 7:
  case 8:
    alert("Літо");
    break;

  case 9:
  case 10:
  case 11:
    alert("Осінь");
    break;

  default:
    alert("Такого місяця не існує, довбню");
}

// Traffic

const color = prompt("Введіть колір світлофору:").toLowerCase().trim();

switch (color) {
  case "червоний":
    alert("стоп");
    break;

  case "жовтий":
    alert("чекати");
    break;

  case "зелений":
    alert("йти");
    break;

  default:
    alert("Такого кольору в світлофорі не існує");
}

// Numbers

const num1 = Number(prompt("Введи перше число").trim());
const num2 = Number(prompt("Введи друге число").trim());
const operation = prompt("Введи оператор").trim();

let result;

switch (operation) {
  case "+":
        result = num1 + num2;
        alert(result);
    break;

  case "-":
        result = num1 - num2;
        alert(result);
    break;

  case "*":
        result = num1 * num2;
        alert(result);
    break;

    case "/":
       if (num2 === 0) {
           alert("На нуль ділити не можна");
       } else {
        result = num1 / num2;
           alert(result);
       }
    break;

    default:
        alert("Такого оператора не існує");
    break;
}
