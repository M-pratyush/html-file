//control statements or decision making statements are used to make control flow goes based on condition.
var num=25;
if (num%2 == 0)
{
    console.log(`${num} is even`)
}
else
{
    console.log(`${num} is odd`)
}

//Waf which accepts age as parameter return true if he is eligible to vote else false.

function checkEleigibility(age)
{
    if (age >= 18)
    {
        return true
    }
    else{
        return false
    }
}
console.log(checkEleigibility(19))

//Waf check number is positive negative or zero, using if else-if ladder.
function checkNum(num)
{
    if (num>0)
        return "positive"

    else if (num<0)
        return "negative"

    else
    return "zero"
}
console.log("number is "+checkNum(-2))
console.log("number is "+checkNum(2))

// check large value or small value

check(4,8,6)

function check(a,b,c)
{
    console.log("largest value "+((a>b)?((a>c)?a:c):(b>c)?b:c))
    console.log("smallest value "+((a<b)?((a<c)?a:c):(b<c)?b:c))
}

//Waf which welcomes user based on there type using swith-case
//Users--techer,admin,student,staff

function welcome(usertype)
{
    switch(usertype){
        
        case "teacher":
            console.log("Hello"+usertype)
            break
        case "student":
            console.log("hello"+usertype)
            break
        case "admin":
            console.log("hello"+usertype)
            break
        case "staff":
            console.log("hello"+usertype)
            break
        default:
            console.log("hello strange")
    }
}
welcome("teacher")
welcome("pratyush")


//itēartion statements or loops//

//Two types of entry loops are exit in loop:
//      1. while/for -check the condition starting onwards
//      2. doWhile -it check the condition an ending. 

//Any loops contains three things --initialization,condition,updation

var k=25;
while (k<=30)
{
    console.log(k)
    k++;
}

//Using while-loop print even number number below 25 to 0  in reverse order.

//Method-1
var number = 24; 
while (number >= 0) {
  console.log(number);
  number -= 2;
}

//Method-2
var k=25;
while (k>=0)
{
    if (k%2==0)
        console.log(k)
    k--;
}

//TIJD--->This Is Js Demo
const str = "This Is Js Demo";
// Split the string into words
const words = str.split(" ");
// Map through each word and take the first character, then join them
const initials = words.map(word => word[0]).join("");
console.log(initials);

// using function
function getInitials(inputStr) {
    // Split into word
    const words = inputStr.split(" ");
    // Extract the first letter of each word and join them
    const initials = words.map(word => word[0]).join("");
    return initials;
  }
  const str2 = "This Is Js Demo";
  const result = getInitials(str2);
  console.log(result);

// method-2

function display(str)
{
    var test=str.split(" ")
    var str2=""
    for(var i=0; i < test.length; i++){
        str2+=test[i].charAt(0)
    }
    console.log(str2)
    return str2;
}
display("Js Is Very Easy")


// palindrome number program using java script.
function isPalindromeNumber(number) {
    // Convert the number to a string
    const str = number.toString();
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');  
    // Check if the original string is the same as the reversed string
    return str === reversedStr;
  }
  const number = 121;
  if (isPalindromeNumber(number)) {
    console.log(`${number} is a palindrome.`);
  } else {
    console.log(`${number} is not a palindrome.`);
  }
  