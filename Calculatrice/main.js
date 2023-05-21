function add(){
        var nbr1 = parseInt(document.getElementById("nbr1").value)
        var nbr2 = parseInt(document.getElementById("nbr2").value)
        var result = nbr1 + nbr2 
        document.getElementById("result").innerHTML = "Result: " + result;
}

function sous(){
        var nbr1 = parseInt(document.getElementById("nbr1").value)
        var nbr2 = parseInt(document.getElementById("nbr2").value)
        var result = nbr1 - nbr2 
        document.getElementById("result").innerHTML = "Result: " + result;
}


function multi(){
        var nbr1 = parseInt(document.getElementById("nbr1").value)
        var nbr2 = parseInt(document.getElementById("nbr2").value)
        var result = nbr1 * nbr2 
        document.getElementById("result").innerHTML = "Result: " + result;
}


function div(){
        var nbr1 = parseInt(document.getElementById("nbr1").value)
        var nbr2 = parseInt(document.getElementById("nbr2").value)
        var result = nbr1 / nbr2 
        document.getElementById("result").innerHTML = "Result: " + result;
}
