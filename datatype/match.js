let string = "ys ys ys ys yassine => ys"
let pattern = /ys/gi

console.log(string.match(pattern)) //array 5 = > ys ys ys ys ys 
console.log(string.match(pattern).length) //how many ys  => 5


