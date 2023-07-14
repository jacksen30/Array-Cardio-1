// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    
];
  
const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];
      
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const fifteen = inventors.filter(inventor => {
    if(inventor.year >= 1500 && inventor.year < 1600) {
         return true; //Means that we'll keep it
    }
});

console.table(fifteen);
/* console.log(fifteen); */


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const fullNames = inventors.map(inventor => {
    return `${inventor.first} ${inventor.last}`
});

console.table(fullNames);
/* console.log(fullNames); */


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

    /* Short Hand Using One line arrow function (implicit return) and a ternary operator */

const sortedByAge = inventors.sort((a , b) => a.year > b.year ?  1 : -1);

    /* Long Hand */ /*

const sortedByAge = inventors.sort(function(a, b) {
    if (a.year > b.year) {
        return 1;
    } else {
        return -1;
    }
});

*/

console.table(sortedByAge);
/* console.log(sortedByAge); */


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

/* Wes Bos Way

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0);
*/

/* More typical reduce variable naming, the 0 is setting the inital accumulator value */

const totalYears = inventors.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue.passed - currentValue.year)
}, 0);

console.log(totalYears);

  
// 5. Sort the inventors by years lived
    
    /* Custom sort with comparotor function */

/*
const sortByMostYearsLived = inventors.sort((a, b) => {
    if ((a.passed - a.year) > (b.passed - b.year)) {
        return -1;
    } else {
        return 1;
    }
})
*/

    /* Short Hand Using One line arrow function (implicit return) and a ternary operator - (Same result as above) */

const sortByMostYearsLived = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? -1 : 1 );

console.table(sortByMostYearsLived);
/* console.log(sortByMostYearsLived); */

  
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // Must be used in dev console on above website to work will throw an error if ran in this file

/*  
const category = document.querySelector('.mw-category');
    // Array.from below converts the returned NodeList into an array so that we can use the map array function on its data later
const links = Array.from(category.querySelectorAll('a'));

    //we use map to get the textContent of each link, we then filter it for names that include 'de'
const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));

console.log(de);
/* console.table(de); */

  
// 7. sort Exercise
// Sort the people alphabetically by last name
    // As the sort function will sort in place and change the people array order with the wes boss solution,
    // I instead made a shallow copy of the people array using the spread operator, this keeps the original people array in its original form.
    // I use object destructuring to create variables aLast, aFirst, bLast, bFirst to hold names once they have been split for comparison
    // The aLast and bLast variables is only used for comparison purposes, The function still returns the original string 'a' and 'b'

const sortedNames = [...people].sort((a, b) => {
    const [aLast, aFirst] = a.split(', ');
    const [bLast, bFirst] = b.split(', ');
    return aLast > bLast ? 1 : -1;
});

console.log(people);
console.log(sortedNames);
  
// 8. Reduce Exercise
// Sum up the instances of each of these
    
    // A quick explanation of my solution,
    // I use the reduce array method on the data array, the accumulator is set as an empty object at end on the reduce function ', {})' ,
    // If the required 'currentValue / item' key doesn't already exsist in the accumulator object we add it with a value of 0 to initalize it,
    // For each 'currentValue / item' in the original data array we incremeant the matching keys value in the accumulator by +1
    // We then return the accumulator object so that it is available to keep updating as we iterate through every item in the data Array 
    // In summary: Once the reduction process is complete, 
    // the dataTally variable holds the final result, which is an object that stores the count of each unique value in the data array.

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const dataTally = data.reduce(function(accumulator, currentValue) {
    
    if (!accumulator[currentValue]) {
        accumulator[currentValue] = 0;
    }

    accumulator[currentValue] ++;
    return accumulator;
}, {});

console.log(dataTally);
console.table(dataTally);



