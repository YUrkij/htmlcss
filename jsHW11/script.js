let a = document.querySelector('#a');
let b = document.querySelector('#b');

let pl = document.querySelector('#plus');
let mn = document.querySelector('#minus');
let mu = document.querySelector('#multiply');
let di = document.querySelector('#divide');
let re = document.querySelector('#remains');

let solve = document.querySelector('#solveButton');
let clear = document.querySelector('#clearButton');

document.addEventListener('DOMContentLoaded', function (e) {
    //----1----//
    document.addEventListener('mousemove', function (e) {
        if (e.pageY < 20){
            alert("ОСТАНЬСЯ СО МНОЙ")
        }
    })
    
    clear.addEventListener('click', function (e) {
        pl.value = ""
        mn.value = ""
        mu.value = ""
        di.value = ""
        re.value = ""
    })
    
    solve.addEventListener('click', function (e) {
        if (!isNumbers){
            return
        }
        let x = +a.value;
        let y = +b.value;
        pl.value = x + y;
        mn.value = x - y;
        mu.value = x * y;
        if (y == 0){
            di.value = "Нельзя делить на 0";
            re.value = "Нельзя делить на 0";
        } else {
            di.value = x / y;
            re.value = x % y;
        }
    })


        
});

function isNumbers(){
    return (typeof a.value == 'number' && typeof b.value == 'number')
}