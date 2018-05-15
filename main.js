window.onload = init;
var main = document.querySelector('main')
var navTitle = document.querySelector('.nav__title')
var navSubtitle = document.querySelector('.nav__subtitle')

function init() {
	document.onmousemove = getCursorX;
}

function makeItColourful(colourOne, colourTwo) {
  main.style.background = colourOne
  navTitle.style.color = colourTwo
  navSubtitle.style.color = colourTwo
}

var getCursorX = function (e) {
  var x = e.clientX 
  var w = document.documentElement.clientWidth
  var percentage = x/w*100
  var segment = Math.floor(percentage/25);
  var segmentWidth = w / 4
  var ratio = segmentWidth/125
  var inc = Math.round((x - (segment * segmentWidth)) / ratio)

  switch(segment) {
    case 0:
      var colourMain = `rgb(${255-inc}, 255, 130)`
      var colourInverse = `rgb(${255-inc}, 130, 255)`
      makeItColourful(colourMain, colourInverse)
      break;
    case 1:
      var colourMain = `rgb(130, 255, ${130+inc})`
      var colourInverse = `rgb(130, ${130+inc}, 255)`
      makeItColourful(colourMain, colourInverse)
      break;
    case 2:
      var colourMain = `rgb(130, ${255-inc}, 255)`
      var colourInverse = `rgb(130, 255, ${255-inc})`
      makeItColourful(colourMain, colourInverse)
      break;
    case 3:
      var colourMain = `rgb(${130+inc}, 130, 255)`
      var colourInverse = `rgb(${130+inc}, 255, 130)`
      makeItColourful(colourMain, colourInverse)
      break;
    default:
      console.error('OOPS');
  }
}