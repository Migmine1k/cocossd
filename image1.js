let objetodetectado;
let img;
let objetos = [];
let statusDotrem;

function preload(){
    img = loadImage("carro.png");
}

function setup{
    canvas = createCanvas(640,420);
    canvas.center();
    objetodetectado - ml5.objectDetector('cocossd', modeloCarregado);
    document.getElementById('statusDetector').innerHTML="Status: Detectando Objetos";
}

function modeloCarregado(){
    console.log("modelo Carregado");
    statusdotrem=true;
    objetodetectado.delect(img, gotresult);
}

function gotResult(error, results) {
    if (error) {
        console.log(results);
    }
    console.log(results);
    objetos = results;
}

function draw(){
    if(statusdotrem != undefined){
    image(img,0,0,640,420)
    for(let i=0; i<objetos.length; i++){
        document.getElementById("statusDetector").innerHTML = "status: objetos detectados";
        fill("red");
        porcentagem= floor(objetos[i].confidence*100);
        text(objetos[i].label + " " + porcentagem + " " + "%", objetos[i].x +5 , objetos[i].y+15 );
        notfill();
        stroke("red");
        rect(objetos[i].x, objetos[i].y, objetos[i].width, objetos[i].height);  
   
    }
}
}


