class Electrodomestico{
    constructor(procedencia,consumo){
    this.consumo=consumo;
    this.procedencia=procedencia;//Bolean true importado
    this.precio=0;
    }

    calcularPrecio(){
        this.calcularConsumo();
        this.calcularProcedencia();
        return this.precio;
    }

    calcularProcedencia(){
        if(this.procedencia){
            this.precio += 350000;
        }else{
            this.precio+= 250000;
        }
    }

    calcularConsumo(){
        switch(this.consumo){
            case "A":
                this.precio += 450000;               
                break;
            case "B":
                this.precio += 350000;
                break;
            case "C":
                this.precio += 250000;
                break;
            default:
                this.precio += 250000;
                break;
        }
    }

}

