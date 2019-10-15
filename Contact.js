class Contact {
    constructor(nom, prenom){
        this.nom=nom;
        this.prenom=prenom;
    }

    listerContact(){
        contacts.forEach(function(contact){
            console.log(`Nom: ${contact.nom} Prenom: ${contact.prenom} `);
        });
    }

    ajouterContact(){
       const contact = new Contact(prompt("Entrez le nom du nouveau contact"),prompt("Entrez le prenom du nouveau contact"));
       contacts.push(contact); 
       console.log(" le nouveau contact a été ajouté ");
    }
}

function listChoix()
{
  var table = `
       * Votre MENU *

  1 : Lister les contacts
  2 : Ajouter un contact
  0 : Quitter
  
  `;
  console.log(table);
}
console.log("Bienvenue dans le gestionnaire des contacts !");

const ghali = new Contact("Laraki","El Ghali");
const contacte = new Contact();

let contacts = [ghali];
let choix;

while (choix !== "0"){
    listChoix();
    choix = prompt(" Choisissez une option : ");

    switch(choix) {
      case "1":
        console.log(" Voici la liste de tous vos contacts : ");
        contacte.listerContact();  
      break;

      case "2":
        contacte.ajouterContact();
      break;

      default:
        console.log(" Mauvais choix.");
      break;
}
}
if (choix === "0"){
  console.log("Au revoir !");
}

