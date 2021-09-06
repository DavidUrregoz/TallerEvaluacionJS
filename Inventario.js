class Inventario {
    constructor(){
        let eletrodomestics={
            bNacionales : 5,
            aInterNacionales : 8
        }
    
        let neveras={
            aNacionales: 10,
            cInterNacionales:12
        }
    
        let televisores={
            cInterNacionales:7,
            bInterNacionales:13,
            aNacionales:3
        }
    }

    quitarEletrodomestics(elconsumo,laprocedencia,cantidad){
        console.log("Enrto a quitar elecrtodomestic ");
        if(elconsumo == "B" && laprocedencia == false){
            if(cantidad <= eletrodomestics.bNacionales){
                eletrodomestics.bNacionales-=cantidad;
                alert("La compra fue exitosa");
            }
        }
        else if(elconsumo == A && laprocedencia ==false){
            if(cantidad<=eletrodomestics.aInterNacionales){
                eletrodomestics.aInterNacionales-=cantidad;
                alert("La compra fue exitosa");
            }
        }       

    }

    quitarNeveras(elconsumo,laprocedencia,cantidad){
        if(elconsumo == "A" && laprocedencia == false){
            if(cantidad<=neveras.aNacionales){
                neveras.aNacionales-=cantidad;
            }
        }
        else if(elconsumo == "C" && laprocedencia == true){
            if(cantidad<=neveras.cInterNacionales){
                neveras.cInterNacionales-=cantidad;
            }
        }       
    }

    quitarTelevisores(elconsumo,laprocedencia,cantidad){
        if(elconsumo == "C" && laprocedencia == true){
            if(cantidad <= televisores.cInterNacionales){
                televisores.cInterNacionales-=cantidad;
            }
        }else if(elconsumo == "B" && laprocedencia == true){
            if(cantidad <= televisores.bInterNacionales){
                televisores.bInterNacionales-=cantidad;
            }
        }else if(elconsumo == "A" && laprocedencia == false){
            if(cantidad <= televisores.aNacionales){
                televisores.aNacionales-=cantidad;
            }
    
        }
    }

}