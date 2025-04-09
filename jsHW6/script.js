main();
function main(){
    alert(table())


};
//---1---//
function isUnique(arr){
    for (let i = 0; i < arr.length - 1; i++){
        if (arr.lastIndexOf(arr[i]) != i){
            return false
        }
    }
    return true
}
//---2---//
function mergeArrays(arr1,arr2){
    let arr = [arr1[0]];
    let arr3 = arr1.concat(arr2);
    for (let i = 1; i < arr3.length; i++){
        if (arr.indexOf(arr3[i]) != -1){
            continue
        }
        if (arr3[i] > arr[arr.length-1]){
            arr.push(arr3[i]);
        } 
        else {
            let index = 0;
            while(true){
                if (arr[index] > arr3[i]){
                    arr = innerPopup(arr, index, arr3[i]);
                    break;
                }
                index++;
            }
        }
    }
    return arr
}

function innerPopup(arr, index, element){
    let pullForward = 0;
    let arr1 = [];
    for (let i = 0; i < arr.length; i++){
        if (i == index){
            arr1[i] = element;
            pullForward = 1;
        }
        arr1[i+pullForward] = arr[i];
    }
    return arr1;
}
//---3---//
function replaceNegatives(arr, replacement){
    let arr2 = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr2[i] = replacement;
            continue
        }
        arr2[i] = arr[i];
    }
    return arr2
}
//---4---//
function isPrime(n){
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++){
        if (n % i == 0){
            return false
        }
    }
    return true
}

function getPrimes(arr){
    let arr2 = []
    for (let i = 0; i < arr.length; i++){
        if (isPrime(arr[i])){
            arr2.push(arr[i])
        }
    }
    return arr2
}