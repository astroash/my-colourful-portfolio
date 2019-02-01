var body = document.querySelector('body');
var navTitle = document.querySelector('.nav__header_title');
var navSubtitle = document.querySelector('.nav__header_subtitle');

var dirtyMutableState = {
  clientHeight: 0,
  mouseY: 0,
  previousVerticalScroll: 0,
};

function colourInjectors(colourOne, colourTwo) {
  body.style.background = colourOne;
  navTitle.style.color = colourTwo;
  navSubtitle.style.color = colourTwo;
};

var makeItColourful = function (yPosition) {
  var percentage = yPosition / dirtyMutableState.clientHeight * 100;
  var colourSegment = Math.floor(percentage/25);
  var segmentHeight = dirtyMutableState.clientHeight / 4;
  var ratio = segmentHeight/125;
  var inc = Math.round((yPosition - (colourSegment * segmentHeight)) / ratio);

  switch(colourSegment) {
    case 0:
      var colourMain = `rgb(${255-inc}, 255, 130)`
      var colourPlusOne = `rgb(130, 255, ${130+inc})`
      colourInjectors(colourMain, colourPlusOne)
      break;
    case 1:
      var colourMain = `rgb(130, 255, ${130+inc})`
      var colourPlusOne = `rgb(130, ${255-inc}, 255)`
      colourInjectors(colourMain, colourPlusOne)
      break;
    case 2:
      var colourMain = `rgb(130, ${255-inc}, 255)`
      var colourPlusOne = `rgb(${130+inc}, 130, 255)`
      colourInjectors(colourMain, colourPlusOne)
      break;
    case 3:
      var colourMain = `rgb(${130+inc}, 130, 255)`
      var colourPlusOne =`rgb(255, 130, ${255-inc}`
      colourInjectors(colourMain, colourPlusOne)
      break;
    default:
      console.error('OOPS');
  };
};

var onMouseMove = function (e) {
  dirtyMutableState.mouseY = e.pageY;

  makeItColourful(e.pageY);
};

var onScroll = function (e) {
  // mouse position relative to scroll event
  if(dirtyMutableState.previousVerticalScroll !== document.documentElement.scrollTop){
    dirtyMutableState.mouseY -= dirtyMutableState.previousVerticalScroll;
    dirtyMutableState.previousVerticalScroll = document.documentElement.scrollTop;
    dirtyMutableState.mouseY += dirtyMutableState.previousVerticalScroll;
  };

  makeItColourful(dirtyMutableState.mouseY);
};

var flyer = document.querySelector('.egg__comet');
var eggOne = document.querySelector('.nav__header_icon').addEventListener('click', function(){
  flyer.classList.toggle("egg__comet--animate");
});


function init() {
  dirtyMutableState.clientHeight = document.body.clientHeight;
  document.onmousemove = onMouseMove;
  document.onscroll = onScroll;
  //pseudo classes for IOS
  document.addEventListener("touchstart", function() {},false); 
};

window.onload = init;