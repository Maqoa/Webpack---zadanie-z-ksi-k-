'use strict';

function dodaj() {
    var tytul = document.getElementById("tytul").value;
    var autor = document.getElementById("autor").value;
    var kategoria = document.getElementById("kategoria").value;
    var priorytet = document.getElementById("priorytet").value;


    var nowywiersz = document.createElement("tr");

    function addButton() {
        var btn = document.createElement("BUTTON");
        btn.innerHTML = "usun";
        dodanie.appendChild(btn);
            }
    nowywiersz.innerHTML = "<td>" + tytul + "</td><td>" + autor + "</td><td>" + kategoria + "</td><td>" + priorytet + "</td>" + "<td>" + addButton + "</td>";
    var dodanie = document.getElementById('bibliotekaksiazek');
    dodanie.appendChild(nowywiersz);

}

