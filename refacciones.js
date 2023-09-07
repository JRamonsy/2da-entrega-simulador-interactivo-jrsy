  // CLASE REFACCIONES
class Refacciones {
  // EL CONSTRUCTOR INICIA LOS SIGUIENTES ATRIBUTOS:
  constructor(clave, nombre, precio, disponibles) {
    this.clave = clave;        
    this.nombre = nombre;      
    this.precio = precio;      
    this.disponibles = disponibles;
  }
  // FIN DE CONSTRUCTOR

  // AQUI EL METODO PARA MOSTRAR LOS DATOS DE LA REFACCION
  get_datos() {
    console.log("<-- REFACCION -->");
    console.log("Clave: ", this.clave);          
    console.log("Nombre: ", this.nombre);        
    console.log("Precio: ", this.precio);        
    console.log("Disponibles: ", this.disponibles);  // Muestra la cantidad disponibles en inventario
    console.log("");
  }
  // FIN DEL METODO PARA MOSTRAR DATOS

  // AQUI EL METODO PARA VALIDAR SI HAY UNA REFACCION DISPONIBLE
  get_disponibles() {
    if (this.disponibles <= 0) {
      return false;  
    } else {
      return true;   
    }
  }
  // FIN DEL METODO PARA VALIDAR 

  // METODO PARA ACTUALIZAR LA CANTIDAD DE REFACCIONES DISPONIBLES DESPUES DE UNA CONMPRA
  update_disponibles(unidades) {
    if (this.disponibles >= unidades) {
      this.disponibles = this.disponibles - unidades;  
      return true;  
    } else {
      console.log("No tenemos mas piezas disponibles por el momento");
      console.log("Disponibles : ", this.disponibles);  
      return false;  
    }
  }
}
  //FIN DEL METODO PARA ACTUALIZAR LA CANTIDAD DE REFACCIONES

  //ALTA DE PRODUCTOS//
let listaProductos = [];

listaProductos.push(new Refacciones(11, "Disco", 1200, 10));
listaProductos.push(new Refacciones(12, "Balatas", 600, 10));
listaProductos.push(new Refacciones(13, "Amortiguador", 1800, 10));
listaProductos.push(new Refacciones(14, "Bieleta", 700, 10));
listaProductos.push(new Refacciones(15, "Rotula", 500, 10));
listaProductos.push(new Refacciones(16, "Horquilla", 1100, 10));
listaProductos.push(new Refacciones(17, "Liquido", 80, 10));
listaProductos.push(new Refacciones(18, "Estabilizador", 350, 10));
listaProductos.push(new Refacciones(19, "Terminal", 300, 10));
listaProductos.push(new Refacciones(20, "Flecha", 1800, 10));
  //FIN ALTA PRODUCTOS//

console.log("LISTA DE REFACCIONES");

  //SIMULO UNA COMPRA DEL PRODUCTO//
function buscaProducto(producto) {
  return producto.clave == compraUsuario;
}
let compraUsuario = "";
while (compraUsuario != "Fin") {
  compraUsuario = prompt("Ingrese la clave de la refacción que desea comprar");
  if (compraUsuario != "Fin") {
    console.log("Clave de la refacción seleccionada: " + compraUsuario);
    let resultado_find = listaProductos.find(buscaProducto);
    if (resultado_find != undefined) {
      if (resultado_find.get_disponibles()) {
        let unidades = parseInt(prompt("¿Cuantas piezas desea?"));
        console.log("Cantidad de piezas seleccionadas: " + unidades);
        let precioTotal = resultado_find.precio * unidades;
        let metodoPago = prompt("¿Su pago será en efectivo o tarjeta? NOTA: 5% de descuento al pagar con efectivo.");
        if (metodoPago === "efectivo") {
          let descuento = precioTotal * 0.05;
          precioTotal -= descuento;
          console.log("Descuento (5%):" + descuento);
        }
        console.log("Precio total de la compra:" + precioTotal);
        console.log("Método de pago: " + metodoPago);        
        if (resultado_find.update_disponibles(unidades)) {
          console.log("Gracias por su compra");
          for (let producto of listaProductos) {
            if (producto.disponibles > 0) {
              producto.get_datos();
            }
          }
        }
      }
    } else {
      console.log("Producto no encontrado: ", compraUsuario);
    }
  }
}
  //FIN DE SIMULACION DE COMPRA



