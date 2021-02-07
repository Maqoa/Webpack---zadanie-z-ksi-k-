'use strict';
var id = 0;
var counter = 0;

function dodaj() {
    var tytul = document.getElementById("tytul").value;
    var autor = document.getElementById("autor").value;
    var kategoria = document.getElementById("kategoria").value;
    var priorytet = document.getElementById("priorytet").value;
    var nowywiersz = document.createElement("tr");
    nowywiersz.id = ++id;
    nowywiersz.innerHTML = "<td>" + tytul + "</td><td>" + autor + "</td><td>" + kategoria + "</td><td>" + priorytet + "</td>" + "<td>" + "<button onclick=deleteRow(" + id + ");>usuń</button>" + "</td>";
    var dodanie = document.getElementById('bibliotekaksiazek');
    dodanie.appendChild(nowywiersz);
    counter++;
    container.textContent = counter;
}

function deleteRow(id) {
    var myobj = document.getElementById(id);
    myobj.remove();
    counter--;
    container.textContent = counter;
}