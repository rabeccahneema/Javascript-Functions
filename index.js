// function that takes an array and returns a new array
function getStringLength(arr){
    const stringLength = arr.map(str =>str.Length);
    return stringLength;
}


//filter even numbers
function filterEvenNos(arr){
    return arr.filter(num => num%2===0);
}
console.log(filterEvenNos())

//to get top students
function getTopStudents(students){
    return students.filter(student => student.score > 75)
.map(student => student.name);
}

//return an array of squared numbers
function squaredNumbers(arr){
    return arr.map(num => num*num);
}

//string elements converted to uppercase
function filterUppercaseStrings(arr){
    return arr.filter(item => typeof item ==='string')
    .map(str=> str.toUpperCase());
}

