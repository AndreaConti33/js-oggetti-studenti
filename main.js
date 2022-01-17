let studenti = [
{
    nome: "Mario",
    cognome: "Divino",
    età: 92
},
{
    nome: "Giordano",
    cognome: "Loti",
    età: 29
},
{
    nome: "Francesco",
    cognome: "Zappini",
    età: 58
},
{
    nome: "Alessandro",
    cognome: "Testoli",
    età: 13
},
{
    nome: "Giansereno",
    cognome: "Vaccinini",
    età: 26
},
];

for(let i = 0; i < studenti.length; i++){
    console.log(studenti[i].nome);
    console.log(studenti[i].cognome);
}

console.log("Seconda parte");

let nomeUtente =  prompt("Inserire il nome dello studente: ");
let cognomeUtente = prompt("Inserire il cognome dell'utente: ");
let etàUtente = prompt("Inserire l'età dell'utente");

studenti.push({
nome: nomeUtente,
cognome: cognomeUtente,
età: etàUtente
});

for(let i = 0; i < studenti.length; i++){
    console.log(studenti[i].nome);
    console.log(studenti[i].cognome);
    console.log(studenti[i].età);
}