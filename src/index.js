
class biblioteka {
    constructor (autor, tytul, kategoria, priorytet){
     
        this.tytul = tytul;
         this.autor = autor;
     this.kategoria = kategoria;
       this.priorytet = priorytet;
    }
    wyswietlInfo(){
        console.log("tytul: " + this.tytul + "autor: "+ this.autor +  "kategoria: " + this.kategoria + "priorytet: " + this.priorytet);
    }
}
var ksiazka = ['tytul', 'autor', 'kategoria', 'priorytet'];
ksiazka[0] = document.getElementById("tytul").value;
ksiazka[1] = document.getElementById("autor").value;
ksiazka[2] = document.getElementById("kategoria").value;
ksiazka[3] = document.getElementById("priorytet").value;

console.log( ksiazka[0] + ' i ' + ksiazka[1] + ' i ' + ksiazka[2] + ' i ' + ksiazka[3] );
document.getElementById("send").onclick = ksiazka;


   //     var ksiazka = ['autor', 'tytul', 'kategoria', 'priorytet'];
   // }
  //  wyswietlInfo() {
 //       console.log("autor: " + this.autor + ",  " + "tytul: " + this.tytul + "kategoria: " + this.kategoria + ",  " + "priorytet: " + this.priorytet);
//    }
//}
//var tytulKs = document.getElementById("tytul").value;
//var autorKs = document.getElementById("autor").value;
//var autorKs = document.getElementById("kategoria").value;
//var priorytetKs = document.getElementById("priorytet").value;
//}
//document.getElementById("send").onclick = bibliotekaKS;