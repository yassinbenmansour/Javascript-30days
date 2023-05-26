// split(): The split method splits a string at a specified place.
let string = '30 Days Of JavaScript'
console.log(string.split())     // ["30 Days Of JavaScript"]
console.log(string.split(' '))  // ["30", "Days", "Of", "JavaScript"]
let firstName = 'yassine'
console.log(firstName.split())  // ["yassine"]
console.log(firstName.split(''))  // ['y', 'a', 's', 's', 'i', 'n', 'e']
let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(',')) // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', '))   //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]