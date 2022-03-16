let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let p1 = {
    x:20, y:20,
    w:20, h:12, color: 'orange'
}
let player = document.createElement('img');
let positions = {
    cima:119, baixo:115,
    esquerda:97, direita:100
}

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
    render();
}

function render(){
    //Objeto de colisão
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = p1.color = 'red';
    ctx.fillRect(p1.x, p1.y, 20, 20);

}

window.addEventListener('keypress', keypressPlayer);
loop()