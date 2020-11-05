let elevador = function (pisos) {
    //let pisoUsuario=0;
    //let tuPiso=0;
    let pisoActual=0;
    let edoPuerta=false; // cerrada=false abierta=true
    let cantPisos=pisos;

    /*this.irPisoUsuario=function(tuPiso){//elevador se mueve de pisoActual a pisoUsuario
        if(pisoActual>tuPiso){
            this.bajar();
        }
        else{
            this.subir();
        }
    }*/
    this.irA=function(pisoDestino){//elevador se mueve de pisoUsuario a pisoDestino
            this.cerrarPuerta();
            while(pisoActual>pisoDestino){
                console.log(`piso ${bajar()}`);
            }
            while(pisoActual<pisoDestino){
                console.log(`piso ${subir()}`);
            }
        this.abrirPuerta();
    }
    function subir(){
        if(pisoActual<cantPisos){
            return ++pisoActual;
        }
    }
    function bajar(){
        if(pisoActual>0){
            return --pisoActual;
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
        return(`elevador en piso ${pisoActual} de 5, puerta ${edoPuerta==true?" abierta":" cerrada"}`);
    }
    /*return {
        abrirPuerta:abrirPuerta,
        cerrarPuerta:cerrarPuerta,
        irA:irA,
        estado:estado
    }*/
};

module.exports= elevador; 
