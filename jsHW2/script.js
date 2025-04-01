//---1---//
let a = +prompt("Введите число 1");
let b = +prompt("Введите число 2");
if (isNaN(a) || isNaN(b)) {
    alert("Введенные значения не являются числами");
} else {
    let operation = prompt("Выберите операцию (+, -, *, /):");
    
    let resut;
    let error = false;
    
    switch (operation) {
        case '+':
            resut = a + b;
            break;
        case '-':
            resut = a - b;
            break;
        case '*':
            resut = a * b;
            break;
        case '/':
            if (b == 0) {
                alert("Деление на ноль невозможно");
                error = true;
            } else {
                resut = a / b;
            }
            break;
        default:
            alert("Нееверная операция");
            error = true;
    }
    
    if (!error) {
        alert("Результат: " + resut);
    }
}
//---2---//