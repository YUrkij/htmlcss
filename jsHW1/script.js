//---1---//
let x = +prompt("Введите число");
if (typeof(+x) == "number"){
    if (x % 2 == 0){
        alert(`${x} - чётное`)
    } else {
        alert(`${x} - нечётное`)
    }
} else {
    alert(`${x} - не число`)
}
//---2---//
x = +prompt("Введите число рублей");
alert(`${x} рублей = ${x*5.94} тенге`)