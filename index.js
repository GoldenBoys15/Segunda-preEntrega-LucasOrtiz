console.log(products);

const joyeria = products.filter(products => products.category === "jewelery");//filtrar solo las joyerias

const electronicos= products.filter(products => products.category === "electronics");//filtrar solo los electronicos

const categorias_juntas= [];//creacion de lista vacia

const nombres_juntos= [...joyeria, ...electronicos];

const junto_ordenado= nombres_juntos.slice().sort((a,b) => a.title.localeCompare(b.title));

function organizarProductos(array){
    array.sort();
    let lista_ordenada = "";
    for (let i = 0; i < array.length; i++){
        lista_ordenada += (i+1) + ". "+ array[i];
        if (i < array.length - 1){
            lista_ordenada += "\n";
        }
    }
    return lista_ordenada;
}

//agregar las categorias de los productos en una lista y que no se repitan
function agregarCategoria(productos, array){
    productos.forEach(products => {
        if(!array.includes(products.category)){
            array.push(products.category)
        }
    });
}

//juntar esas categorias en la lista vacia
agregarCategoria(joyeria, categorias_juntas);
agregarCategoria(electronicos, categorias_juntas);

const nombres_productos = nombres_juntos.map(producto => producto.title);

const nombres_ordenados = organizarProductos(nombres_productos)
//bienvenida 
alert("¡hola!, Bienvenido al ecommerce.");

//alerta de categorias de productos disponibles
alert(`las categorías de los productos disponibles son: ${categorias_juntas.join(' y ')}`);

alert(`los productos disponibles son: \n${nombres_ordenados}`);

let producto_elegido;
let producto_encontrado = false
let producto_seleccionado;

do { 
    producto_elegido = prompt("Por favor, ingrese el número del producto que desea comprar: ")
    producto_elegido = parseInt(producto_elegido);

    if (!isNaN(producto_elegido) && producto_elegido >= 1 && producto_elegido <=  nombres_ordenados.length){
        producto_encontrado = true;
        producto_seleccionado = junto_ordenado[producto_elegido - 1];
    } else { 
        alert ("por favor, ingrese un número válido de producto.");
    }
}while (!producto_encontrado);

const confirmacion = confirm(`nombre: ${producto_seleccionado.title}\nDescipcion: ${producto_seleccionado.description} \nPrecio: ${producto_seleccionado.price}\n\n¿desea completar la compra?`);


if (confirmacion){
    //fecha de entrega sumando 3 dias
    const fecha_entrega = new Date();
    fecha_entrega.setDate(fecha_entrega.getDate() + 3);

    const options = {year:'numeric', month: 'long', day: 'numeric' };
    const fecha_entrega_reseteada = fecha_entrega.toLocaleDateString(undefined, options);

    alert(`¡Compra completada con exito!, gracias por su compra. \nFecha de entrega estimada: ${fecha_entrega_reseteada}`);
}else{
    alert("Compra cancelada. Esperamos verte pronto.");
}