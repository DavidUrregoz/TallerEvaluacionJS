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

    quitarEletrodomestics(especifi,cantidad){
        switch(especifi){
            case "bNacionales":
                if(cantidad<=eletrodomestics.bNacionales){
                    eletrodomestics.bNacionales-=cantidad;}
                break;
            case "aInterNacionales":
                if(cantidad<=eletrodomestics.aInterNacionales){
                    eletrodomestics.aInterNacionales-= cantidad;}
                break;
        }       

    }

    quitarNeveras(especifi,cantidad){
        switch(especifi){
            case "aNacionales":
                if(cantidad<=neveras.aNacionales){
                    neveras.aNacionales-=cantidad;}
                break;
            case "cInterNacionales":
                if(cantidad<=neveras.cInterNacionales){
                    neveras.cInterNacionales-=cantidad;}
                break;
        }
    }

    quitarTelevisores(especifi,cantidad){
        switch(especifi){
            case "cInterNacionales":
                if(cantidad<=televisores.cInterNacionales){
                    televisores.cInterNacionales-=cantidad;}
                break;
            case "bInterNacionales":
                if(cantidad<=televisores.bInterNacionales){
                    televisores.bInterNacionales-=cantidad;}
                break;
            case "aNacionales":
                if(cantidad<=televisores.aNacionales){
                    televisores.aNacionales-=cantidad;}
                break;
        }
    }

}