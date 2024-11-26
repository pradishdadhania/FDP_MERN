//Merging Array:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

//Spread Object
//copying object
const orginalObject = { a: 1, b: 2 };
const copiedObject = {...orginalObject }
console.log(copiedObject)
console.log(orginalObject === copiedObject)

//Merging object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedobject = {...obj1, ...obj2 };
console.log(mergedobject);

//Spread operator:expand elements of array or properties of objects
//rest operator:collect multiple elements into an array or object


//Rest operators in function parameters
function printNames(...names) {
    console.log(names);
}
printNames('pushpa', 'anusha', 'krishna', 'sushil');