var elevador = (function () {
    let pisoUsuario=0;
    let pisoActual=0;
    let edoPuerta=false; // cerrada=false abierta=true
    let cantPisos=5;

    function irPisoUsuario(){//elevador se mueve de pisoActual a pisoUsuario
        while(pisoActual>pisoUsuario){
            console.log('piso ${pisoActual--}');
        }
        while(pisoActual<pisoUsuario){
            console.log('piso ${pisoActual++}');
        }
    }
    function irA(pisoDestino){//elevador se mueve de pisoUsuario a pisoDestino
        if(pisoDestino>=0 && pisoDestino<=5){
            irPisoUsuario();
            if(pisoUsuario>pisoDestino){
                bajar();
            }
            else{
                subir();
            }
            pisoUsuario=pisoDestino;
            pisoActual=pisoDestino;
        }    
    }
    function subir(){
        if(pisoDestino<=cantPisos){
            controlPuerta=false;
            irPisoUsuario();
            while(pisoUsuario<pisoDestino){
                console.log('piso ${pisoActual++}');
            }
            abrirPuerta();
            cerrarPuerta();
        }
    }
    function bajar(){
        if(pisoDestino>=0){
            controlPuerta=false;
            irPisoUsuario();
            while(pisoUsuario>pisoDestino){
                console.log('piso ${pisoActual--}');
            }
            abrirPuerta();
            cerrarPuerta();
        }
    }
    function abrirPuerta(){
        if(edoPuerta==false)
            edoPuerta=true;
    }
    function cerrarPuerta(){
        if(edoPuerta==true)
            edoPuerta=false;
    }
    return {
        abrir:abrirPuerta,
        cerrar:cerrarPuerta,
        pisoDestino:irA
    }
}) ();

module.exports= elevador; 