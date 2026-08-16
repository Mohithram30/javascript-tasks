// // // javascript

// // // script writing


// // // 1. ques 

// // // answer


// // // 2. ques

// // // answer



// // // variable : -

// // // var - global scope

// // // let - block scope

// // // const - block scope



// // // rule :- 


// // // var 


// // // declration  // intialization

// // var a = 10

// // // reuse    // reIntialization

// //     a = 12

// // // reDeclration

// // var a = 55


// // console.log(a);



// // // let 

// // // declration  // intialization

// // let b = 22

// // // reuse  // reintilization

// //     b = 23

// // // reDeclration

// // // let b = 50 

// // console.log(b);


// // // const 

// // // declration  // reIntialization

// // const c = 40

// // // reuse    // reIntialization

// //     //   c = 50

// // // reDeclration 

// // // const c = 50

// // console.log(c);




// // // example :- 


// // const c1 = 0 

// // console.log(c1);


// // let a1 = 5

// // var d1 = c1 

// // var d1 = a1 


// // console.log(c1 , a1 , d1);

// // // 0 , 5 , 5






// // // printing statement


// // // 1. console.log()


// // let c11 = 50

// // console.log(c11);

// // console.log(122);


// // // 2. alert()


// // // let c12 = 40
// // // alert(c12)

// // // alert(555)



// // // 3. confirm()

// // // confirm("did you know programing ?")


// // // 4. prompt()


// // // prompt("what is your name")

// // // 5. document.writeln()

// // // document.writeln(55586879)



// // // example :- 


// // // i want to know user name , i want to print username in console in.

// // // let username = prompt("what is your name :- ")

// // // console.log(username);



// // // i want to show user age to use through pop up

// // // let userAge = prompt("how old are you :- ")

// // // alert("user age :- " + userAge )


// // // i want to print in ui  "batch 38"

// // // document.writeln("batch 38")



// // // console methods 


// // // 1. console.log()


// // console.log(145);


// // // 2. console.warn()

// // console.warn(145);


// // // 3. console.error()

// // console.error(145);


// // // 4. console.clear()

// // console.clear()


// // // DataTypes()


// // // 1. primitive DataTypes

// // // types :- 


// // // 1. string - ""


// // let ss = "naveen"

// // console.log(typeof(ss));


// // // 2. number - 123

// // let ss1 = 23

// // console.log(typeof(ss1));

// // // 3. boolean - true/ false 

// // let ss2 = false 

// // console.log(typeof(ss2));


// // // 4. undefined

// // let ss3;

// // console.log(ss3);


// // // 5. null 

// // // let ss4 = prompt()

// // // console.log(ss4);







// // // 2. non primitive dataTypes


// // // types 

// // // array 

// // // []


// // let games = ["nfs","pubg","ff","cod","cricket","gow","cc","dd"]

// // console.log(games);
// // console.log(games[1]);
// // console.log(games[4]);
// // console.log(games[2]);


// // // console.log(games[5]);

// // console.log(games[0]);
// // console.log(games[games.length-1]);

// // games = ["nfs","pubg","ff","cod","cricket","gow","cc","dd","abc","apple"]

// // // object 

// // // {}

// // let allObj = {
// //     games : ["nfs","pubg","ff","cod","cricket","gow","cc"],

// //     fruit : "apple",

// //     alphs : ["dd","abc"]
// // }


// // console.log(allObj);
// // console.log(allObj.fruit);
// // console.log(allObj.alphs[1]);
// // console.log(allObj.games[4]);


// // console.clear()


// // // operators

// // // 1. Arithmetic operator


// // //  meaning         operator 


// // //   addition          +

// // console.log(5  +  5);

// // //   subraction        - 

// // console.log(5  -  5);

// // //   multiplication    *

// // console.log(5  *  5);

// // // division            /

// // console.log(5  /  5);

// // // modulus              %


// // console.log(39   %   50);


