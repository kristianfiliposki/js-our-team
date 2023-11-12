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
    
    
    
    
    
    
    
    
    
    let images=[];
    /* fai un ciclo */
    /* l'elemento del ciclo sara il n.delle foto */
    /* poni che aumentando il n. delle foto,aumenti nel medesimo modo anche il n. che rappresenta l'utente. */
    
    /* function GenCard (immagine){
        immagine=document.createElement("img");
    immagine.classList.add("view");
    images.push(immagine);
    container.append(immagine);
    immagine.src = "./img 4/wayne-barnett-founder-ceo.jpg";
} */

/* 
let img2.src = "./img 4/angela-caroll-chief-editor.jpg";
let img3.src = "./img 4/walter-gordon-office-manager.jpg";
let img4.src = "./img 4/angela-lopez-social-media-manager.jpg";
let img5.src = "./img 4/scott-estrada-developer.jpg";
let img6.src = "./img 4/barbara-ramos-graphic-designer.jpg"; */



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
    
    