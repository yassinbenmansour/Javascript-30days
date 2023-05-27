let completed = true;
let getData = new Promise(function(resolve , reject){
        if(completed){
                resolve("donne recupere")
        }else{
                reject("Erreur donne non recupere")
        }
});