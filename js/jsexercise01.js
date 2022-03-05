const add = (number1, number2) => {
  return parseInt(number1) + parseInt(number2);
};
const multiply = (number1, number2) => {
  return parseInt(number1) * parseInt(number2);
};

const addForm = document.getElementById("add-form");
const multiplyForm = document.getElementById("multiply-form");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;
  const total = add(number1, number2);
  console.log(total);
});

multiplyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const number1 = document.getElementById("multiply-number1").value;
  const number2 = document.getElementById("multiply-number2").value;
  const total = multiply(number1, number2);
  console.log(total);
});
