const utenti=[
{
    nome:"Wayne ",
    cognome:"Barnett",
    professione:"Founder & CEO",
},
{
    nome:"Angela",
    cognome:"Caroll",
    professione:"Chief Editor",
},
{
    nome:"Walter",
    cognome:"Gordon",
    professione:"Office Manager",
},
{
    nome:"Angela ",
    cognome:"Lopez",
    professione:"Social Media Manager"
},
{
    nome:"Scott ",
    cognome:"Estrada",
    professione:"Developer"
},
{
    nome:"Barbara Ramos ",
    cognome:"Ramos",
    professione:"Graphic Designer",
}];





const container=document.getElementById("container");
for (let i = 0; i < utenti.length; i++) {
    const utente = utenti[i];
    const Fotdiv=document.createElement("div");
    container.append(Fotdiv)
    container.innerHTML+=
    (
        `il suo nome è:${utente.nome},
        il suo nome è:${utente.cognome},
        la sua professione è:${utente.professione}`
    )
   
}

