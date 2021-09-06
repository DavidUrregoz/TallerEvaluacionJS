class Televisor extends Electrodomestico{
    constructor(procedencia,consumo,tamano,isTDT){
        super(procedencia,consumo);
        this.tamano=tamano;
        this.isTDT=isTDT;//Bolean
    }

    calcularPrecio(){
        this.calcularConsumo();
        this.calcularProcedencia();
        this.calcularTDT();
        this.calcularTamano();
        return this.precio;       
    }

    calcularTDT(){
        if(this.isTDT){
            this.precio+=250000;
        }
    }
    
    calcularTamano(){
        if(this.tamano > 40){
            this.precio+=this.precio*0.3;
        }
    }


}