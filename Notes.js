//console.log()  -->> printing statement
// console.log(10)
// console.log("hello world")



//How to write js code

// syntax: 
// variable_type variable_name = value
//console.log(variable_name)

// var sugarbox = "sugar" // this is initialization
// console.log(sugarbox); // this is printing statement


//variable ? => data storage location

// types

//var --->>> 

// var a = 10
// var a = 5
// console.log(a);
//when same variable type and name with different values are given, latest value will be printed --->> its called redeclare

// var a =10
//     a=5
// console.log(a);
//var can also reassign -->> even if there is no variable type for the latest statement, it'll get printed


//let--->>>

// let b = 10
// let b = 5
// console.log(b);
//let can't redeclare

// let b = 10
// b = 5
// console.log(b)
//let can reassign

//const--->>>

// const c = 10
// const c = 5
// console.log(c);
// it cant redeclare

// const c = 10
// c = 5
// console.log(c);
// it cant reassign



// function add (x,y){
// console.log(x+y);
// }
// add(10,10)

// return :

//  function box3(y){
//     return y
//  }
// console.log(box3("choclate"));


//function expression:

// var bigbox = function smallbox() { //function variable name(small box) is not necessary --->>> anonymous function
//     console.log("toys");

// }
// bigbox()


//Immediate Invoke Function Expression [IIFE]
//no variable name is needed. it should be run separately or when selected.
// (function (x) {
//     console.log(x);
        
// })(10)

// var store = (function (x) { //if a variable is given it could be called anywhere.
//     console.log(x);
        
// })(10) 

//Arrow Function / Lambda Function --->>> shorthand syntax
//syntax:   ()=>{}

//     var arr = ()=>{console.log("im arrow function");
//     }
// arr()

//square function with arrow function

// var sq = (a)=>{console.log(a*a);
// }
// sq(2)

// var sq2 = (a)=>{console.log(a*a);
// }
// sq2(5)

//Operators

// Arithmatic Operators -->> 
// +add,-sub,*mul,/div[quotient],%modulus[remiander],**exponent[power of],++increment[],--decrement

// var a = 2 
// var b = 5
// console.log(a+b);

// var num = 10
// num++
// console.log(num);



// Assignment Operators

// var an = 10
// an += 5
// console.log(an);




// Logical Operators

        // && => and
       // || => or
      // ! => not

      // ! => not
    //   var a = 10
    //   var b = 5
    //   console.log(a != b);
      


// Comparison Operators

// <lessthan
// >greaterthan
// <=lessthan or equal to
// >= greaterthan or equal to

// var a = 10
// var b = 30
// console.log(a>b);

// Equality Operators
//== double equals --->>> checks if the value is same

// var a = 10
// var b = '10'
// console.log(a==b);


// === triple equals --->>> checks if the value and the variable name are same.

// var a = 10
// var b = '10'
// console.log(a===b);



// Ternary Operators
//Syntax --->>> (condition) ? "statement_true" : "statement_false"

// var age = 10
// var limit = (age >= 18) ? "he is eligible to vote" : "he is not eligible to vote"
// console.log(limit);

// && and operator

// var age = 50
// var limit = (age >= 18 && age <=70) ? "he is eligible to vote" : "he is not eligible to vote"
// console.log(limit);


// || or operator

// var age = 100
// var limit = (age >= 18 || age <= 70) ? "he is eligible to vote" : "he is not eligible to vote"
// console.log(limit);


//LOOP:  program will get executed untill the condition is met
// --->>> Conditional Loop & Infinite Loop

// //Types of Loop

// ---forloop

//syntax: --->>> for(initialization; condition; iteration[increment++ , decrement --]){ code }


// for (var i = 5 ; i>0 ; i--){
//     console.log(i);
    
// }

//steps
//step1 -> i -0 -> 0<5[true] => print : 0 =>0++ => 0+1 = 1
//step2->i=1-> 1<5[true] m>print : 1 -> 1++-> 1+1 - 2
//step 3 -> i -2 => 2<5[true] => print : 2 => 24+=> 2+1 " 3
//step 4 -> i = 3 => 3<5[true] => print : 3 => 3++ -> 3+1 = 4
//step 5 -> i = 4 -> 4<5[true] => print : 4 => 4++ => 4+1=5
//step6 -> i = 5 => 5<5[false] // loop will stop



//Loop with String

// var str = "vivek"
// for (var i = 0 ; i<str.length ; i++){
//     console.log(str[i]);
// }
// var str = "vivek"
// for (var i = str.length-1 ; i>=0 ; i--){
//     console.log(str[i]);
// }   

// var str = "vivek"

//     console.log(str[4],str[3],str[2],str[1],str[0]);
// //   

//task --->>> yppah

// var str = "happy"
// var store = ""
// for (let i = str.length-1 ; i>=0 ; i--){
//   store+= str[i]
// }
// console.log(store);


// var str = "happy"
// var store = ""
// for (let i = str.length-1 ; i>=0 ; i--){
//   store+= str[i]
// console.log(store);

// }



// ---while loop --->>> entry level conditional checking

// let count = 0 //initialization
// while (count < 5){ //condition
//   console.log(count); //printing statement
// count++ //iteration
// }

//task :

// 0 to 10 ++ = 55 



var int = 0

for (i = 0 ; i<=10 ; i++){
  int=int+i

  console.log(int);
}





// ---do-while loop




//new update
//2nd update
