window.onload = init;
var main = document.querySelector('main')
function init() {
	// if (window.Event) {
	// document.addEventListener(Event.MOUSEMOVE);
	// }
	document.onmousemove = getCursorXY;
}

var getCursorXY = function (e) {
  var x = (window.Event) ? e.pageX : event.clientX 
  // + (document.documentElement.scrollLeft 
  //   ? document.documentElement.scrollLeft 
  //   : document.body.scrollLeft);
  // var y = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop 
  //   ? document.documentElement.scrollTop 
  //   : document.body.scrollTop);
  var w = document.documentElement.clientWidth
  var percentage = x/w*100
  var segment = Math.floor(percentage/16.66);
  var segmentWidth = w / 6
  var ratio = segmentWidth/125
  var inc = Math.round((x - (segment * segmentWidth)) / ratio)
  
  switch(segment) {
    case 0 :
      var colour = `rgb(255,${130+inc}, 130)`
      main.style.background = colour
      // console.log(colour);
      
      break;
    case 1:
      var colour = `rgb(${255-inc}, 255, 130)`
      main.style.background = colour
      // console.log(colour);
      
      break;
    case 2:
      var colour = `rgb(130, 255, ${130+inc})`
      main.style.background = colour
      // console.log(colour);
      
      break;
    case 3:
      var colour = `rgb(130, ${255-inc}, 255)`
      main.style.background = colour
      // console.log(colour);
      
      break;
    case 4:
      var colour = `rgb(${130+inc}, 130, 255)`
      main.style.background = colour
      // console.log(colour);
      
      break;
    case 5:
      var colour = `rgb(255, 130, ${255-inc}`
      main.style.background = colour
      // console.log(colour);
      
      break;
    default:
      console.error('OOPS');
  }
}