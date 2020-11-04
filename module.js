let Elevador = function (menorPiso,mayorPiso) {
    let menorPiso=menorPiso;
    let mayorPiso=mayorPiso;
    let pisoUsuario=0;
    let 

    function 
}

/*class Elevador {
    constructor(menorPiso,mayorPiso){
        this.menorPiso=menorPiso;
        this.mayorPiso=mayorPiso;
        if(this.menorPiso<0){
            this.cantPisos=(this.menorPiso*-1)+this.mayorPiso;
        }
        else{
            this.cantPisos=this.menorPiso+this.mayorPiso+1; //+1 para considerar PB
        }
        this.pisoUsuario=0;
        this.pisoActual=0;
        this.edoPuerta=false;// cerrada=false abierta=true
    }
    irPisoUsuario(){
        while(this.pisoActual>this.pisoUsuario){
            this.pisoActual--;
        }
        while(this.pisoActual<this.pisoUsuario){
            this.pisoActual++;
        }
    }
    irA(pisoDestino){
        if(this.pisoUsuario>pisoDestino){
            this.bajar();
        }
        else{
            this.subir();
        }
    }
    subir(){
        if(this.pisoDestino<=this.mayorPiso){
            this.controlPuerta=false;
            this.irPisoUsuario();
            while(this.pisoUsuario<this.pisoDestino){
                console.log('piso ${this.pisoActual++}');
            }
            this.abrirPuerta();
            this.cerrarPuerta();
        }
    }
    bajar(){
        if(this.pisoDestino>=this.menorPiso){
            this.controlPuerta=false;
            this.irPisoUsuario();
            while(this.pisoUsuario>this.pisoDestino){
                console.log('piso ${this.pisoActual--}');
            }
            this.abrirPuerta();
            this.cerrarPuerta();
        }
    }
    abrirPuerta(){
        if(this.edoPuerta==false)
            this.edoPuerta=true;
    }
    cerrarPuerta(){
        if(this.edoPuerta==true)
            this.edoPuerta=false;
    }
}

module.exports= {
    irPisoUsuario: this.irPisoUsuario(),
    menorPiso: this.menorPiso,
    mayorPiso: this.mayorPiso
}*/