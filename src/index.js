class biblioteka {
    constructor(autor, tytul, kategoria, priorytet) {
        this.tytul = tytul;
        this.autor = autor;
        this.kategoria = kategoria;
        this.priorytet = priorytet;
    }
}
var ksiazka = new biblioteka;
var ksiazka = ['tytul', 'autor', 'kategoria', 'priorytet'];
ksiazka[0] = document.getElementById("tytul").string;
ksiazka[1] = document.getElementById("autor").string;
ksiazka[2] = document.getElementById("kategoria").value;
ksiazka[3] = document.getElementById("priorytet").value;

console.log( ksiazka.join( " + " ) );  
document.getElementById("send").onclick = biblioteka;

