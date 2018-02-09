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

let warshipOne = { 'b4': 0, 'b5': 0, 'b6': 0, 'total': 0 };
let warshipTwo = { 'd9': 0, 'e9': 0, 'f9': 0, 'total': 0 };

let id = $("#canon");

$("#canon").keyup(function (e) {
  var keycode = (e.keyCode ? e.keyCode : e.which);
  idVal = id.val().toLowerCase();

  if (keycode == '13') {
    $("#" + idVal).css({ 'background-color': 'red' });

    touch = false;
    cast = false;

    if (warshipOne[idVal] === 0) {
      warshipOne[idVal] = 1;
      warshipOne['total']++;
      touch = true;
      if (warshipOne['total'] === 3) {
        cast = true;
      }
    }

    if (warshipTwo[idVal] === 0) {
      warshipTwo[idVal] = 1;
      warshipTwo['total']++;
      touch = true;
      if (warshipTwo['total'] === 3) {
        cast = true;
      }
    }

    if (warshipOne['total'] === 3 && warshipTwo['total'] === 3) {
      $("#history").append('<br />WIN');
      $("#no-mans-land").click(function () {
        $(this).css({
          'background-color': 'white',
          'background-image': 'url("http://newyorkparkingticket.com/wp-content/uploads/2009/09/NYPT-WIN_how-to-beat-a-NYC-parking-ticket.png")',
          'background-repeat': 'no-repeat',
          'height': '240px'
        })
      });
    } else if (cast) {
      $("#history").append('<br />COULE');
    } else if (touch) {
      $("#history").append('<br />TOUCHE');
    } else {
      $("#history").append('<br />PLOUF');
    }
  }
});