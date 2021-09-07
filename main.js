//let licuadora = new Electrodomestico(true, "A");


//console.log(licuadora.calcularPrecio());

//let tev = new Televisor(true , "A" , 50 , true );

// console.log(tev.calcularPrecio());

// let neve= new Nevera(true,"A",140);

// console.log(neve.calcularPrecio());




///////
let inventario = new Inventario();

let factura = new Factura();

mensajedeMenu=" Esta es nuestra oferta: \n"+
    "1 - Electrodomestico de consumo B nacional \n"+
    "2 - Neveras de consumo A nacional \n"+
    "3 - Televisores de consumo C internacinales \n"+
    "4 - Televisores de consumo B internacinales \n"+
    "5 - Televisores de consumo A nacionales \n"+
    "6 - Electrodomesticos de consumo A internacionales \n"+
    "7 - Neveras de consumo C internacinales \n"+
    "8 - Imprimir factura \n" +
    "9 - Imprimir inventario \n"+
    "10- SALIR";

function boton1(){
    let capacidad;
    let tamano;
    let tDT;
    let newNevera;
    let newEletro;
    let newTele;
    document.write(mensajedeMenu);
    let elecionMenu = prompt(mensajedeMenu);  
    switch(elecionMenu){
        case "1" :
            newEletro = new Electrodomestico(false,"B");
            numerodeObjetos(newEletro,"E");
            break;
        case "2" :
            capacidad = prompt("De cuanta capacidad desea la Nevera?");
            capacidad=parseInt(capacidad);
            newNevera = new Nevera(false,"A",capacidad);
            numerodeObjetos(newNevera,"N");
            break;
        case "3" :
            tamano = prompt("DE cuento tamanio Quieres el TV?");
            tamano=parseInt(tamano);
            tDT = prompt("Quieres el tv con tDT ?");
            tDT = verTDT(tDT);
            newNevera = new Televisor(true,"C",tamano,tDT);
            numerodeObjetos(newNevera,"T");
            break;
        case "4" :
            tamano = prompt("DE cuento tamanio Quieres el TV?");
            tamano=parseInt(tamano);
            tDT = prompt("Quieres el tv con tDT ?");
            tDT = verTDT(tDT);
            newNevera = new Televisor(true,"B",tamano,tDT);
            numerodeObjetos(newNevera,"T");
            break;
        case "5" :
            tamano = prompt("DE cuento tamanio Quieres el TV?");
            tamano=parseInt(tamano);
            tDT = prompt("Quieres el tv con tDT ?");
            tDT = verTDT(tDT);
            newNevera = new Televisor(false,"A",tamano,tDT);
            numerodeObjetos(newNevera,"T");
            break;
        case "6" :
            newEletro = new Electrodomestico(true,"A");
            numerodeObjetos(newEletro,"E");
            break;
        case "7" :
            capacidad = prompt("De cuanta capacidad desea la Nevera?");
            capacidad=parseInt(capacidad);
            newNevera = new Nevera(true,"C",capacidad);
            numerodeObjetos(newNevera,"N");
            break;
        case "8":
            factura.mostrarFactura();
            break;
        case "9":
            inventario.imprimirInventario();
            break;
        case"10":
            break;
        default:
            boton1(); 
            break;
    }  
}     


function numerodeObjetos( obj ,tipe){
    console.log("INGRESO A NUMERO OBJETOS");
    let compra = prompt("el precio es de "+ obj.calcularPrecio() + " Cuantos desea comprar?");
    compra=parseInt(compra,10);
        if(compra > 0){           
            console.log(obj.consumo);
            console.log(obj.procedencia);
            if(tipe=="E"){
                inventario.quitarEletrodomestics(obj.consumo, obj.procedencia, compra);
                //Hacer if con retorno de la funcion quitar para conformar pago
                console.log("se llamo a agregar compra");
                factura.agregarCompra(obj,compra);
                boton1();
            }
            else if(tipe=="N"){
                inventario.quitarNeveras(obj.consumo, obj.procedencia, compra);
                factura.agregarCompra(obj,compra);
                boton1();
            }
            else if(tipe == "T"){
                inventario.quitarTelevisores(obj.consumo, obj.procedencia, compra);
                factura.agregarCompra(obj,compra);
                boton1();
            }
        } 

}

function verTDT(entrada){
    switch(entrada){
        case "si":
            return true;
        case "no":
            return false;
        default:
            return false;
    }

}

function boton2(){
    inventario.imprimirInventario();
}
