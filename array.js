console.log('\n\nChecking If an Object Is an Array');
console.log('==============================\n\n');

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

console.log(isArray([]));
console.log(isArray({}));

console.log('\n\nIterating Over All the Elements in an Array');
console.log('==============================\n\n');
var arr = ['a', 'b', 'c'];
arr.forEach(function (element, index) {
  console.log('Index ' + index + ': ' + element);
});

console.log('\n\nChecking If Two Arrays Are Equal');
console.log('==============================\n\n');
function arraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysEqual([1, 2, 3], [3, 2, 1]));

console.log('\n\nBreaking Down an Array into Separate Variables');
console.log('==============================\n\n');
var arr = ['Monsur', 'Sarkar', 30];
var [firstName, lastName, age] = arr;
console.log(firstName);
console.log(lastName);
console.log(age);

console.log('\n\nPassing an Array to a Function That Expects a List of Values');
console.log('==============================\n\n');
function sum(a, b, c) {
  return a + b + c;
}

var arr = [1, 2, 3];
console.log(sum(...arr));

console.log('\n\nCloning an Array');
console.log('==============================\n\n');
var originalArray = [1, 2, 3];
var clonedArray = originalArray.slice();
console.log(clonedArray);

console.log('\n\nMerging Two Arrays');
console.log('==============================\n\n');
var arr1 = [1, 2];
var arr2 = [3, 4];
var mergedArray = arr1.concat(arr2);
console.log(mergedArray);

console.log('\n\nCopying a Portion of an Array by Position');
console.log('==============================\n\n');
var array = ['a', 'b', 'c', 'd', 'e'];
var copiedPortion = array.slice(1, 3);
console.log(copiedPortion);

console.log('\n\nExtracting Array Items That Meet Specific Criteria');
console.log('==============================\n\n');
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);

console.log('\n\nEmptying an Array');
console.log('==============================\n\n');
var array = [1, 2, 3];
array.length = 0;
console.log(array);

console.log('\n\nRemoving Duplicate Values');
console.log('==============================\n\n');
var array = [1, 2, 2, 3, 3, 4, 5, 5];
var uniqueArray = Array.from(new Set(array));
console.log(uniqueArray);

console.log('\n\nFlattening a Two-Dimensional Array');
console.log('==============================\n\n');
var twoDimArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
var flattenedArray = [].concat(...twoDimArray);
console.log(flattenedArray);

console.log('\n\nSearching Through an Array for Exact Matches');
console.log('==============================\n\n');
var array = [1, 2, 3, 4, 5];
var index = array.indexOf(3);
console.log(index);

console.log('\n\nSearching for Items That Meet Specific Criteria');
console.log('=============================================\n\n');
var array = [10, 20, 30, 40, 50];
var index = array.findIndex(function (num) {
  return num > 25;
});
console.log(index);

console.log('\n\nRemoving or Replacing Array Elements');
console.log('==============================\n\n');
var array = [1, 2, 3, 4, 5];
array.splice(2, 1);
console.log(array);

console.log('\n\nSorting an Array of Objects by a Property Value');
console.log('==============================\n\n');
var array = [
  { name: 'Monsur', age: 30 },
  { name: 'Basher', age: 25 },
  { name: 'Saroar', age: 35 },
];
array.sort((a, b) => a.age - b.age);
console.log(array);

console.log('\n\nTransforming Every Element of an Array');
console.log('==============================\n\n');
var numbers = [1, 2, 3];
var doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

console.log('\n\nCombining an Array’s Values in a Single Calculation');
console.log('==============================\n\n');
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

console.log('\n\nValidating Array Contents');
console.log('==============================\n\n');
var numbers = [1, 2, 3, 4, 5];
var allPositive = numbers.every(num => num > 0);
console.log(allPositive);

console.log('\n\nCreating a Collection of Nonduplicated Values');
console.log('==============================\n\n');
var array = [1, 2, 2, 3, 3, 4, 5, 5];
var uniqueArray = Array.from(new Set(array));
console.log(uniqueArray);

console.log('\n\n Creating a Key-Indexed Collection of Items');
console.log('==============================\n\n');
var array = [
  { id: 1, name: 'Monsur' },
  { id: 2, name: 'Basher' },
  { id: 3, name: 'Saroar' },
];
var indexedCollection = array.reduce((acc, obj) => {
  acc[obj.id] = obj;
  return acc;
}, {});
console.log(indexedCollection[2]);
