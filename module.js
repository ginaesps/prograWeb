var elevador = (function () {
    let pisoUsuario=0;
    let tuPiso=0;
    let pisoActual=0;
    let edoPuerta=false; // cerrada=false abierta=true
    let cantPisos=5;

    this.irPisoUsuario=function(tuPiso){//elevador se mueve de pisoActual a pisoUsuario
        if(pisoActual>tuPiso){
            this.bajar();
        }
        else{
            this.subir();
        }
    }
    this.irA=function(pisoDestino,tuPiso){//elevador se mueve de pisoUsuario a pisoDestino
        if(tuPiso<0 || tuPiso>5){
            console.log('piso actual inexistente')
        }
        else if(pisoDestino>=0 && pisoDestino<=5){
            irPisoUsuario(tuPiso);
            while(tuPiso>pisoDestino){
                console.log(`piso ${bajar()}`);
            }
            while(tuPiso<pisoDestino){
                console.log(`piso ${subir()}`);
            }
            pisoUsuario=pisoDestino;
            pisoActual=pisoDestino;
        }    
    }
    this.subir=function(){
        cerrarPuerta();
        if(pisoActual<cantPisos){
            // console.log(`piso ${pisoActual++}`);
            pisoActual++;
        }
    }
    this.bajar=function(){
        cerrarPuerta();
        if(pisoActual>0){
            // console.log(`piso${pisoActual--}`);
            pisoActual--;
        }        
    }
    this.abrirPuerta=function(){
        if(edoPuerta==false)
            edoPuerta=true;
    }
    this.cerrarPuerta=function(){
        if(edoPuerta==true)
            edoPuerta=false;
    }
    this.estado=function(){ // cuando intento imprimirlo en consola, solo me arroja que es una función
        console.log(`elevador en piso ${pisoActual} de 5, puerta ${edoPuerta}`);
    }
    return {
        abrirPuerta:abrirPuerta,
        cerrarPuerta:cerrarPuerta,
        irA:irA,
        estado:estado,
    }
}) ();

module.exports= elevador; 