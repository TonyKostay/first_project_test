'use strict';

//let number = 4.6;

//const persone = "Alex";
//const bool = true;

//const obj = {
//    name: "John",
//    age: 25
//};
//console.log(obj.name);

//let arr = ['plum.png', 'orange.jpg'];
//console.log(arr[0]);

//alert('Hello');
//const result = confirm("are you tut blya?");
//onst answer = +prompt('Вам есть 18?',"18");
//console.log(typeof(answer));
//const answers = [];
//answers[0]=prompt('Как ваше имя?');
//answers[3]=prompt('Как ваша фамилия?');
//answers[3]=prompt('Сколько вам лет?');

//console.log(typeof(answers));

//const category = 'toys';
//console.log(`https://someurl.com/${category}/5`)

//const user = 'Ivan';
//alert(`Hello, ${user}`);

//console.log('arr'+"- object");
//console.log(7+"- object");
//console.log(6+ +"6");

//let incr = 10,
    //decr = 10;
//incr++;           //постфиксная форма (сначала возвращает значение, а потом увеличивает/уменьшает на единицу)
//++decr;           //префиксная форма (сначала увеличивает/уменьшает, затем возвращает)
//console.log(++incr);
//console.log(decr--);

//console.log(2*4 ==  '8');  //не строгое равенство, сравнивает значения переменных
//console.log(2*4 ===  '8'); //строгое равенство, смотрит и на тип данных
// && - логическое И
// || - логическое ИЛИ
/*let price = 20;
let discont = 25;
let total = price - (price*(discont/1000));
console.log(total);


let year;
year = +prompt("Сколько тебе лет?");
if (year<18){
    alert("Ты пиздюк");
}else {
    alert(`Заходи не стесняйся ${typeof(year)}`);
}


let id = prompt('Введите id товара:');
switch(id){
    case '1':
        alert('В наличии 10 шт');
        break;
    case '2':
        alert('В наличии 256 шт');
        break;
    case '3':
        alert("В наличии 53 шт");
        break;
    case '4':
        alert("В наличии 3 шт");
        break;
    default:
        alert('Нет в наличии');


let num = +prompt("введи трехзначное число");
while (String(num).length < 4){
    if (String(num)[String(num).length - 1]== 0){
        alert(num);
    }
    num++;
}

const mname = prompt("Введите свое имя");
let insertName = String();
for (let i = (mname.length -1); i >=0 ; i--){
    insertName += mname[i];
}
alert(insertName);}


function min(x,y){
    if (x<y){
        return x;
    }else if(y<x){
        return y;
    }else{
        return "Числа равны";
    }
}

console.log(min(3,4));
console.log(min(4,2));
console.log(min(2,2));*/

/*const func = () =>{               //стрелочная функция
    return 34*7
}

alert(func())

function func1(){                   //замыкание
    let value = 10;
    return function(a){
        value+=a;
        return value
    }
}
let func2 = func1();  
alert(func2(2));
alert(func2(2));
alert(func2(2));


const massive = [];                 //массивы/списки
massive.push("холл");               //добавить элемент в конец
alert(massive);
massive.push("бар");
alert(massive);
massive.push('пробка');
alert(massive);
massive.shift();                    //удалить первый элемент
alert(massive);         
massive.pop();                      //удалить последний
alert(massive);
massive.unshift("первый")           //добавить в начало
for (let i = 0; i<massive.length;i++){
    alert(massive[i]);


listNames = ["Игорь","Николай","Владимир","Антон"];
strNames = listNames.join(" ");             //преобразовать в строку
alert(strNames);    
alert(strNames.split(' '))}                 //преобразовать в массив


let myString = '32, 31, 34, 36, 31';
myString = myString.split(', ');
myString = myString.join('; ')
alert(myString);

const massive = [1,2,3,4,5,6,7,8,9,10];   
let [first,second, ...newMassive] = massive;
alert(first);
alert(second);
alert(newMassive);
console.log(4);

Методы массивов
const massive = [2,-3,4,-6];
function callback(item,index){     //функция обратного вызова
    if (item<0){
        alert(item);
    }
}


const massive = [2,-3,4,-6];
massive.forEach((item,index)=>{     //анонимная функция(стрелочная)
    if (item<0){
        alert(item);
    }
})
massive.forEach(callback);

const massive = [12,-23,-40,3];       //метод map
const newArr = massive.map((item,index)=>{
    if (item<0){
        return item*-1;
    }else{
        return item*2;
    }
})
alert(newArr);
                                    
const arr = ['Green', 'Red','Blue'];    //метод find 
const result = arr.find((item,index)=>{
    return item.length==3;
});
alert(result);

function filterInRange(massive,min,max){       //метод filter
    massive = massive.filter((item,index)=>{
        return item>min&&item<max;
    })
    return massive
}
alert(filterInRange([12,23,40,3],10,30))
const massive = [2,5,6,3,1,7];                  //сортировка по убыванию
massive.sort((a,b)=>{
    return b-a;
});
alert(massive);

function squareSum(massive){                        //свертка массива
    let result = massive.reduce((acc,item)=>{
        return acc + item**2;
    })
    return result;
}
console.log(squareSum([2,3,4]));

const player = {                            //объекты
    "first name": 'Eric',
    'last name': 'Cartman',
    age: 14
}

console.log(player.age, player['first name']); 

const player = {                            
    "first name": 'Eric',
    'last name': 'Cartman',
    age: 14,
    print_info(){
        console.log(this.age);
    }
}
delete player.age;

if (player.age){
    console.log(true);
}else{
    console.log(false);
}
player.print_info();
const {age} = player;         //деструктуризация
console.log(age)

const playerClone ={...player}  */    //копирование объекта