// // // Exponencial          **

// // console.log(5 ** 5);// 5^5 = 5*5*5*5*5 = 3125 


// // // increament     ++ = +1

// // // post inc    = var ++ 

// // // pre  inc    = ++ var


// // // decreament      -- = -1 

// // // post dec   = var --

// // // pre  dec   = -- var
// // console.log("increament / decreament");



// // let val = 1

// // val--

// // console.log(val);



// // // searching element first find in variable side means that value side you can calculate yet the variable.



// // let val1 = 3     // null
 
// // val1     = -- val1  // -- 3 = 2


// // console.log(val1);


// // // searching element first find in value side means that value side you can calculate all the value.

// // let val2 = 5        // null

// // let val3  = val2 ++  // val2 ++ = 5+1 = 6


// // console.log("val2 :",val2);  // val2 :- 6
// // console.log("val3 :",val3);  // val3 :- 5





// // let val4 = 1    // null

// // let val5 = val4++ //

// // let val6 = --val5 // --val5 // --1 = 0


// // console.log(val4);  // 1 2 1 1 2  | val4 :- 2
// // console.log(val5);  // 1 0 2 1 1  | val5 :- 0  
// // console.log(val6);  // 0 0 1 1 0  | val6 :- 0



// // console.clear()








// // // 2. Assignment operator 

// // let num1 = 5

// // let additionVal = 100

// // // num1 = num1 + additionVal 

// // num1 += additionVal

// // console.log(num1);



// // // 3. comparision operator 

// // // meaning     operator       example       result


// // // lessThen      <             5 < 6        true

// // // greaterThen   >             6 > 5        true

// // // lessThenEq    <=            5 <= 5       true

// // // greaterThenEq >=            6 >= 55      false

// // // lossey type Eq ==           5 == "5"     true

// // // looseyNotEq    !=           5 != "5"     false

// // // strictlyTypeEq ===          5 === "5"    false

// // // strictlyNotEq  !==          6 !== "5"    true



// // console.log(5 == "5");  // true
// // console.log(15 != "5"); // true
// // console.log(53 === "55"); // false
// // console.log(5 !== "5"); // true




// // // 4. logical operator

// // // AND    = &&

// // // true && true && true = true 

// // // false && false && true = false

// // // OR     = ||

// // // false || false || false = false 

// // // true || false || false  = true

// // // NOT    = !

// // // !(true) = false , !(false) = true 


// // // 1
// // console.log(5 == 5 && 8 <= 6 || 5 >= 5); 

// // //           true  && false = false || true = true

// // // 2
// // console.log(10 > 5 && 20 < 15 || 8 == "8");

// // //          true && false = false || true = true

// // // 3
// // console.log(15 === "15" || 10 != 5 && 6 > 3);

// // //           false   || true  = true && true = true 

// // // 4
// // console.log(20 >= 20 && 5 !== "5" || 10 < 5);

// // //           true && true = true ||  false = true

// // // 5
// // console.log(25 < 20 || 30 == "30" && 10 >= 10);

// // //          false   ||  true = true && true = true

// // // 6
// // console.log(5 === 5 && 10 != "10" || 8 > 3);

// // //           true  &&  false = false || true = true

// // // 7
// // console.log(50 > 40 && 20 <= 20 || 15 === "15");

// // //           true   && true = true || false = true     

// // // 8
// // console.log(10 != "10" || 5 >= 5 && 8 < 10);

// // //           false   || true = true && true = true

// // // 9
// // console.log(100 === "100" && 50 > 25 || 10 != "10");

// // //           false && true = false || false = false

// // // 10
// // console.log(15 <= 20 && 25 >= 25 || 5 === "5");

// // //          true  && true  = true || false = true.




// // // 5. ternary operator


// // // condition ? statement : statement 


// // 5 == "5" ? console.log("true") : console.log("false");


// // let pwd = false ; 

// // pwd ? console.log("you can allow the home page") : console.log("invalid password");



