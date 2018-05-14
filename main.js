window.onload = init;
var main = document.querySelector('main')

function init() {
	document.onmousemove = getCursorXY;
}

var getCursorXY = function (e) {
  var x = e.clientX 
  var w = document.documentElement.clientWidth
  var percentage = x/w*100
  var segment = Math.floor(percentage/25);
  var segmentWidth = w / 4
  var ratio = segmentWidth/125
  var inc = Math.round((x - (segment * segmentWidth)) / ratio)

  switch(segment) {
    case 0:
      var colour = `rgb(${255-inc}, 255, 130)`
      main.style.background = colour
      break;
    case 1:
      var colour = `rgb(130, 255, ${130+inc})`
      main.style.background = colour
      break;
    case 2:
      var colour = `rgb(130, ${255-inc}, 255)`
      main.style.background = colour
      break;
    case 3:
      var colour = `rgb(${130+inc}, 130, 255)`
      main.style.background = colour
      break;
    default:
      console.error('OOPS');
  }
}