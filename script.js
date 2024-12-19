/*-Створіть HTML-файл із кнопкою та елементом div.

-При натисканні кнопки використовуйте setTimeout, щоб змінити текстовий вміст елемента div через затримку 3 секунди. Новий текст повинен вказувати, що операція виконана успішно. */

const wrapper = document.querySelector(".wrapper");
const btn1 = document.querySelector(".btn-1");

const text = document.createElement("p");
text.textContent = "Натисніть на кнопку";
text.style.color = "red";
wrapper.prepend(text);


btn1.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "Операція виконана успішно";
    text.style.color = "green";
    wrapper.prepend(text);
    
  }, 3000);
});




/* 2. Реалізуйте таймер зворотного відліку, використовуючи setInterval. При завантаженні сторінки виведіть зворотний відлік від 10 до 1 в елементі div. Після досягнення 1 змініть текст на "Зворотній відлік завершено".  */

const timer = document.querySelector(".timer");
const btn = document.querySelector(".btn-2");

const countdown = document.createElement("div");
countdown.textContent = "Натисніть на кнопку";
countdown.style.color = "blue";
timer.prepend(countdown);

btn.addEventListener("click", () => {
  let count = 10;

  const interval = setInterval(() => {
    if (count > 1) {
      countdown.textContent = count;
      count--;
    } else {
      clearInterval(interval);
      countdown.textContent = "Зворотній відлік завершено";
      countdown.style.color = "brown";
    }
  }, 1000);
});