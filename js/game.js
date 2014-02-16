// base
var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');
var canvasVince = document.getElementById('canvasVince');
var ctxVince = canvasVince.getContext('2d');

var vince1;
var gameWidth = canvasBg.width;
var gameHeight = canvasBg.height;
var fps = 10;
var drawInterval;

var imgSprite = new Image();
imgSprite.src = 'images/sprite.png';
imgSprite.addEventListener('load',init,false);

// end of base





// main functions

function init() {
  drawBg();
  startDrawing();
  vince1 = new Vince();
  document.addEventListener('keydown',checkKeyDown,false);
  document.addEventListener('keyup',checkKeyUp,false);
}

function draw() {
  vince1.draw();
}

function startDrawing() {
  stopDrawing();
  drawInterval = setInterval(draw,fps);
}

function stopDrawing() {
  clearInterval(drawInterval);
}

function drawBg() {
  var srcX = 0;
  var srcY = 0;
  var drawX = 0;
  var drawY = 0;
  ctxBg.drawImage(imgSprite,srcX,srcY,gameWidth,gameHeight,drawX,drawY,gameWidth,gameHeight);
}


function clearCtxBg() {
  ctxBg.clearRect(0,0,gameWidth,gameHeight);
}

// end of main functions





// vince functions

function Vince() {
  this.srcX = 0;
  this.srcY = 710;
  this.drawX = 220;
  this.drawY = 200;
  this.width = 380;
  this.height = 300;
  this.speed = 2;
  this.isUpKey = false;
  this.isRightKey = false;
  this.isDownKey = false;
  this.isLeftKey = false;
}

Vince.prototype.draw = function() {
  clearCtxVince();
  this.checkKeys();
  ctxVince.drawImage(imgSprite,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
};

Vince.prototype.checkKeys = function() {
  if(this.isUpKey) {
    this.drawY -= this.speed;
  }
  if(this.isRightKey) {
    this.drawX += this.speed;
  }
  if(this.isDownKey) {
    this.drawY += this.speed;
  }
  if(this.isLeftKey) {
    this.drawX -= this.speed;
  }
};

function clearCtxVince() {
  ctxVince.clearRect(0,0,gameWidth,gameHeight);
}

// end of vince functions





// event functions

function checkKeyDown(e) {
  var keyID = e.keyCode || e.which;
  if (keyID === 38 || keyID === 87) {//up arrow or w
    vince1.isUpKey = true;
    e.preventDefault();
  }
  if (keyID === 39 || keyID === 68) {//right arrow or d
    vince1.isRightKey = true;
    e.preventDefault();
  }
  if (keyID === 40 || keyID === 83) {//down arrow or s
    vince1.isDownKey = true;
    e.preventDefault();
  }
  if (keyID === 37 || keyID === 65) {//left arrow and a
    vince1.isLeftKey = true;
    e.preventDefault();
  }
}

function checkKeyUp(e) {
  var keyID = e.keyCode || e.which;
  if (keyID === 38 || keyID === 87) {//up arrow or w
    vince1.isUpKey = false;
    e.preventDefault();
  }
  if (keyID === 39 || keyID === 68) {//right arrow or d
    vince1.isRightKey = false;
    e.preventDefault();
  }
  if (keyID === 40 || keyID === 83) {//down arrow or s
    vince1.isDownKey = false;
    e.preventDefault();
  }
  if (keyID === 37 || keyID === 65) {//left arrow and a
    vince1.isLeftKey = false;
    e.preventDefault();
  }
}

// end of event functions








