
// var jsonData = '{"name":"John", "age":30, "car":null}'

//  var data = JSON.parse(jsonData);
// let text = "";
//  for(x in data){
//         text = text + data[x] + ',';
//  }
//  document.getElementById("p").innerHTML= text;



// var data = JSON.stringify(jsonData);
// console.log(data);
// document.write(data);


// var jsonData = '{"name":"John", "age":30, "city":"New York"}';
// var data = JSON.parse(jsonData);
// document.getElementById("p").innerHTML = data.city;

// Créer un élément HTML
var newElement = document.createElement('div');
newElement.textContent = 'Nouvel élément';

// Ajouter l'élément comme enfant d'un autre élément existant
var parentElement = document.getElementById('parent');
parentElement.appendChild(newElement);

// Remplacer un élément HTML par un autre
var oldElement = document.getElementById('old');
var replacementElement = document.createElement('span');
replacementElement.textContent = 'Nouvel élément de remplacement';
parentElement.replaceChild(replacementElement, oldElement);

// Supprimer un élément HTML
var elementToRemove = document.getElementById('remove');
parentElement.removeChild(elementToRemove);

// Ajouter un événement de clic à un élément sélectionné
var elementWithEvent = document.getElementById('clickable');
elementWithEvent.onclick = function() {
  // Code à exécuter lors du clic sur l'élément
  alert('Clic effectué !');
};


// Récupérer tout le contenu HTML d'un élément
var elementHTML = document.getElementById('myElement').innerHTML;

// Changer l'attribut d'un élément
var elementToChange = document.getElementById('myElement');
elementToChange.setAttribute('src', 'image.jpg');

// Changer le style d'un élément
var elementToStyle = document.getElementById('myElement');
elementToStyle.style.color = 'red';
elementToStyle.style.backgroundColor = 'yellow';

// Récupérer le contenu textuel d'un élément
var elementText = document.getElementById('myElement').textContent;

// Récupérer la liste des classes d'un élément
var elementClasses = document.getElementById('myElement').classList;
var classesArray = Array.from(elementClasses); // Conversion de la liste en tableau


// Écrire du texte dans un document HTML
document.write('Ceci est un exemple de texte ajouté au document.');