// // console.clear();



// // // concatination  (+)

// // let str1 = "spider"
// // let str2 = "man"

// // console.log(str1 +" "+ str2);


// // // template string -  ``

// // console.log(`${str1} ${str2}`);



// // // typeCasting

// // // implicit type casting

// // // string 

// // console.log(typeof("abc" + "abc"));
// // console.log(typeof("abc" + 1));
// // console.log(typeof("abc" + true));
// // console.log(typeof("abc" + undefined));
// // console.log(typeof("abc" + null));

// // console.log(typeof("abc" + [1,2]));
// // console.log(typeof("abc" + {k:3}));

// // console.log("number type casting :-");

// // // number 

// // console.log(typeof(1 + "abc"));
// // console.log(typeof(1 + 1));
// // console.log(typeof(1 + true));
// // console.log(typeof(1 + undefined));
// // console.log(typeof(1 + null));

// // console.log(typeof(1 + [3,4]));
// // console.log(typeof(1 + {j:8}));

// // // boolean 

// // console.log("boolean type casting :- ");

// // console.log(typeof(true + "abc"));
// // console.log(typeof(true + 1));
// // console.log(typeof(true + true));
// // console.log(typeof(true + undefined));

// // console.log(typeof(true + [1,2]));
// // console.log(typeof(true + {j:8}));


// // // explicit type casting


// // // number 

// // // constractor - Number()

// // console.log(typeof(1 + Number("1")));

// // console.log(Number());
// // console.log(Number(""));
// // console.log(Number("1234"));
// // console.log(Number("abc"));
// // console.log(Number(true));
// // console.log(Number(false));
// // console.log(Number(0));
// // console.log(Number(-1));
// // console.log(Number(1));
// // console.log(Number(undefined));
// // console.log(Number(null));
// // console.log(Number([1,3]));
// // console.log(Number({j:9}));

// // // constractor - Boolean()


// // console.log(Boolean());
// // console.log(Boolean(""));
// // console.log(Boolean("1234"));
// // console.log(Boolean("abc"));
// // console.log(Boolean(undefined));
// // console.log(Boolean(0));
// // console.log(Boolean(-1));
// // console.log(Boolean(1));
// // console.log(Boolean(true));
// // console.log(Boolean(false));
// // console.log(Boolean(null));
// // console.log(Boolean([]));
// // console.log(Boolean({}));





// // console.clear();


// // // Flow control statement 

// // // 1. conditonal statement

// // // 1. if statement 

// // // flow : -  if(condition =  true){allow}


// // if(6>=6){

// //     console.log("hi");
    
// // }


// // // 2. if-else statement

// // // flow :- if(condition = true){allow}else{condition = false here allow}

// // let age = 21
// // if(age >= 18){
// //     console.log("can vote");
    
// // }else{
// //     console.log("cant vote");
    
// // }


// // // else if statement 

// // let time = 25

// // if(time >= 1 && time <= 6){
// //     console.log("early morning");
    
// // }else if(time >= 7 && time <= 12){
// //     console.log("good morning");
    
// // }else if(time >= 13 && time <= 15){
// //     console.log("good afternoon");
    
// // }else if(time >= 16 && time <= 19){
// //     console.log("good evening");
    
// // }else if(time >= 20 && time <= 24){
// //     console.log("good night");
    
// // }else{
// //     console.log("invalid time");
    
// // }

// // // 4. nested if statement 


// // // let age1 =  prompt("enter your age ")
// // // let height =   prompt("enter your height use cm ")
// // // let weight =  prompt("enter your weight use kg")


// // // if(age1 >= 21){
// // //     if(height >= 170){
// // //         if(weight >= 70){
// // //             alert("congradulation your eligible");
            
// // //         }else{
// // //             alert(`your weight is ${weight}kg. , but needed 70 kg`);
            
// // //         }

