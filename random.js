// We add
$(document).ready(function() {
  var members = [
    {
      name: "ignacio",
      times_cooked: 2,
      times_cleaned: 0,
    },
    {
      name: "victor",
      times_cooked: 2,
      times_cleaned: 0,
    },
    {
      name: "nil",
      times_cooked: 1,
      times_cleaned: 0,
    },
    {
      name: "camaleonte",
      times_cooked: 1,
      times_cleaned: 0,
    },
    {
      name: "diodoro",
      times_cooked: 2,
      times_cleaned: 0,
    },
    {
      name: "rober",
      times_cooked: 1,
      times_cleaned: 0,
    },
    {
      name: "lozano",
      times_cooked: 1,
      times_cleaned: 0,
    },
    {
      name: "pepe",
      times_cooked: 2,
      times_cleaned: 0,
    },
    {
      name: "adrian",
      times_cooked: 1,
      times_cleaned: 0,
    },
    {
      name: "ramon",
      times_cooked: 1,
      times_cleaned: 0,
    },
    {
      name: "jimeno",
      times_cooked: 1,
      times_cleaned: 0,
    },
    {
      name: "carlos",
      times_cooked: 0,
      times_cleaned: 0,
    }
  ];

  function rollDice(faces) {
    return Math.floor(Math.random() * faces);
  }

  // Cleaner lottery
  // we make a copy of the members array, so we can manipulate it
  // (remove items and so) without affecting the real array.
  var players = members.slice();

  // splice method removes items from an array and returns another array with the removed items
  // that's why we use [0] (to access the item in the result array).
  // First parameter is index, second is number of items to remove.
  // We use this to avoid duplicated cleaners in our lottery
  // ex.: members = ["adrian", "victor", "gaminde"]
  // result = members.splice(2, 1);
  // cleaner = result[0];
  // // result -> ["gaminde"]
  // // members -> ["adrian", "victor"]
  // // cleaner -> "gaminde";
  var cleaner1 = players.splice(rollDice(players.length), 1)[0];
  var cleaner2 = players.splice(rollDice(players.length), 1)[0];
  var text = "<h1>"+cleaner1.name+"</h1>";
  text += "<h1>"+cleaner2.name+"</h1>";
  $('.cleaner-selector').html(text);


  // Times cooked list
  members.forEach(function(member) {
    text = "<li>"+member.name+" "+member.times_cooked+"</li>";
    $('.times-cooked-list').append(text);
  });
})
