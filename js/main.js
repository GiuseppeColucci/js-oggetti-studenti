/**
 * Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.
 * 
 * 
    Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
    Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
 */
//prima parte
var html=document.getElementById('studente-1')
var scolare=[{
    'nome':'Marco',
    'congmome':'Martinez',
    'eta': 34,
    
}];

for(var key =0; key< scolare.length; key++)  {
    var studente=scolare[key]
    // console.log(studente.congmome)
    html.innerHTML=studente.nome +' '+ studente.congmome +' '+ studente.eta;
    console.log(studente);
 
};

   
 //seconda parte
 
 var classeStudenti=[
     {'nome':'Paolo','cognome':'Papero','età':45},
     {'nome':'Pippa','cognome':'Piddelton','età':65},

 ];



 for(var k =0; k< classeStudenti.length; k++)  {
    var alunno=classeStudenti[k]
    // console.log(studente.congmome)
    alert(alunno.nome +' '+ alunno.cognome );
    
 
};

var nuovoStudenteInserito={}

nuovoStudenteInserito.nome=prompt('inserire il nome del nuovo studente');
nuovoStudenteInserito.cognome=prompt('inserire il cognome del nuovo studente');
nuovoStudenteInserito.eta=prompt("inserire l'età del nuovo studente");


classeStudenti.push(nuovoStudenteInserito)
console.log(classeStudenti)
