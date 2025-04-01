//---1---//
let numeros = Array();
let max = null;
let min = null;
let sum = 0;
while(true){
    let n = prompt(`Введите что-нибудь`);
    if (typeof(+n) != "number" || n == 0){
        break;
    }
    numeros.push(n);
    if (n < min || min == null){
        min = n;
    }
    if (n < min || max == null){
        max = n;
    }
    sum += +n;
}

if (numeros.length == 0){
    console.log("Вы не ввели чисел, кроме ноля");
} else if (numeros.length == 1){
    console.log(`Массив из одного числа ${numeros[0]}`);
} else {
    //numeros.sort();
    console.log(`Минимальное значение = ${min}`);
    console.log(`Максимальное значение = ${max}`);
    console.log(`Сумма чисел = ${sum}`);
    console.log(`Среднее арефмитическое чисел = ${sum / numeros.length}`);
    console.log(`Сам массив = ${numeros}`);
}
//---2---//
let x = prompt("введите значение X");
let arr = [];

for (let i = 0; i < 5; i += 1) {
    arr[i] = prompt(`введите элемент массива ${i + 1}`);
}
let index = arr.indexOf(x);
if (index == -1) {
    alert("элемент X не найден в массиве");
} else {
    let prev = arr[(index - 1 + arr.length) % arr.length];
    let next = arr[(index + 1) % arr.length];
    
    alert(`индекс X: ${index}, левый сосед: ${prev}, правый сосед: ${next}`);
}
//---3---//
let chet = [];
let nchet = [];

for (i = 0; i < 10; i += 1){
    let str = prompt(`Введите строку ${i + 1}`);
    if (str.length % 2 == 0) {
        chet.push(str);
    } else {
        nchet.push(str);
    }

}
alert("Слова с четным количеством символов - ");
for (i = 0; i < chet.length; i += 1){
    alert(chet[i])
}
alert("Слова с нечетным количеством символов - ");
for (i = 0; i < nchet.length; i += 1){
    alert(nchet[i])
}