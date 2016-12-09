/*
 1. Переместите 0 в конец массива, остальные числа должны остаться неизменными

 */
function move (arr) {
    for(var i = arr.length; i--;) {
        if(arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}
console.log(move([1,false,2,0,3,null,0,4,0,25]));
console.log(move([ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ]));
console.log(move([ 0, 1, null, 2, false, 1, 0 ]));
//////
/*
 2. Верните сумму двух найменьших чисел в массиве
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 */

/*
 3. Напишите функцию которая меняет местами имя и фамилию
 */
function swap(array) {
   var name = array.split(' ');
    name.push(name.splice(0,1));//здесь можно было применить reverse
    var result = name.join(' ');
    return result;
}
console.log(swap('Arnold Schwarzenegger'));
console.log(swap('john McClane'));
console.log(swap('James Bond'));
/*
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной

 */
function changeName(arr) {
    for(var i = 0; i < arr.length; i++){
       arr[i] = arr[i].toLowerCase().split('');
        arr[i][0] = arr[i][0].toUpperCase();
        arr[i] = arr[i].join('');
    }
    return arr
}
console.log(changeName(['jo', 'nelson', 'jurie']));
console.log(changeName(['KARLY', 'DANIEL', 'KELSEY']));

//@SUPER
/*
 1. Найдите Число отсутствующее в заданной последовательности
 example:

 */
function number (array) {

    for (var i = 0; i < array.length; i++) {
        var num1 = array[1] - array[0];
     //   console.log(num1);
        if (array[i + 1] !== array[i] + num1) {
            var num2 = array[i] + num1
            return num2;
        }
    }
}
///
//function number (array) {
//     var arr = [];
//
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] - array[i - 1] != 1) {
//             var num1 = array[i] - array[i - 1];
//             var num2 = 1;
//             for (; num2 < num1; num2++) {
//                 arr.push(array[i - 1] + num2);
//             }
//         }
//     }
//     return arr
// }
console.log(number([1,3,5,9]))
console.log(number([0,8,16,32]))
console.log(number([4,6,8,10]))
/*
 2. Напишите функция которая преобразовывает открывает скобки всех вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
*/
function flatten(ary) {
    var ret = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            ret = ret.concat(flatten(ary[i]));
        } else {
            ret.push(ary[i]);
        }
    }
    return ret;
}
console.log(flatten([[1,2],[3,[4]],5, 10]));