/*function rename(fname,lname){
    this.name = `${fname} ${lname}`;
}
const user = {
    name: 'Eric',
    rename2(fname,lname){
        this.name = `${fname} ${lname}`;
    }
}

const user1={
    name: 'David'
}

rename.call(user,'адольф',"рудольф");  //call вызов функции в заданном контексте

user.rename2.apply(user1,['адольф',"рудольф"]); //apply массив вместо аргументов
alert(user1.name);

//--------------------------------------------------------------------------------------------

const shopItem={
    name:null,
    price:null,
    renameItem(newName){
        this.name = newName;
    },
    repriceItem(newPrice){
        this.price = newPrice;

    }
}

shopItem.renameItem("Juice");
alert(shopItem.name);
shopItem.repriceItem('2$');
alert(shopItem.price);

//----------------------------------------------------------------------------------------------

class Person{                       //классы
    constructor(name, surname,age,gender){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
    }
    printInfo(){
        alert(`Имя: ${this.name}
        Фамилия: ${this.surname}
        Возраст: ${this.age}
        Пол: ${this.gender}`);
    }
}
const user1 = new Person("Никита",'Петров',16,"м");
user1.printInfo();

const element = document.querySelector('h1') //получение ссылки на элемент
const elements = document.querySelectorAll('h1') //получение всех элементов

//----------------------------------------------------------------------------------------------

const elements = document.querySelector('ul');
console.log(elements.parentElement);
console.log(elements.previousElementSibling);
console.log(elements.children);
console.log(elements.firstElementChild);

//----------------------------------------------------------------------------------------------

function func0(){
    let count = true
    const element = document.querySelector('div')
    return () => {
        if (count){
            element.textContent = 'Поменялся!';
            element.style.fontSize = '40px';
            element.style.color = 'red';
            count = false
        }else{
            element.textContent = 'Поменялся обратно, опять нажми';
            element.style.fontSize = '20pt';
            element.style.color = 'black';
            count = true;
        }
    }
}

let arr = func0();

function changeText(element){
    element.style.color = "grey";}

//--------------------------------------------------------------------------------------------------

const elements = Array.from(document.querySelector('ul').children);
elements.forEach((element) => {
    element.style.color = "red";
});

//--------------------------------------------------------------------------------------------------

function changeText(event){
    event.target.innerText = 'Нажата';
};
const elements = document.querySelectorAll('.action');
elements.forEach((element) => {
    element.addEventListener('click',changeText)
}); 

//--------------------------------------------------------------------------------------------------
const greenBox = document.querySelector('.coub');
greenBox.addEventListener('mouseover',(event) =>{
    event.target.style.backgroundColor = 'red';
});
greenBox.addEventListener('mouseout',(event) =>{
    event.target.style.backgroundColor = 'green';
});
//--------------------------------------------------------------------------------------------------
const zone = document.querySelector('.zone');
const label = document.querySelector('.label');
zone.addEventListener('mouseover', () =>
{
    zone.addEventListener('mousemove', (event) =>
    {
        label.style.display = 'block';
        label.style.top = event.pageY+'px';
        label.style.left = event.pageX + 'px';
        });
});
zone.addEventListener('mouseout', () =>
{
 label.style.display = 'none';
 label.style.top = 0;
 label.style.left = 0;
});
//-------------------------------------------------------------------------------------------------
window.addEventListener('load',()=>{
    const obj = document.querySelector('.coub');
    obj.style.position = 'absolute';
    document.addEventListener('keydown',(event)=>{
        if (event.key == "d"){
            obj.style.left= Number(obj.style.left.replace(/[^0-9,\s]/g,""))+5+'px';
            console.log(obj.style.left);
        }else if(event.key=='a'){
            obj.style.left = Number(obj.style.left.replace(/[^0-9,\s]/g,""))-5+'px';
        }
        else if (event.key == "w"){
            obj.style.top= Number(obj.style.top.replace(/[^0-9,\s]/g,""))-5+'px';
            console.log(obj.style.left);
        }else if(event.key=='s'){
            obj.style.top = Number(obj.style.top.replace(/[^0-9,\s]/g,""))+5+'px';
        }
        
    });
});
//-------------------------------------------------------------------------------------------------  Формы
const passwordValue = document.querySelector('.input-password');
const actionButton = document.querySelector('.input-button');

actionButton.addEventListener('click', ()=>{
    console.log(passwordValue.value);
});
//-------------------------------------------------------------------------------------------------

const messageText = document.querySelector('#message');
const selectValue = document.querySelector('#selectChoice');
const choiceValue = document.querySelector('#notification');
const buttonSend = document.querySelector('#send');

buttonSend.addEventListener('click',()=>{
    console.log(`\n Сообщение: ${messageText.value} \n Тип сообщения: ${selectValue.value}`);
    if (choiceValue.checked){
        console.log('\n Уведомление: вкл');
    }else{
        console.log('\n Уведомление: выкл');
        }
});
//-------------------------------------------------------------------------------------------------
const data =
    '{"id":371,"type":"general", "joke":"Why does a chicken cooponly have two doors? Because if it had four doors it would be a chicken sedan."}';*/

console.log(true||false);