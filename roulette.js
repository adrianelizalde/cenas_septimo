var option = {
  speed : 7,
  duration : 2,
  stopImageNumber : 0,
  startCallback : function() {
    console.log('start');
  },
  slowDownCallback : function() {
    console.log('slowDown');
  },
  stopCallback : function($stopElm) {
    console.log('stop');
  }
}
$('div.roulette').roulette(option);
