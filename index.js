let num = window.prompt("input first number");
let sign = window.prompt("input operation from +, -, *, /");
let num2 = window.prompt("input second number");

num = parseInt(num);
num2 = parseInt(num2);
var sum = num + num2;
var subtract = num - num2;
let multiplication = num * num2;
let division = num / num2;

if (sign === '+'){
    alert(sum)
}
else if (sign === '-'){
    alert(subtract)
}
else if (sign === '*'){
    alert(multiplication)
}
else if(sign === '/'){
    alert(division)
}
else{
    alert('wrong input')
}