'use strict';

function dodaj() {
    var tytul = document.getElementById("tytul").value;
    var autor = document.getElementById("autor").value;
    var kategoria = document.getElementById("kategoria").value;
    var priorytet = document.getElementById("priorytet").value;


    var nowywiersz = document.createElement("tr");

    
    nowywiersz.innerHTML = "<td>" + tytul + "</td><td>" + autor + "</td><td>" + kategoria + "</td><td>" + priorytet + "</td>" + "<td>" + "<button>" + "</td>";
    var dodanie = document.getElementById('bibliotekaksiazek');
    dodanie.appendChild(nowywiersz);

}

