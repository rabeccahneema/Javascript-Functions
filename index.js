// function that takes an array and returns a new array
function getStringLength(string){
     return string.map(str => str.length);
} 
const string= ["aplle", "banana"];
console.log(getStringLength(string));



//filter even numbers
function filterEvenNos(num){
    return num.filter(num => num%2===0);
}
const evenNum=[4,3,6,19,16]
console.log(filterEvenNos(evenNum))

//to get top students
function getTopStudents(students){
    return students.filter(student => student.score > 75)
.map(student => student.name);
}
const students =[
    {name:"Becky", score: 80},
    {name:"Neema" , score: 78},
    {name:"Kip", score: 45 }]
    console.log(getTopStudents( students))

//return an array of squared numbers
function squaredNumbers(arr){
    return arr.map(num => num*num);
}
const squaredNum=[14,2,4,37,8]
console.log(squaredNumbers(squaredNum));

//string elements converted to uppercase
function filterUppercaseStrings(fruits){
    return fruits.filter(item => typeof item ==='string')
    .map(str=> str.toUpperCase());
}
const fruits=["orange","mango"]
console.log(filterUppercaseStrings(fruits));


