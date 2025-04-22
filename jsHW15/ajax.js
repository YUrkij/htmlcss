let all = document.querySelector('#all')
let les50 = document.querySelector('#les50')
let les100 = document.querySelector('#les100')
let les250 = document.querySelector('#les250')
let more250 = document.querySelector('#more250')
let update = document.querySelector('#update')

let citys = document.querySelector('.citys')

const jsonFilePath = "city.json"

let data
fupdate()

function fupdate(){
    fetch(jsonFilePath).then(response => {
        if (!response.ok) {
            console.error("Не прочиталось")
            return null;
        }

        return response.json();
    }).then( d => {
                console.log(d)
                data = d
            })
}

update.addEventListener('click', fupdate())

all.addEventListener('click', function (p){
    setCase(1)
})
les50.addEventListener('click', function (p){
    setCase(2)
})
les100.addEventListener('click', function (p){
    setCase(3)
})
les250.addEventListener('click', function (p){
    setCase(4)
})
more250.addEventListener('click', function (p){
    setCase(5)
})

function setCase(c){
    citys.innerText = ''
    if (data == null) {
        console.error("Json no parsed")
        return;
    }
    let str = '';

    for (let city in data){
        switch(c){
            case 1:
                str += `${city} : ${data[city]}`
                str += '\n'
                break;
            case 2:
                if (data[city] < 50000){
                    str += `${city} : ${data[city]}`
                    str += '\n'
                }
                break;
            case 3:
                if (data[city] < 100000 && data[city] > 50000){
                    str += `${city} : ${data[city]}`
                    str += '\n'
                }
                break;
            case 4:
                if (data[city] < 250000 && data[city] > 100000){
                    str += `${city} : ${data[city]}`
                    str += '\n'
                }
                break;
            case 5:
                if (data[city] > 250000){
                    str += `${city} : ${data[city]}`
                    str += '\n'
                }
                break;
        }
    }
    if (str == ''){
        str += "Таких городов нет в базе"
    }
    citys.innerText = str
}