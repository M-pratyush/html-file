/* Write a function which take a string and return numbers of word in it
Example: Js is very easy --input
output--4 
*/
function fun1(str)
{
    console.log(str.split(" ").length)
}
fun1("Js is very easy")

//Write a function which return next values every time awe call it.
function nextValue(num)
{
    return ++num;
}
var x =nextValue(10)
console.log(x)

// you can keep one function in another function is called..
// Nested functions.
function x2 ()
{
    var a=20;
    function y ()
    {
        a++;
        console.log(a)
    }
    return(y)
}
var result = x2()
console.log(result) // y whole function
result()
result()
result()
//Closures -- inner function can remember outer functions values