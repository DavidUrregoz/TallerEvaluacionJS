class Nevera extends Electrodomestico{
    constructor(procedencia,consumo,capacidad){
        super(procedencia,consumo);
        this.capacidad=capacidad;
    }

    calcularPrecio(){
        this.calcularConsumo();
        this.calcularProcedencia();       
        this.calcularCapacidad();
        return this.precio;       
    }

    calcularCapacidad(){
        if(this.capacidad > 120){            
                let incremento = (this.capacidad - 120)/10;
                Math.floor(incremento);
                this.precio += (this.precio*0.05)*incremento;            
        }
    }
}