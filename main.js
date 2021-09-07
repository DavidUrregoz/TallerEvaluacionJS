//let licuadora = new Electrodomestico(true, "A");


//console.log(licuadora.calcularPrecio());

//let tev = new Televisor(true , "A" , 50 , true );

// console.log(tev.calcularPrecio());

// let neve= new Nevera(true,"A",140);

// console.log(neve.calcularPrecio());




///////
let inventario = new Inventario();

//let factura = new Factura();

mensajedeMenu=" Esta es nuestra oferta: \n"+
    "1 - Electrodomestico de consumo B nacional \n"+
    "2 - Neveras de consumo A nacional \n"+
    "3 - Televisores de consumo C internacinales \n"+
    "4 - Televisores de consumo B internacinales \n"+
    "5 - Televisores de consumo A nacionales \n"+
    "6 - Electrodomesticos de consumo A internacionales \n"+
    "7 - Neveras de consumo C internacinales \n";

function boton1(){
    
    document.write(mensajedeMenu);
    let elecionMenu = prompt(mensajedeMenu);  
    switch(elecionMenu){
        case "1" :
            var newEletro = new Electrodomestico(false,"B");
            numerodeObjetos(newEletro);
            break;
        case "2" :
            break;
        case "3" :
            break;
        case "4" :
            break;
        case "5" :
            break;
        case "6" :
            var newEletro = new Electrodomestico(true,"A");
            numerodeObjetos(newEletro);
            break;
        case "7" :
            break;
        default:
            elecionMenu = prompt(mensajedeMenu); 
            break;
    }  
} 

    
    //agragar a factura    

function elegirNevera(num){
    let newNevera = new Nevera();    
    newNevera.capacidad = prompt("De cuantos litros quiere la nevera ? ");
    if(num == 2){
        newNevera.procedencia = false;
        newNevera.consumo ="A";
        numerodeObjetos(newNevera);
        
    }else if(num==7){
        newNevera.procedencia = true;
        newNevera.consumo ="C";
        numerodeObjetos(newNevera);
    }

}
function numerodeObjetos( obj ){
    console.log("INGRESO A NUMERO OBJETOS");
    let compra = prompt("el precio es de "+ obj.calcularPrecio() + " Cuantos desea comprar?");
    compra=parseInt(compra,10);
        if(compra > 0){           
            inventario.quitarEletrodomestics(obj.consumo, obj.procedencia, compra);
            //agregar factura
        } 
}


function boton2(){

}
