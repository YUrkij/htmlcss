class Person {


    constructor(name, age, gender){
        if (typeof name != 'string' || name == '') {
            throw new Error('Имя должно быть непустой строкой');
        }
        if (typeof age != 'number' || age <= 0) {
            throw new Error('Возраст должен быть положительным числом');
        }
        if (gender != 'мужской' && gender != 'женский') {
            throw new Error('Пол должен быть "мужской" или "женский"');
        }
      

        this.name = name
        this.age = +age
        this.gender = gender
    }

    introduce(){
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет.`)
    }

    isAdult(){
        return (this.age >= 18)
    }
}

class Student
extends Person {
    constructor(name, age, gender, major, gpa){
        super(name, age, gender)
        if (typeof major != 'string') {
            throw new Error('Специальность должна быть непустой строкой');
        }
        if (typeof gpa != 'number' || gpa <= 0 || gpa >= 4) {
            throw new Error('Средний балл должен быть числом от 0 до 4');
        }

        this.major = major;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} учится на специальности ${this.major}.`)
    }

    improveGPA(points){
        this.gpa = clamp(this.gpa + points, 0, 4)
    }

    introduce(){
        super()
        console.log(`Я учусь по специальности ${this.major} со средним балом ${this.gpa}`)
    }
}

clamp = function(number, min, max){
    if (number < min) return min;
    if (number > max) return max;
    return number
}