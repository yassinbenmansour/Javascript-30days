for(var i = 0; i<11; i++){
 document.write('yassine <br>')      
}


let list = ["test1","test2","test3"]

for(let item of list){
        console.log(item)
}

for(let x in list){
        console.log(x)
}


const person = { fname :" Hassan" , lname : "FILALI" , age :  25}

for(p in person){
        document.write(p + ": " + person[p]+ "<br>")
}