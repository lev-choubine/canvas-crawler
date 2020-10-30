document.addEventListener('DOMContentLoaded', function(){ 
//////////////////don't touch/////////////////////////////
const movementDisplay = document.querySelector('#movement');
const game = document.querySelector('#game');
// syncing up the canvas's internal height&width to its apparent height&width
const computedStyle = getComputedStyle(game);

const height =computedStyle.height
const width = computedStyle.width

game.height = height.replace('px', '');
game.width = width.replace('px', '');

const ctx = game.getContext('2d');
ctx.fillStyle = 'white';
ctx.strokeStyle = 'red';
ctx.lineWidth =5;



function drawBox(x, y, size, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}
document.getElementById('status').addEventListener('click', function(){
    ogre.render();
    hero.render();
});

class Crawler {
    constructor(x,y, color, width, height){
        this.x= x;
        this.y =y;
        this.color = color;
        this.width =width;
        this.height = height;
        this.alive = true;
    }
    render()
    {
    ctx.fillStyle=this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

const ogre = new Crawler(10,10,"#BADA55",40,80);
const hero = new Crawler(200,200,"hotpink",10,10);



document.addEventListener('keyup', function(evt){
    // console.log()
    if (evt.key==='w') {
       hero.y -= 10
    }else if(evt.key==='a'){
       hero.x -= 10
    }else if(evt.key==='s'){
       hero.y +=10
    }else if(evt.key==='d'){
       hero.x +=10
    }
    movementDisplay.textContent =`x: ${hero.x}, y: ${hero.y}`;
    console.log(hero);
})

function detectHit() {
         if(hero.x < ogre.x + ogre.width 
        && hero.x + hero.width > ogre.x
        && hero.y < ogre.y +ogre.height
        && hero.y + hero.height > ogre.y){
        ogre.alive =false;
    ;}    
    }


function rePaint() {
    // console.log("REPAINT!!!!");
  // clear off the entire canvas
  detectHit();
  ctx.clearRect(0 , 0, game.width, game.height);
  hero.render();
  if (ogre.alive){
  ogre.render();
  }
}

setInterval(rePaint, 1000/60);
detectHit();

/////////////don't touch//////////////
});