// // //     }else{
// // //         alert(`your height is ${height} cm. , but needed 170 cm`);
        
// // //     }
    
// // // }else{
// // //     alert(`your age is ${age1}yr old only ,  but wants 21 atleast.`);
    
// // // }



// // // 5. switch statement

// // // switch (key) {
// // //     case value: statement
        
// // //         break;
// // //     case value: statement
        
// // //         break;
// // //     case value: statement
        
// // //         break;
// // //     case value: statement
        
// // //         break;

// // //     default:
// // //         break;
// // // }


// // let trafficLight = "red"

// // switch(trafficLight){
// //     case "red" : console.log("stop the vechile"); break;
// //     case "yellow" : console.log("start the vechile"); break;
// //     case "green" : console.log("go the vechile"); break;

// //     default : console.log("have the nice day");break;
    
    
// // }







// // console.clear();


// // // 2. looping statement

// // console.log(1);
// // console.log(2);
// // console.log(3);
// // console.log(4);
// // console.log(5);


// // // for loop

// // // for(intialization ; condition ; iteration){
// // //     statement 
// // // }

// // for(let a = 1 ; a <= 5 ; a++){
// //     console.log("forloop :-",a); // 1 2 3 4 5
// // }


// // // let a = 1 ; 1 <= 5 = true ; 1++ = 2
// // // let a = 2 ; 2 <= 5 = true ; 2++ = 3
// // // let a = 3 ; 3 <= 5 = true ; 3++ = 4
// // // let a = 4 ; 4 <= 5 = true ; 4++ = 5
// // // let a = 5 ; 5 <= 5 = true ; 5++ = 6
// // // let a = 6 ; 6 <= 5 = false. 




// // // while loop 


// // // intialization

// // // while(condition){
// // //     statement

// // //     iteration
// // // }


// // let val10 = 3

// // while(val10 >= 0){
// //     console.log(val10);
    

// //     val10--
// // }


// // // 3  ; 3 >= 0 = true ; 3 ; 3-- ; 2
// // // 2  ; 2 >= 0 = true ; 2 ; 2-- ; 1
// // // 1  ; 1 >= 0 = true ; 1 ; 1-- ; 0
// // // 0  ; 0 >= 0 = true ; 0 ; 0-- ; -1
// // // -1 ; -1 >= 0 = false.


// // let attempt = 1

// // while(attempt<=3){

// //     console.log("attempt Count :",attempt);

// //     attempt++
    
// // }



// // let atempt = 1

// // let correctOTP = 1234

// // let enterOTP   = 1234

// // while(atempt <= 3){
// //     console.log("checking");

// //     if(enterOTP===correctOTP){
// //         console.log("otp is correct");
// //         break;
        
// //     }
// //         console.log("wrong otp");
// //         atempt++
        
    
    
// // }



// // let value = 4

// // while(value >= 20){ // stoped
// //     console.log("while loop :",value);

// //     value--
    
// // }


// // // do while loop

// // // intialization 

// // // do{
// // //     statement 

// // //     iteration
// // // }

// // // while(condition)

// // let value1 = 4 

// // do{
// //     console.log(value1);

// //     value1--
    
// // }


// // while(value1>=2)



// // // for of loop - string , array , function

// // let str = "javascript"

// // for(let b of str){
// //     console.log(b);
    
// // }

// // let arr = ["apple","orange","banana","graps"]

// // for(let c of arr){
// //     console.log(c);
    
// // }




// // // for in loop - object


// // let obj = {
// //     name1 : "arun",
// //     empId : "STK-26-3333",
// //     role  : "software engineer"  
// // }

// // for(let d in obj){
// //     console.log(d , obj[d]);
    
// // }



// // console.clear();


// // // function 

// // // block of code 
// // // reusable code 
// // // specific task
// // // invoke after code excuit
// // // reusable value
// // // easy debug
// // // avoid repeatation code
// // // clean & easy readable
// // // set of instractution


// // // syntex :- 

