//Task 1
function getResult() {
  let array = document.getElementsByName("text");
  let result = [];
  for (i = 0; i < array.length; i++) {
    var a = array[i].value.trim().toLowerCase();
    if (a.match(/^[a-zA-Z_]+$/) || a.match(/^[а-яА-Я_]+$/)) {
      result.push(a.charAt(0).toUpperCase() + a.slice(1));
    } else {
      alert(`Введите корректно данные!`);
      break;
    }
  }
  if (result.length == 3) {
    document.getElementById("result").innerHTML =
      "Фамилия: " +
      result[0] +
      ", " +
      "Имя: " +
      result[1] +
      ", " +
      "Отчество: " +
      result[2];
  } else {
    document.getElementById("result").innerHTML = "Недостаточно данных";
  }
}
//Task2
comments = [];
function addComment() {
  comment = document.getElementById("comment").value;
  comments.push(comment);
  checkSpam();
  generateComment();
  document.getElementById("comment").value = "";
}
function checkSpam() {
  for (let comment of comments) {
    let a = comments.indexOf(comment);
    if (comment.match(/viagra/gi) || comment.match(/xxx/gi)) {
      comments[a] = comment.replace(/viagra/gi, "***").replace(/xxx/gi, "***");
    }
  }
}
function generateComment() {
  let optionsString = "";
  for (let comment of comments) {
    optionsString += `<p>${comment}</p>`;
  }
  document.getElementById("task2").innerHTML = optionsString;
}
//Task3
function formatDate(date) {
  let difference = new Date() - date;
  if (difference < 1000) {
    return "прямо сейчас";
  }
  let seconds = Math.floor(difference / 1000);
  if (seconds < 60) {
    return seconds + "сек. назад";
  }
  let minutes = Math.floor(difference / 6000);
  if (minutes < 60) {
    return minutes + "мин. назад";
  }
}
//Task4
function getCalculation() {
  array = [];
  for (i = 0; i < 10; i++) {
    number = Math.round(Math.random() * (10 - -10) + -10);
    if (number == -0) {
      array.push(0);
    } else {
      array.push(number);
    }
  }
  document.getElementById("array").innerHTML =
    "Сгенерировали: " + array.join(", ");
  document.getElementById("min").innerHTML =
    "Минимальное: " + Math.min.apply(Math, array);
  document.getElementById("max").innerHTML =
    "Максимальное: " + Math.max.apply(Math, array);
  document.getElementById("average").innerHTML =
    "Среднее арифметическое: " +
    Number((array.reduce((a, b) => a + b) / array.length).toFixed(1));
  document.getElementById("sum").innerHTML =
    "Сумма чисел: " + array.reduce((a, b) => a + b);
  document.getElementById("mult").innerHTML =
    "Произведение чисел: " + array.reduce((a, b) => a * b);
}