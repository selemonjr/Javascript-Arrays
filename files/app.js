// Arrays => An array in Javascript is an Object that can store multiple values..
// In arrays we start counting from 0..
// Examples of Array methods..

// 1: concat() => // Used to merge two or more arrays together

const vegetables = ["spinach","cabbage","kales"];
const fruits = ["apple","banana","orange"];
const food = vegetables.concat(fruits);
console.log(food) // spinach cabbage kales apple banana orange

// OR we can use the spread operator

const vegetables = ["spinach","cabbage","kales"];
const fruits = ["apple","banana","orange"];
const food = [...vegetables,...fruits];
console.log(food) // spinach cabbage kales apple banana orange

// 2: every() returns a boolean value if the elements in the array pass the test implemented by the function..

const isBelowTwenty = (value) => value < 20;
const array = [1,5,10,5];
console.log(array.every(isBelowTwenty)) // true


// 3: filter() => Creates a new array with all the elements that pass a test provided by the function..

const ages = [20,30,40,50,60];
const filter = ages.filter((Isbelowforty) => Isbelowforty <= 40);
console.log(filter) // 20,30

// 4: map() => Creates a new array with the populated elements after manipulating them..

const ages = [20,30,40,50,60];
const map = ages.map((squared) => squared * 2);
console.log(map) // 40,60,80,100,120

// 5: forEach() => Returns each element in a provided array..
const ages = [20,30,40,50,60];
const forEach = ages.forEach((age) => console.log(age)); // 20,30,40,50,60

// 6: include() => Returns a boolean value on whether a certain value is present in a given array..
const ages = [20,30,40,50,60];
const include = ages.includes(20);
console.log(include) // true

// 7: indexOf() => Returns the index of a certain element in a given array..
const ages = [20,30,40,50,60];
const indexOf = ages.indexOf(20);
console.log(indexOf) // 0

// 8: pop() => Used to remove the last element in an array..
const ages = [20,30,40,50,60];
const pop = ages.pop();
console.log(pop) // 60 has beem removed

/// 9: push() => Used to add an element to the end of the array..
const ages = [20,30,40,50,60];
ages.push(45)
console.log(ages) // 20,30,40,50,60,45

// 10: shift() => Used to remove an element at the beginning of an array..
const ages = [20,30,40,50,60];
ages.shift();
console.log(ages) // 30, 40, 50, 60    => 20 has been removed from the array

// 11:unshift() => Used to add an element to the beginning of an array..
const ages = [20,30, 40, 50, 60]
ages.unshift(70);
console.log(ages) //70,30, 40, 50, 60

// 12: toString() => Returns an element of integers to strings..
const ages = [30, 40, 50, 60];
const stringed = ages.toString(ages);
console.log(stringed) // "30, 40, 50, 60"

// 13: sort() => Returns an array sorted in a hierarchy manners (from the largest to the smallest or viceversa);
const ages = [30, 40, 50, 60, 10];
const sorted = ages.sort();
console.log(sorted) //  10, 30, 40, 50, 60

// 14: reduce() => Returns the sum of the elements inside an array..
const ages = [30, 40, 50, 60, 10];
const total = ages.reduce((a,b) => a + b , 0);
console.log(total) // 190

// 15: slice() => Returns the selected elements inside an array..
const ages = [20,30,40,60,80];
const selected = ages.slice(2);
console.log(selected) // 40,60,80 => returns the elements that are in the index of 2 or after the index of 2

const ages = [30, 40, 50, 60, 10];
const selected = ages.splice(2,4); // On the left side there is "2" we starting counting from 0 as we head to the right but on the right side the is "4" in which we starting counting from 1 as we head to the right..
console.log(selected) // 50,60,10

// 16: splice() => Splice is used in adding and removing of elements thus creating a new array..
const ages = [30, 40, 50, 60, 10];
const spliced = ages.splice(0,1,"Removed"); // We are removing the element at the index of 0 which is (30) and we are also removing 1 element (which is also 30) and then adding "Removed"
console.log(ages) // ["Removed",40,50,60,10]

const ages = [30, 40, 50, 60, 10];
const spliced = ages.splice(0,2,"Removed"); // We are removing the element at the index of 0 which is (30) and we are also removing 2 elements (which are 30 and 40 ) and then adding "Removed"
console.log(ages) // ["Removed",50,60,10]

// General Example//
const ages = [20,30,50,40,70,80,90,100].map((age) => age - 10).filter((age) => age >= 30).sort().reduce((a ,b) => a + b, 0)
console.log(ages) // 370


