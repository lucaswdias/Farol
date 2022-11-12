// variaveis
let img = document.getElementById('picture');
let botoes = document.getElementById('buttons');
let lightsIndex = 0;

let luzes = (event) => {
    ligado[event.target.id]();
}
let nextLight = () =>{
    lightsIndex = lightsIndex < 2 ? ++lightsIndex : 0;
}
let trocarLuzes = ()=>{
    let lights = ['vermelho', 'amarelo', 'verde'];
    let light = lights[lightsIndex];
    ligado[light]();
    nextLight();
}
// Objeto
let ligado = {
    'vermelho': ()=>  img.src='img/vermelho.png',
    'amarelo': () => img.src = 'img/amarelo.png',
    'verde': () => img.src = 'img/verde.png',
    'automatico': () => setTimeout(trocarLuzes, 200)
}

botoes.addEventListener('click', luzes);

function myFunction(a, n){
a = [1,2,3,4,5,6] ;
n = Math.max(...a);
let maximo = a;
return maximo 
}