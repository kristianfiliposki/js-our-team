const utenti=[
    {
        nome:"Wayne ",
        cognome:"Barnett",
        professione:"Founder & CEO", 
        immagine:"./img /angela-caroll-chief-editor.jpg"   
    },
    {
        nome:"Angela",
        cognome:"Caroll",
        professione:"Chief Editor",
        immagine:"./img /angela-caroll-chief-editor.jpg"
    },
    {
        nome:"Walter",
        cognome:"Gordon",
        professione:"Office Manager",
        immagine:"./img /walter-gordon-office-manager.jpg"
    },
    {
        nome:"Angela ",
        cognome:"Lopez",
        professione:"Social Media Manager",
        immagine:"./img /angela-lopez-social-media-manager.jpg"
    },
    {
        nome:"Scott ",
        cognome:"Estrada",
        professione:"Developer",
        immagine:"./img /scott-estrada-developer.jpg"
    },
    {
        nome:"Barbara Ramos ",
        cognome:"Ramos",
        professione:"Graphic Designer",
        immagine:"./img /barbara-ramos-graphic-designer.jpg"
    
    }];
    
    
    
    
    
    
    
    let images=[];
    /* fai un ciclo */
    /* l'elemento del ciclo sara il n.delle foto */
    /* poni che aumentando il n. delle foto,aumenti nel medesimo modo anche il n. che rappresenta l'utente. */
    
    
    const container=document.getElementById("container");
    
    for (let i = 0; i < utenti.length; i++) {
        const utente = utenti[i];
        const Fotdiv=document.createElement("div");
        container.append(Fotdiv)
        
        container.innerHTML+=
        `<div class="box">
        <img src="${utente.immagine}">
        <div>il suo nome è:${utente.nome}</div>
        <div>il suo cognome è:${utente.cognome},</div>
        <div>la sua professione è:${utente.professione}</div>
        </div>`;
    }
    
    /* 
    let img2.src = "./img 4/angela-caroll-chief-editor.jpg";
    let img3.src = "./img 4/walter-gordon-office-manager.jpg";
    let img4.src = "./img 4/angela-lopez-social-media-manager.jpg";
    let img5.src = "./img 4/scott-estrada-developer.jpg";
    let img6.src = "./img 4/barbara-ramos-graphic-designer.jpg"; */
    
    
    
    