// // // function first(parameter){
// // //     statement 
// // //     return 
// // //     yeild
// // // }

// // // first(argument)


// // function example1(){
// //     console.log("hello");

// //     if(true){
// //         console.log("hi");
        
// //     }

// //     for(let i = 1; i <= 5; i++){
// //         console.log(i);
        
// //     }
    
// // }

// // example1()


// // // parameter /  argument


// // function example2(name,department,cgpa){

// //     console.log("name :",name);
// //     console.log("department :",department);
// //     console.log("cgpa :",cgpa);
// // }

// // example2("kamal","ECE",7.22)
// // example2("Livin","ECE",9.1)


// // // return


// // function example3(value){
// //     return value
// // }

// // let aa = example3(100)


// // function example4(){
// //     console.log(aa + 5);
    
// // }

// // example4()




// // // example 


// // function emp(salary){
// //     return salary
// // }

// // let bb = emp(45000)

// // console.log(bb);

// // function festival(bonus){
// //     console.log(bb + bonus);
    
// // }

// // festival(5000)



// // let obj1 = {
// //     name2 : "ram",
// //     salary: 100000
// // }

// // function example6(){
// //     console.log(obj1.name2);
// //     console.log(obj1.salary);
    
// // }

// // example6()


// // console.clear();

// // // type of function

// // // named function 
// // named("named function")

// // function named(parameter){
// //     console.log(parameter);
    
// // }


// // // annonymous function 

// // var annonymous = function(parameter){
// //     console.log(parameter);
    
// // }
// // annonymous("annonymous function")


// // // arrow function


// // var arrow = (parameter)=>{
    
// //     console.log(parameter);
    
    
// // }
// // arrow("arrow function")



// // // scope 


// // // function scopeCheck(){
// // //     if(true){
// // //         var a5 = "global scope"
// // //         let b5 = "block scope"
// // //         const c5 = "block scope"
// // //         console.log(b5);
// // //         console.log(c5);
// // //     }
// // //     console.log(a5);
    

    
    
// // // }

// // // scopeCheck()


// // // // hoisting


// // // var a6 = 5
// // // console.log(a6);

// // // let b6 = 6
// // // console.log(b6);

// // // const c6 = 7
// // // console.log(c6);



// // // higher order function  / callback function 

// // function function1(){
// //     console.log("higher order function");
    
// // }

// // function function2(){
// //     console.log("callback function");
    
// // }

// // function1(function2())


// // // example:-


// // function add(callback,a,b){ // callback = sub,a=20,b=40
// //     console.log(a+b); // 20 + 40 = 60
// //     callback(20,20)   // sub(20,20) 
// // }


// // let sub = function(num1,num2){
// //     console.log(num1-num2); // 20-20 = 0
    
// // }


// // add(sub,20,40)


// // // 20,40 
// // // 60,20
// // // 40,60
// // // 60,0



// // // generator function 

// // function* rewards(){
// //     yield "10% cashback"
// //     yield "50% cashback"
// //     yield "20% flat off"
// //     yield "70% cashback"
// //     yield "better luck next time"
// // }


// // let showApp = rewards()

// // console.log(showApp.next().value);
// // console.log(showApp.next().value);
// // console.log(showApp.next().value);


// // console.log(showApp.next());

// // if(showApp.next().done){
// //     console.log("rewards completed");
    
// // }


// // // IIFE function 


// // (function(parameter){
// //     statement
// //     return
// //     yield

// // })(argument)


// (function(product,discount){
//     alert(`sale going on ${product}, discount is ${discount}%`)
// })("furniture",50)






// let amount = 10000

// let withdrawal = Number(prompt("enter your withdrawal amount"))


// if(withdrawal <= 0){ // 500 <= 0 false
//     console.log("invalid amount: give greater then 0");
    
// }else if(withdrawal > amount){ // 500 > 10000 false
//     console.log("insufficient balance");
    
