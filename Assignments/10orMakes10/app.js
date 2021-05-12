function ten(m, n) {
    return (m == 10 || n == 10 || m + n == 10)?true:false;
}

var res = () => {
    var num1 = parseInt(prompt("enter 1st number"));
    var num2 = parseInt(prompt("enter 2nd number"));
    return ten(num1, num2);
}
console.log(res());