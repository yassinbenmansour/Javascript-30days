const voiture = {
        marque : "tesla",
        model : "model 3",
        couleur : "rouge",
        prix : 200000,
        stock : 300 ,
        stockverification : function (){
                if(this.stock > 0){
                        return "disponible";
                }else{
                        return "repture du stock"
                }
        }
}


for(const i in voiture){
        console.log(i);
}

console.log(voiture.marque)
console.log(voiture.model)
console.log(voiture.couleur)
console.log(voiture.prix)
console.log(voiture.stock)

console.log(voiture.stockverification())

