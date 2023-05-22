
         function car(nom , coleur ,annee){
            this.nom = nom 
            this.coleur = coleur
            this.annee = annee
            this.aff = function(){
                return nom + "--" + coleur + "--" + annee ; 
            }
        }
        var T = new Array();
        document.getElementById("ajt").onclick = function(){
            nom = document.getElementById('idnom').value
            coleur = document.getElementById('idcoleur').value
            annee = document.getElementById('idage').value
            T[T.length] = new car( nom,coleur,annee)
        }
        document.getElementById("afch").onclick = function(){
            document.getElementById("tb1").innerHTML = "";
            for(i=0; i<T.length; i++){
                document.getElementById("tb1").innerHTML += T[i].aff()+"<br>";
            }
        }
        document.getElementById("fnd").onclick = function(){
            nom = document.getElementById("idsearch").value
            for(i=0;i<T.length;i++){
                if(T[i].nom == nom){
                    document.getElementById("tb1").innerHTML = T[i].aff()+"<br>"     
                }
            }
        }
        document.getElementById("dlt").onclick = function(){
            nom = document.getElementById("idsearch").value
            for(i=0; i <T.length;i++){
                if(T[i].nom == nom){
                    if(i==0){
                        T.shift();
                    }else{
                        T.splice(i,i);
                    }
                }
            }
        }