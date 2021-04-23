// 49. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.


let inputNum = document.getElementById("input_49");
let output = document.querySelector(".output_49");

inputNum.addEventListener("change", () => {

    for (let i = 2; i < inputNum.value; i++) {
        (inputNum.value % i === 0) ? output.innerHTML = `${inputNum.value} делится на другие числа без остатка` : output.innerHTML = `${inputNum.value} не делится на другие числа без остатка, кроме себя самого и единицы`
        inputNum.value = "";
    }

});

// 52. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

let inputNum52 = document.getElementById("input_52");
let output52 = document.querySelector(".output_52");

inputNum52.addEventListener("change",  () => {
    (inputNum52.value > 0 && inputNum52.value < 10) ? output52.innerHTML =  `${inputNum52.value} больше нуля и меньше 10`: output52.innerHTML = `${inputNum52.value} больше 10 или равно 10`;
    inputNum52.value = "";
});

// 65. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

let input65Item = document.getElementById("input_65_item");
let input65Num = document.getElementById("input_65_num");
let output65 = document.getElementById("output_65");
let array = [];
let item65 = input65Item.value;
let num65 = input65Num.value;

// input65Item.addEventListener("change", arrayFill (item65, num65));
// input65Num.addEventListener("change", arrayFill (item65, num65));


function arrayFill (item65, num65) {
    for (let i = 0; i < num65; i++) {
        array.push(item65);
        }
        return array;
    }

console.log(arrayFill("x", 5));

