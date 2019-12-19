var body = document.querySelector('body')
var navTitle = document.querySelector('.nav__title')
var navSubtitle = document.querySelector('.nav__subtitle')

function injectColours(colourOne, colourTwo) {
  body.style.background = colourOne
  navTitle.style.color = colourTwo
  navSubtitle.style.color = colourTwo
}

var makeItColourful = function (e) {
  var mouseX = e.clientX 
  var pageWidth = document.documentElement.clientWidth
  var percentage = mouseX/pageWidth*100
  var segment = Math.floor(percentage/25);

  var segmentWidth = pageWidth / 4
  var ratio = segmentWidth/125
  var inc = Math.round((mouseX - (segment * segmentWidth)) / ratio)

  switch(segment) {
    case 0:
      var colourMain = `rgb(${255-inc}, 255, 130)`
      var colourPlusOne = `rgb(130, 255, ${130+inc})`
      injectColours(colourMain, colourPlusOne)
      break;
    case 1:
      var colourMain = `rgb(130, 255, ${130+inc})`
      var colourPlusOne = `rgb(130, ${255-inc}, 255)`
      injectColours(colourMain, colourPlusOne)
      break;
    case 2:
      var colourMain = `rgb(130, ${255-inc}, 255)`
      var colourPlusOne = `rgb(${130+inc}, 130, 255)`
      injectColours(colourMain, colourPlusOne)
      break;
    case 3:
      var colourMain = `rgb(${130+inc}, 130, 255)`
      var colourPlusOne =`rgb(255, 130, ${255-inc}`
      injectColours(colourMain, colourPlusOne)
      break;
    default:
      console.error('OOPS');
  }
}

var flyer = document.querySelector('.egg__comet')
var eggOne = document.querySelector('.nav__icon').addEventListener('click', function(){
  flyer.classList.toggle("egg__comet--animate")
})

function init() {
  document.onmousemove = makeItColourful;
  //pseudo classes for IOS
  document.addEventListener("touchstart", function() {},false); 
}

window.onload = init;
