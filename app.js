console.log(window);
console.log("coucou");
var prenom = prompt("Comment tu t'appelles ?");
var titre = document.getElementById("titre");
console.log(titre);
titre.innerText = "Bonjour " + prenom;
if(prenom == "Mariette"){
    alert("Comme moi !");
    titre.style.color = "#008000";
    }else{
    titre.style.color = "#FF0000";
    }