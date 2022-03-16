let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let p1 = {
    x:20, y:20,
    w:40, h:40, color: 'red'
}
let positions = {
    cima:119, baixo:115,
    esquerda:97, direita:100
}

let bush = [{x: 0, y:70,w: 400, h:250},
            {x: 500, y:70,w: 400, h:250}
]

function keypressPlayer(event){
    let key = event.keyCode; // w = 119, a = 97, s = 115, d = 100
    let pos = { up: false, down: false, left: false, right: false}
    
    if(key === positions.cima){
        p1.y-=10; pos.up = true;
    }else if(key === positions.baixo){
        p1.y+=10; pos.down = true;
    }else if(key === positions.esquerda){
        p1.x-=10; pos.left = true;
    }else if(key === positions.direita){
        p1.x+=10; pos.right = true;
    }
}

function loop(){
    window.requestAnimationFrame(loop, canvas);
    render(); colide();
}

function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //bush
    ctx.fillStyle = '#fff';
    ctx.fillRect(bush[0].x, bush[0].y, bush[0].w, bush[0].h)
    ctx.fillStyle = '#909090'
    ctx.fillRect(bush[1].x, bush[1].y, bush[1].w, bush[1].h)
    //Player
    ctx.fillStyle = p1.color;
    ctx.fillRect(p1.x, p1.y, p1.w, p1.h);

}

function colide(){
    if((p1.x + p1.w > bush[0].x && p1.x < bush[0].x + bush[0].w &&
        p1.y + p1.h > bush[0].y && p1.y < bush[0].y + bush[0].h) || 
        p1.x + p1.w > bush[1].x && p1.x < bush[1].x + bush[1].w &&
        p1.y + p1.h > bush[1].y && p1.y < bush[1].y + bush[1].h){

            p1.color = '#000'
    }else{
        p1.color = 'red'
    }
}
window.addEventListener('keypress', keypressPlayer);
loop()