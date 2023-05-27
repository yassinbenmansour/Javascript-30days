function aff (n){
        console.log(n)
                document.write(n)

}


function fullname (nom , prenom , callback){
        let fullN = nom.concat(prenom);
        callback(fullN)
}
fullname("yassine " , "benmansour" , aff);