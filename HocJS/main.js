// // Đối tượng Date()
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function() {
//         return `${firstName} ${lastName}`;
//     }
// }
// User.prototype.className = 'F8';
// User.prototype.getClassName = function() {
//     return this.className;
// }

// var author = new User('Văn', 'anh', 'avatar');
// var user = new User('Vũ', 'Nguyễn', 'avatar');

// var date = new Date();
// // console.log(date);
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();

// // console.log(`${day}/${month}/${year}`);

// timestamp = Math.floor(date.getTime() / 100);
// //console.log(timestamp);
// //Câu lệnh rẽ nhánh switch case
// var date = 2;
// switch (date) {
//     case 2:
//     case 3:
//         // console.log('hom nay la thu 3');
//         break;
//     case 4:
//         //console.log('Hom nay la thu 4');
//         break;
// }
// //Toán tử 3 ngôi
// var course = {
//     name: 'javascrip',
//     coin: 0
// }
// var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
// //console.log(result);
// var myArr = [
//     'java',
//     'php',
//     '.net',
//     'sql'
// ];
// var arrLength = myArr.length //Viết thế này sẽ tối ưu về hiệu năng hơn vì nó chỉ mất 1 lần để lấy ra độ dài của mảng 
// for (var i = 0; i <= arrLength - 1; i++) {
//     // console.log(myArr[i]);
// }
// var myString = 'javascript';

// for (var key in myString) {
//     // console.log(myString[key]);
// }
// while (i < arrLength) {
//     // console.log(myArr[i]);
//     i++;

// }

// var i = 0;
// var isSuccess = false;
// do {
//     i++;
//     // console.log('Nạp lần ' + i);
//     if (false) {
//         isSuccess = true;
//     }
// } while (!isSuccess && i <= 3);
// //Break và continue
// for (var i = 0; i < 10; i++) {

//     // if (i >= 5) {
//     //     break;
//     // }
//     if (i % 2 !== 0) {
//         continue;
//     }
//     // console.log(i);
// }
// var arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         // console.log(arr[i][j]);
//     }
// }
// for (var i = 100; i > 0; i -= 5) {
//     // console.log(i);
// }
// //Làm việc với mảng
// var courses = [{
//         id: 1,
//         name: 'html',
//         coin: 0
//     },
//     {
//         id: 2,
//         name: 'nodejs',
//         coin: 250
//     }
// ];
// var course = courses.find(function(course, index) {

//     return course.name === 'css';
// });

// console.log(course);
// var myArray = [1, 2, 3, 4, 5, 6];
// var arr = myArray.find(function(arr) {
//     for (var i = 0; i < myArray.length; i++) {

//     }
// })


// formValues = [{
//         field: 'name',
//         value: 'Anh'
//     },
//     {
//         field: 'name',
//         value: 'van'
//     }
// ]

// function getRequestBodyFormValues(formValues) {
//     var user = {};
//     formValues.array.forEach(function ListUser(element) {
//         return user[formValues.field] = formValues.value;
//     });
//     return user;
// }
// //console.log(getRequestBodyFormValues(formValues.user));

// var keyword = 'PHP';
// var strings = ['javascript', 'Học PHP'];

// function findStringsInArrayByKeyword() {

//     return strings.filter(function(e) {
//         return e.slice(e.indexOf(keyword), (keyword.length + e.indexOf(keyword))) === keyword;
//     })

// }
// console.log(findStringsInArrayByKeyword());
// var button = document.getElementById('btn');

// button.onclick = function() {
//     alert('click');
// }
// // var inputElement = document.querySelector('input');
// // // console.log(inputElement);
// var headingNodes = document.querySelectorAll('.h1');
// console.log(headingNodes);
// var listYear = [1900, 1901, 1902];
// console.log(listYear)
//var btn = document.getElementById('btn');
// console.log(btn);

// btn.addEventListener('click', function(e) {
//     console.log(Math.random());
// });
// function viec1() {
//     console.log('viec1');
// }

// function viec2() {
//     console.log('viec2');
// }
// btn.addEventListener('click', viec1);
// btn.addEventListener('click', viec2);

// setTimeout(function() {
//     btn.removeEventListener('click', viec1);
// }, 3000)

var firstName = 'Van'
var lastName = 'Anh'

console.log(`toi la ${firstName} ${lastName}`)