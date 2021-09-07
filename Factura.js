class Factura{
    constructor(){
        this.compras=[];
        this.total;
    }

    agregarCompra(obj, cantidad){
        this.compras.push([obj,cantidad]);
    }

    mostrarFactura(){
        for(let i = 0;i<length.compras;i++){
            this.total+=this.compras[i][0].getPrecio()*this.compras[i][1];
        }
        alert(this.total);
    }


}