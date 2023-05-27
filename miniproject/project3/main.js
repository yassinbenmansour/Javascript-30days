var addButton = document.getElementById("idAjouter");
addButton.addEventListener("click", ajouterFormulaire);

function ajouterFormulaire() {
    var form = document.createElement("form");

    for (var i = 0; i < 5; i++) {
        var input = document.createElement("input");
        input.type = "text";
        var br = document.createElement("br");
        form.appendChild(input);
        form.appendChild(br);
    }

    var submitButton1 = document.createElement("input");
    submitButton1.type = "submit";
    submitButton1.value = "Ajouter";
    submitButton1.addEventListener("click", function(e) {
        e.preventDefault();
        ajouterDansTable(form);
        form.reset();
    });
    form.appendChild(submitButton1);

    var submitButton2 = document.createElement("input");
    submitButton2.type = "reset";
    submitButton2.value = "annuler";
    form.appendChild(submitButton2);

    document.body.insertBefore(form, document.getElementById("idtable"));
}

function ajouterDansTable(form) {
    var table = document.getElementById("idtable");
    var row = document.createElement("tr");

    for (var i = 0; i < 5; i++) {
        var cell = document.createElement("td");
        cell.textContent = form.elements[i].value;
        row.appendChild(cell);
    }

    table.appendChild(row);
}
