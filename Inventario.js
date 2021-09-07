class Inventario {
    
    
    constructor(){              
        this.objetos = [
            [ 5 , 8],
            [ 10 ,12],
            [ 7 , 13 , 3]
        ]

        
        // var eletodoInv = {
        //     bNacio : '5',
        //     aInterNacionales : 8
        // }
        // var eletrodomestics = {
        //     
        // };

        // var neveras = {
        //     aNacionales: 10,
        //     cInterNacionales:12
        // };

        // var televisores = {
        //     cInterNacionales:7,
        //     bInterNacionales:13,
        //     aNacionales:3
        // };
        

    }


    quitarEletrodomestics(elconsumo,laprocedencia,cantidad){   
              
        // this.elconsumo=elconsumo;
        // this.laprocedencia=laprocedencia;
        // this.cantidad=cantidad;
        if ((elconsumo == "B" ) && (laprocedencia == false)){
            let cantidadActual=this.objetos[0][0];
            if(cantidad <= cantidadActual){               
                console.log(cantidadActual);
                cantidadActual-= cantidad;
                this.objetos[0][0]=cantidadActual;
                alert("La compra fue exitosa quedan "+ this.objetos[0][0]);
            }
        }
        else if( (elconsumo == "A") && (laprocedencia == true)){
            let cantidadActual=this.objetos[0][1];
            if(cantidad <= cantidadActual){               
                console.log(cantidadActual);
                cantidadActual-= cantidad;
                this.objetos[0][1]=cantidadActual;
                alert("La compra fue exitosa quedan "+ this.objetos[0][1]);
            }
        }  
    }

    quitarNeveras(elconsumo,laprocedencia,cantidad){
        if(elconsumo == "A" && laprocedencia == false){
            let cantidadActual=this.objetos[1][0];
            if(cantidad <= cantidadActual){               
                console.log(cantidadActual);
                cantidadActual-= cantidad;
                this.objetos[1][0]=cantidadActual;
                alert("La compra fue exitosa quedan "+ this.objetos[1][0]);
            }
        }
        else if(elconsumo == "C" && laprocedencia == true){
            let cantidadActual=this.objetos[1][1];
            if(cantidad <= cantidadActual){               
                console.log(cantidadActual);
                cantidadActual-= cantidad;
                this.objetos[1][1]=cantidadActual;
                alert("La compra fue exitosa quedan "+ this.objetos[1][1]);
            }
        }       
    }

    quitarTelevisores(elconsumo,laprocedencia,cantidad){
        if(elconsumo == "C" && laprocedencia == true){
            let cantidadActual=this.objetos[2][0];
            if(cantidad <= cantidadActual){               
                console.log(cantidadActual);
                cantidadActual-= cantidad;
                this.objetos[2][0]=cantidadActual;
                alert("La compra fue exitosa quedan "+ this.objetos[2][0]);
            }
        }else if(elconsumo == "B" && laprocedencia == true){
            let cantidadActual=this.objetos[2][1];
            if(cantidad <= cantidadActual){               
                console.log(cantidadActual);
                cantidadActual-= cantidad;
                this.objetos[2][1]=cantidadActual;
                alert("La compra fue exitosa quedan "+ this.objetos[2][1]);
            }
        }else if(elconsumo == "A" && laprocedencia == false){
            let cantidadActual=this.objetos[2][2];
            if(cantidad <= cantidadActual){               
                console.log(cantidadActual);
                cantidadActual-= cantidad;
                this.objetos[2][2]=cantidadActual;
                alert("La compra fue exitosa quedan "+ this.objetos[2][2]);
            }
    
        }
    }

}