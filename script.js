// Met à jour le message affiché à l´adversaire à chaque nouvelle
// lettre saisie dans l´input ´Mon nom´
$("#moi").keyup(function (event) {
  var myName = $("#moi").val();
  $("#megaphone").text(promptMessage(myName));
});

// Génère le message diffusé à l´adversaire
function promptMessage(playerName) {
  if (playerName.length > 0) {
    return ">> " + playerName + " va attaquer en ...";
  } else {
    return "> En attente d'un joueur";
  }
}