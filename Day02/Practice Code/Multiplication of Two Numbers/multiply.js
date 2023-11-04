function multiply(){
    let num1 = document.getElementById("firstNum").value;
    let num2 = document.getElementById("secondNum").value;
    console.log(num1 + " "+ num2);
    document.getElementById("result").value = (num1 * num2);
}