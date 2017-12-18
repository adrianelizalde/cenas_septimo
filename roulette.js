$(document).ready(function() {
  function slotRoller(spd, selector) {
  	var speed = 40;
  	var firstChild = $(selector).find("li:first-child");
  		lastChild = $(selector).find("li:last-child");

  	$(selector).animate({
  		marginTop: "-500px"
		}, speed + (spd * 30 + spd), "linear", function(){
			firstChild = $("li:first-child", this);
			$(this).append(firstChild);
			$(this).css({ marginTop: "-250px"});
  	});
  }

  function rollSlot(slotName){
  	this.min = 25;
  	this.max = 60;
  	this.dice = function(){
  		var dice = Math.round(Math.random() * (this.max - this.min)) + this.min;
  		for (var i = 0; i < dice; i++) {
  			slotRoller(i, slotName);
  		}
      var $players = $(slotName).find('li');
      var names = $players.map(function(i, p) {
        return $(p).data('name');
      });
      var winnerIndex = (dice + 1) % names.length;
      return winnerIndex;
  	}
  }

  var slotRoll1 = new rollSlot('#slot-box1 ul');
  var slotRoll2 = new rollSlot('#slot-box2 ul');

  $('#slot-button1').on("click", function(){
  	if( $('#slot-box1 ul').is(':not(:animated)') ){
  		var winner = slotRoll1.dice();
      $('#slot-box2 ul li')[winner].remove();
  	}
  });
  $('#slot-button2').on("click", function(){
    if( $('#slot-box1 ul').is(':not(:animated)') &&
        $('#slot-box2 ul').is(':not(:animated)') ){
      // remove member selected on slot1
      slotRoll2.dice();
    }
  });
});
