const person = [
        {
        firstName: "yassine",
        lastName: "benmansour",
        Age: 21,
        Gender: "Male",
        fullName: function () {
          return this.firstName + " " + this.lastName;
        }},
        {
                firstName: "sara",
                lastName: "benmansour",
                Age: 10,
                Gender: "female",
                fullName: function () {
                  return this.firstName + " " + this.lastName;
        }}
      ];

     function createTable(){
        var table = document.createElement("table");
        var row = document.createElement("tr");
  
        var T1 = document.createElement("th");
        T1.textContent = "Full name";
        row.appendChild(T1);
  
        var T2 = document.createElement("th");
        T2.textContent = "Age";
        row.appendChild(T2);
  
        var T3 = document.createElement("th");
        T3.textContent = "Gender";
        row.appendChild(T3);
  
        table.appendChild(row);
  
  
        for (var i = 0; i < person.length; i++) {
        var currentPerson = person[i] ;
  
        var row1 = document.createElement("tr");
  
        var i1 = document.createElement("td");
        i1.textContent = currentPerson.fullName();
        row1.appendChild(i1);
  
        var i2 = document.createElement("td");
        i2.textContent = currentPerson.Age;
        row1.appendChild(i2);
  
        var i3 = document.createElement("td");
        i3.textContent = currentPerson.Gender;
        row1.appendChild(i3);
  
  
        table.appendChild(row1);
        }

        document.body.appendChild(table);
     }


//      function handleKeyDown(event) {
//         if(event.key == "Enter"){
//                 document.write("hello world");
//         }
//       }

//       document.onkeydown = handleKeyDown;


var fruits = ["kiwi" , "frese" , "masstella" , "pomme"];


let text = "<ul>";
fruits.forEach(myFun)
text += "</ul>";

document.getElementById('u').innerHTML = text ;
function myFun(v){
        text += "<li>" + v + "</li>";
}

function add() {
        var input = document.getElementById("e").value;
        fruits.push(input);
        let text = "<ul>";
        fruits.forEach(myFun)
        text += "</ul>";

        document.getElementById('u').innerHTML = text ;
        function myFun(v){
                text += "<li>" + v + "</li>";
        }
}


