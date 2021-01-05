var btn = document.querySelector("button");
var num1 = document.getElementById("number1");
var num2 = document.getElementById("number2");
function add2(num1, num2) {
    return num1 + num2;
}
btn.addEventListener("click", function () {
    console.log(add2(+num1.value, +num2.value));
});
