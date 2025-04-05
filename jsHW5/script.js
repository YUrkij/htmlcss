main();
function main(){
    alert(table())


};
//---1---//

function minNum(a, b){
    if (a < b) return a;
    else return b;
}

function expon(a, exp){
    if (exp == 0){
        return 1;
    }
    return a * expon(a, exp - 1);
}

function culcul(a, b, operation){

    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b == 0) {
                return NaN;
            } else {
                return a / b;
            }
        default:
            return NaN;
    }
}

function prime(num) {
    if (num <= 1) return false;
    for (let i = 2; (i * i) <= num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

function table(){
    let tabl = "";
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
        tabl += `  ${i*j}`;
        }
        tabl += '/n'
    }
    return tabl;
}

function oddNodd(arr, oddNodd /*true - чётные/false*/){
    for (let i = 1; i< arr.length; i++){
        if (arr[i] % 2 == oddNodd){
            console.log(arr[i])
        }
    }
}

function nextDayDate(day, months, year){
    let isLeap = function (y){
        return (y % 4 == 0) * 1
    }
    const daysInMonth = [31, (28 + isLeap(year)), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


    if (months < 1 || months > 12 || day < 1 || day > daysInMonth[months - 1]) {
        return NaN;
    }

    day++;
    if (day > daysInMonth[months - 1]) {
        day = 1;
        months++;
        if (months > 12) {
            months = 1;
            year++;
        }
    }
}

