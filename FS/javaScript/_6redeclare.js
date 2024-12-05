//1.Redeclare variable in different blocks==the variable declare using "let" can be "redeclare" inside other blocks.
let x=77;
{
    let x=23;
    console.log("1.",x);
}
console.log("  ",x);

//2.we cannot redeclare the variable using "let" keyword inside the "same blocks".

//3.the behaviour of moving the declare on top of script is known as "hoisting".
x=12;
console.log("3.",x);
// let x; // give error using this

//4.VAR :declare variable with function scope of globaly
var test1=12;
    test2=14;
    test3=20;
function fun()
{
    console.log("4.",test1,test2,test3);
}
fun();

//5.Var test
//we didi not get any error when we declaring many "var" variable ,if we didi the same with the let keyword an error will bhe thrown.
var test=12;
var test=100;
console.log("4.",test);    //give an output 100


// let test=12;
// let test=100;
// console.log("5.",test);     //give error


var test=12;
function fun()
{
    var test=100;
    console.log("6.",test);
}
fun();
console.log("  ",test);