class Factura{
    constructor(){
        this.compras=[];
        this.total=0;
        
    }

    agregarCompra(obj, cantidad){
        this.compras.push([obj,cantidad]);
        
        console.log(this.compras);
    }

    mostrarFactura(){
        for(let k = 0; k < this.compras.length; k++){
            
            this.total += this.compras[k][0].precio * this.compras[k][1];
        }
        alert(this.total);
    }


}