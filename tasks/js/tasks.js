// 67. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
// function inArray(text, array) {
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] === text) return true;
//     }
//     return false;
//   }
   
//   console.log(inArray('omg', ['hello', 'i', 'ohoho', 'omg']));

// 72. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

let arr = [2, 3, 1, 0, 4, 5, 4];
let sumNumber = arr.reduce((sum, elem, index) => {

    let ourSum = 0;
    while (ourSum <= 10) {
        return sum + elem;
    }
    index++


}, 0)
console.log(sumNumber);


// 85. Создать ассоциативный массив и занести в него десять элементов по принципу: "фамилия" - "дата рождения". Удалить из массива всех людей, родившихся летом. Формат записи числа 18 april 1956. Вывести массив до удаления и после на экран, каждый с новой строки. Пример записи в массиве: $arr['Иванов'=&gt;'18 april 1956'];

// var massiv = [{name:"Иванов", data:"18 January 1956"}, 
//               {name:"Петров", data:"18 February 1956"}, 
//               {name:"Гудков", data:"18 March 1956"}, 
//               {name:"Свистков", data:"18 april 1956"}, 
//               {name:"Абрамов", data:"18 May 1956"},
//               {name:"Бочаров", data:"18 June 1956"},
//               {name:"Тропарёв", data:"18 July 1956"},
//               {name:"Ушаков", data:"18 August 1956"},
//               {name:"Глушаков", data:"18 September 1956"},
//               {name:"Звездунов", data:"18 October 1956"}];
//  alert(massiv);

// let arr= [{name:"Иванов", data:"18 January 1956"}, 
//               {name:"Петров", data:"18 February 1956"}, 
//               {name:"Гудков", data:"18 March 1956"}, 
//               {name:"Свистков", data:"18 april 1956"}, 
//               {name:"Абрамов", data:"18 May 1956"},
//               {name:"Бочаров", data:"18 June 1956"},
//               {name:"Тропарёв", data:"18 July 1956"},
//               {name:"Ушаков", data:"18 August 1956"},
//               {name:"Глушаков", data:"18 September 1956"},
//               {name:"Звездунов", data:"18 October 1956"}];
              
// if {
//     data=(June,July,August);

// }
// alert(arr);


// var man = {
//     "soname" : Петров,
//     "data" : 18 February 1956,
// }
