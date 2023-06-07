
var jsonData = {
        nom : "benmansour",
        prenom : "yassine",
        age : 25       
};

var data = JSON.stringify(jsonData);
console.log(data);
document.write(data);


// var jsonData = '{"name":"John", "age":30, "city":"New York"}';
// var data = JSON.parse(jsonData);
// document.getElementById("p").innerHTML = data.city;
