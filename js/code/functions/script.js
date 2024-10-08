// /* Write a function which take a string and return numbers of word in it
// Example: Js is very easy --input
// output--4 
// */
// function fun1(str)
// {
//     console.log(str.split(" ").length)
// }
// fun1("Js is very easy")


// //Write a function which return next values every time awe call it.
// function nextValue(num)
// {
//     return ++num;
// }
// var x =nextValue(10)
// console.log(x)

// // you can keep one function in another function is called..
// // Nested functions.
// function x2 ()
// {
//     var a=20;
//     function y ()
//     {
//         a++;
//         console.log(a)
//     }
//     return(y)
// }
// var result = x2()
// console.log(result) // y whole function
// result()
// result()
// result()
// //Closures -- inner function can remember outer functions values


// //callback functions
// //callback is function is a function within parameter of another function
// //NOTE: function always contains Local scope
// function mad()
// {
//     console.log("i am mad")
// }

// function bad()
// {
//     console.log("i am bad")
// }

// function displayView(a,b)
// {
//     a()
//     b()
// }
// displayView(mad,bad )

function check_vowels(str){
    let count=0;
    for (let char of str){
        if (char == "a" ||
            char == "e" ||
            char == "i" ||
            char == "o" ||
            char == "u" ){
                count++
            }
    }
    return count;
}
let result=check_vowels("pratyush")
console.log(result) 


// // same task using arrow function
// let  fun=(str)=>{
//     count=0;
//     for (let char of str){
//         if (char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u" ){
//                 count++
//             }
//     }
//     console.log (count)
// }



// let arr=[1,2,3,4,5];

// arr.forEach(function sqrtValue(val))
// {
//     console.log(val*val)
// }