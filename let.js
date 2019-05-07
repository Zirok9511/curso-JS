// otra forma de declarar una variable con su palabra reservado en JS es let, es una paabra conocida en typescrypt
let nombre ="Zirok"; //let permite definir variables limitando su alcance al bloque, declaracion  en donde se usa. Mientras que var no importa su hambito.
alert(nombre); 
// prueba con var
var numero = 95;
console.log(numero); //aqui el valor de numero se mantiene en 95
if(true){
    var numero = 11;
    console.log(numero);  //aqui cambia el valor a  11
}
console.log(numero);  //aqui el valor de numero se mantiene en 11 ya que se cambio en el if

// prueba con let
let texto="curso de JS ";
console.log(texto);
if(true){
    let texto ="se cambo la variable!"; //solo en este bloque se crea de nuevo la variable y solo aqui se aplica el cambio
    console.log(texto);
}
console.log(texto);