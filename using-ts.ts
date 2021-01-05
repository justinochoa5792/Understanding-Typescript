const btn = document.querySelector("button");
const num1 = document.getElementById("number1")! as HTMLInputElement;
const num2 = document.getElementById("number2")! as HTMLInputElement;

function add2(num1: number, num2: number) {
  return num1 + num2;
}

btn.addEventListener("click", function () {
  console.log(add2(+num1.value, +num2.value));
});
