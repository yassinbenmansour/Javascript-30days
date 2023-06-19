const donnes = {
        consoles: [
          { 'ref': 'Nintendo Switch Oled', 'prix': 4500, 'Manette': 2, 'Image': 'images/img1.jpg' },
          { 'ref': 'PlayStation', 'prix': 8000, 'Manette': 4, 'Image': 'images/img2.jpg' },
          { 'ref': 'XBOX SERIES 512G', 'prix': 4600, 'Manettes': 2, 'Image': 'images/img3.png' },
          { 'ref': 'PLAYSTATION P5A 1TO PRO', 'prix': 5300, 'Manettes': 1, 'Image': 'images/img4.png' }
        ]
      };
      
      function valide(console, quantite) {
        if (console.value !== "Selectionner une console" && Number(quantite.value) > 0 && Number(quantite.value <= 20)) {
          return true;
        } else {
          return false;
        }
      }
      
      function remplirConsole(dropDownList) {
        const opt1 = document.createElement("option");
        opt1.value = "Selectionner une console";
        opt1.textContent = "Selectionner une console";
        dropDownList.appendChild(opt1);
      
        donnes.consoles.forEach(function (consol) {
          const opts = document.createElement("option");
          opts.value = consol.ref;
          opts.textContent = consol.ref;
          dropDownList.appendChild(opts);
        })
      }
      
      remplirConsole(document.getElementById("consoles"));
      
      const cs = document.getElementById("consoles");
      const panier = document.getElementById("Panier");
      const q = document.getElementById("quantite");
      
      const addToCart = document.getElementById("addToCart");
      const prixHT = document.getElementById("prixHT");
      const prixTTC = document.getElementById("prixTTC");
      
      function addConsoleToCart(cons, table) {
        if (valide(cs, q)) {     
                donnes.consoles.forEach(function(c){
                       if(c.ref == cs.options[cs.selectedIndex].text){
                        const newRow=panier.insertRow(-1);
                        const ref=newRow.insertCell(0);
                         const prix=newRow.insertCell(1);
                              const quantite=newRow.insertCell(2);
                               const image=newRow.insertCell(3);
                                const supprimer=newRow.insertCell(4);
                                ref.textContent=c.ref;
                                prix.textContent=c.prix;
                                quantite.textContent=q.value;
                                image.textContent=c.Image;
                                supprimer.innerHTML=`<input type=button value=supprimer onclick=deleteConsoleFromCart(this) />`    
                      panier.appendChild(newRow);
                       }
                });
                prixHT.textContent= calculerPrixHT();
                prixTTC.textContent=calculerPrixTTC();
              console.log(  jsonSerializer());
        } else {
          alert("Valider tous les champs SVP");
        }
      }
      
      addToCart.addEventListener('click', function () {
        addConsoleToCart(cs, panier);
      });
      


      function deleteConsoleFromCart(button){
        const row=button.parentNode.parentNode;
          row.parentNode.removeChild(row);
    prixHT.textContent= calculerPrixHT();
    prixTTC.textContent= calculerPrixTTC();
   }