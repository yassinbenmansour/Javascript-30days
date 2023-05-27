function Tel (n , m , p ){
        this.nom = n;
        this.model = m;
        this.prix = p;
        this.verifiPrix = function (){
                if (this.prix > 500){
                        return "haut gamme";
                }else {
                        return "bas gamme";
                }
        }
}

var t1 = new Tel("iphone","2020","9000");
console.log(t1.nom);
console.log(t1.verifiPrix())
