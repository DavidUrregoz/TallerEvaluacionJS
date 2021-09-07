class Factura{
    constructor(){
        this.compras=[];
        this.total=0;
        this.salidaFactura="";
        
    }

    agregarCompra(obj, cantidad,identificador){
        this.compras.push([obj,cantidad,identificador]);
        
        console.log(this.compras);
    }

    mostrarFactura(){
        this.salidaFactura="FACTURA DE COMPRA \n (E)->Electrodomesticos  (N)->Neveras  (T)->Televisores \n"+
        "Cantidad | Producto | Consumo      |     Precio\n";
        for(let k = 0; k < this.compras.length; k++){
            this.total += this.compras[k][0].precio * this.compras[k][1];

            this.salidaFactura += "-> "+this.compras[k][1]+".............."
            +this.compras[k][2]+"..................Consumo: "
            + this.compras[k][0].consumo + "............" 
            + this.compras[k][0].precio * this.compras[k][1]+"\n";
            
        }
        this.salidaFactura+="**************************************************\nTOTAL = "+this.total;
        alert(this.salidaFactura);
    }
}