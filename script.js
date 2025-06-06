const button1 = document.getElementById("btnPlus");  // select the "+" button by its unique ID
const button2 = document.getElementById("btnSub"); // select the "-" button by its unique ID
const button3 = document.getElementById("btnMul"); // select the "*" button by its unique ID
const button4 = document.getElementById("btnDiv"); // select the "/" button by its unique ID
const p = document.getElementById("ans");
let result = 0; // initialize a variable to store the result
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

button1.addEventListener("click", function () {
    let ans = 0;
    ans = Number(num1.value) + Number(num2.value);
    p.innerHTML = "Result: " + ans; // display the result in the paragraph element
});

button2.addEventListener("click", function () {
    let ans = 0;
    ans = Number(num1.value) - Number(num2.value);
    p.innerHTML = "Result: " + ans; // display the result in the paragraph element
});
button3.addEventListener("click", function () {
    let ans = 0;
    ans = Number(num1.value) * Number(num2.value);
    p.innerHTML = "Result: " + ans; // display the result in the paragraph element
});
button4.addEventListener("click", function () {
    let ans = 0;
    if (Number(num2.value) !== 0) {
        ans = Number(num1.value) / Number(num2.value);
        p.innerHTML = "Result: " + ans; // display the result in the paragraph element
    } else {
        p.innerHTML = "Error: Division by zero is not allowed."; // handle division by zero
    }
});