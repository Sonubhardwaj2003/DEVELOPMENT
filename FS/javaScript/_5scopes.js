// Scpe variable
//1.block scope
{
    let num=10;
    console.log("1.",num);
}

// {
//     let num=10;
//     console.log(num);
// }
// console.log(num)         //gives reference error  ,outside the scope variable is not accessed



//2.function scope
function fun(){
    let num=10;
    console.log("2.",num);
}
fun();

// function fun(){
//     let num=10;
//     console.log(num);
// }
// fun();
// console.log(num);               //gives reference error  ,outside the scope variable is not accessed


//3.Global scope 
let num=10;
console.log("3.",num);
function fun(){
    let num=10;
    console.log("  ",num);
}
fun();