// }else if(withdrawal % 100 !== 0){ // 500 % 100 = 0 !== 0 false
//     console.log("invalid amount : Withdrawal amount should be a multiple of 100");
    
// }else{
//     amount = amount- withdrawal; // 9500 = 10000-500 

//     console.log("withdrawel successful");
//     console.log("Remain Amount :",amount);
    
    
// }


// function clgForm(name,department,disability = "no"){
//     console.log("name :",name);
//     console.log("department :",department);
//     console.log("disability :",disability);
    
// }


// clgForm("livin","Ece")


// currying starcture


function a(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
            
        }
    }
}

a(10)(20)(30)


// uncurrying stracture

function a1(a,b,c){
    console.log(a+b+c);
    
}

a1(10,20,30)



// DataStracture

// es6 edition

// Spread operator

// array , object
// merge the value 
// clone

// Array Spread operator - [...]

let arr11 = [1,2,3,4]
let arr21 = [5,6,7,8]

let newArr = [...arr11,...arr21,9,10]

console.log(newArr);

// object spread operator - {...}

let obj1 = {name1 :"a", role1 : "trainee"}
let obj2 = {name : "b", role : "developer"}

let empDetials = {...obj1,...obj2,department : "pythonDeveloper"}
// let newObj     = Object.assign({},obj1,obj2)


// console.log(newObj);

console.log(empDetials);







// rest operator

// function - (...) 

// multiple argument single parameter inside

function add(a,b,c,d,...e){
    console.log(a,b,c,d);

    console.log(e);
    console.log(e[0]+e[1]+e[5]+e[2]);
    let [x1,x2,x3,x4,x5,x6] = e

    console.log(x1 + x2 + x6 + x3);
    

    
    
    
}

add(1,2,3,4,5,6,7,8,9,10)


// destracture


// let aa = [1,2,3,4]




// let z1 = aa[0] 
// let z2 = aa[1] 
// let z3 = aa[2] 
// let z4 = aa[3] 

// console.log(z1,z2,z3,z4);

// // Array Destracture 

// let [y1,y2,y3,y4] = aa

// console.log(y1,y2,y3,y4);


// nested Array 


let nested = [1,2,[3,4,[5,6,[7]]]]

let g1 = nested[0]
let g2 = nested[1]
let g3 = nested[2][0]
let g4 = nested[2][1]
let g5 = nested[2][2][0]
let g6 = nested[2][2][1]
let g7 = nested[2][2][2][0]


console.log(g1,g2,g3,g4,g5,g6,g7);


// Destracture Nested Array

let [f1,f2,[f3,f4,[f5,f6,[f7]]]] = nested

console.log(f1,f2,f3,f4,f5,f6,f7);



// object 

let exampleObj = {
    name2 : "john",
    role2 : "mern stack",
    salary2: 100000
}


let s1 = exampleObj.name2
let s2 = exampleObj.role2
let s3 = exampleObj.salary2

console.log(s1 , s2 , s3);


// nested obj




// destracture obj 


let {name2,role2,salary2} = exampleObj

console.log(name2,role2,salary2);




let example1Obj={
    name3:{city:"trichy",state1:"tamil nadu"}
}

console.log(example1Obj.name3.city);
console.log(example1Obj.name3.state);


let s4 = example1Obj.name3.city
let state = example1Obj.name3.state1

console.log(s4);
console.log(state);

// destrature obj 

let {name3:{city,state1}} = example1Obj

console.log(city);
console.log(state1);

console.clear();


// Array Advance concept 


let array = [1,2,3,5,6,7,"string",true,undefined,null,[1,2,3]]

console.log(array)
console.log(array[0]);
console.log(array[array.length-1]);

let sh = [1,2,3,[4,5,6],[7]]

console.log(sh[4][0]);

// homogenious 
// hetrogenious
// flexible

// array manipulation 

// array concatination method / merge method

// array higher order metho

// convert



