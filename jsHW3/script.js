//1
console.log("---1---")
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
console.log("Изначальный массив",months);
console.log("Перевёрнутый массив",months.reverse);
let lastMonth = months[months.length - 1];
console.log("Последний месяц",lastMonth);
months.pop();
console.log("Без него",months);
months.push(lastMonth);
console.log("Изначальный массив v.2",months);
//2
console.log("---2---")
let nums = [];
for (i = 0; i < 10; i += 1){
    let n = prompt(`Введите число ${i+1} из 10:`);
    if (+n % 2 == 0) {
        nums.push(n);
    }
}
console.log("Чётные числа:",nums);
//3
console.log("---3---")
const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
let userWeek = [];
for (i = 0; i < 7; i += 1){
    let str = prompt(`Введите строку ${i+1} из 7:`);
    str = str.toLowerCase();

    if (week.includes(str)){
        userWeek.push(str);
    }
}
console.log("Действительные имена дней недели",userWeek);