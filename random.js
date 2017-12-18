// We add
$(document).ready(function() {
  var members = [
    {
      name: "Ignacio",
      times_cooked: 2,
      times_cleaned: 0,
      photos: [
        "ignacio.jpg",
      ]
    },
    {
      name: "Ramon",
      times_cooked: 1,
      times_cleaned: 1,
      photos: [
        "ramon.jpg",
      ]
    },
    {
      name: "Victor",
      times_cooked: 3,
      times_cleaned: 0,
      photos: [
        "victor.jpg",
      ]
    },
    {
      name: "Nil",
      times_cooked: 1,
      times_cleaned: 0,
      photos: [
        "nil.jpg",
      ]
    },
    {
      name: "Camaleonte",
      times_cooked: 1,
      times_cleaned: 0,
      photos: [
        "camaleonte.jpg",
      ]
    },
    {
      name: "Diodoro",
      times_cooked: 3,
      times_cleaned: 1,
      photos: [
        "diodoro.jpg",
      ]
    },
    {
      name: "Rober",
      times_cooked: 1,
      times_cleaned: 1,
      photos: [
        "rober.jpg",
      ]
    },
    {
      name: "Lozano",
      times_cooked: 1,
      times_cleaned: 0,
      photos: [
        "lozano.jpg",
      ]
    },
    {
      name: "Pepe",
      times_cooked: 2,
      times_cleaned: 0,
      photos: [
        "pepe.jpg",
      ]
    },
    {
      name: "Adrian",
      times_cooked: 1,
      times_cleaned: 1,
      photos: [
        "adrian.jpg",
      ]
    },
    {
      name: "Jimeno",
      times_cooked: 1,
      times_cleaned: 0,
      photos: [
        "jimeno.jpg",
      ]
    },
    {
      name: "Carlos",
      times_cooked: 0,
      times_cleaned: 0,
      photos: [
        "carlos.png",
      ]
    }
  ];

  // Generate slot lists

  $('.slot-box ul').each(function(i, list) {
    var text;
    var items = members.forEach(function(member) {
      text = "<li data-name='"+member.name+"' style=\"background-image:url('img/"+member.photos[0]+"')\"></li>";
      $(list).append(text);
    });
  });

  // function rollDice(faces) {
  //   return Math.floor(Math.random() * faces);
  // }

  // // Cleaner lottery
  // // we make a copy of the members array, so we can manipulate it
  // // (remove items and so) without affecting the real array.
  // var players = members.slice();
  //
  // // splice method removes items from an array and returns another array with the removed items
  // // that's why we use [0] (to access the item in the result array).
  // // First parameter is index, second is number of items to remove.
  // // We use this to avoid duplicated cleaners in our lottery
  // // ex.: members = ["adrian", "victor", "gaminde"]
  // // result = members.splice(2, 1);
  // // cleaner = result[0];
  // // // result -> ["gaminde"]
  // // // members -> ["adrian", "victor"]
  // // // cleaner -> "gaminde";
  // var cleaner1 = players.splice(rollDice(players.length), 1)[0];
  // var cleaner2 = players.splice(rollDice(players.length), 1)[0];
  // var text = "<h1>"+cleaner1.name+"</h1>";
  // text += "<h1>"+cleaner2.name+"</h1>";
  // $('.cleaner-selector').html(text);

  // Times cooked list
  members.forEach(function(member) {
    text = "<li>"+member.name+" "+member.times_cooked+"</li>";
    $('.times-cooked-list').append(text);
  });
})
