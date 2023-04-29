
//variables
let Carrito = [];
let html = "";
let html_carrito = "";

let shop = document.querySelectorAll(".shopingCard");
let productShop = JSON.parse(localStorage.getItem("Carrito"));
let shop1 = document.querySelector("#shop1");
let shop2 = document.querySelector("#shop2");
let valor_produts = 0;

let notify = document.querySelector("#notify");
let loaders = document.querySelector("#loaders");

let totalCompra = 0;
let totalProduct = 0;
let totalProductOne = 0;
let totalFinal = 0;


//api
const ApiProductos = async () =>
{
  loaders.classList.remove("d-none");
  try 
  {
    const response = await fetch('js/productos.json');
    const data = await response.json();
    return data;
  } 
  catch (error)
  {
    console.error(error)
  }
}


//funcion para  formatear precio a moneda local
const formatterPeso = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  minimumFractionDigits: 0
})


//agregando numero al carrito
const countItems = () => {
  setTimeout(() => {
    let exist = JSON.parse(localStorage.getItem("Carrito"));
    if(exist)
    {
      for(let total in exist)
      {
        valor_produts += exist[total]['cantidad'];
      }

      if(valor_produts == 0)
      {
        shop1.classList.remove("active");
        shop2.classList.remove("active");     
      }
      else
      {
        shop1.classList.add("active");
        shop2.classList.add("active");
      }

      shop1.innerHTML = valor_produts;
      shop2.innerHTML = valor_produts;
      document.querySelector("#totalProduct").innerHTML = '<i class="fas fa-cart-plus me-2"></i>'+valor_produts;
      valor_produts = 0;
    }
  }, 500);
}
countItems();

//notificaciones
const addNotify = (bg, clase, texto) =>
{
  if(bg == 'bg-success')
  {
    notify.firstElementChild.classList.remove('bg-danger');
  }
  else if(bg == 'bg-danger')
  {
    notify.firstElementChild.classList.remove('bg-success');
  }
  notify.firstElementChild.classList.add(`${bg}`);
  notify.classList.add("active");
  notify.firstElementChild.lastElementChild.innerHTML = `<i class="${clase}"></i>${texto}`;

  setTimeout(() => {
    document.querySelector("#notify").classList.remove("active");
  }, 5000); 
}

//cuerpo de los productos
class cuerpo 
{
  constructor(id, img, marca, nombre, precio)
  {
    this.id = id;
    this.img = img;
    this.marca = marca;
    this.nombre = nombre;
    this.precio = precio;

    return html += `
    <div class='items-productos position-relative col-12 col-sm-6 col-xl-4 col-xxl-3'>
      <div class='card card-producto overflow-hidden h-100 hover-shadow' onclick='mostrarDetalle(${this.id})' data-mdb-toggle="modal" data-mdb-target="#exampleModal">
        <div class="row g-0">
        <div class='content_img col-4 col-sm-12'>
          <img src='${this.img}' class='img-fluid' alt='${this.nombre}'/>
        </div>
        <div class='card-body col-8 col-sm-12'>
          <p class='card-text lh-sm mb-3 text-uppercase'>${this.marca}</p>
          <h5 class='card-text titulo lh-sm'>${this.nombre}</h5>
          <h5 class='card-text m-0 precio d-flex align-items-center justify-content-between'> 
          ${this.precio}           
          </h5>
        </div>
        </div>
      </div>
      <button type="button" class="btn btn-success btn-floating" onclick="addProducto(${this.id})">
        <i class="fas fa-cart-plus" style="font-size: 16px"></i>
      </button>  
    </div>      
  `; 

  }
}

class carrito 
{
  constructor(id, img, marca, nombre, precio, cantidad)
  {
    this.id = id;
    this.img = img;
    this.marca = marca;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;

    return html_carrito += `
      <div class='items-productos position-relative'>
      <div class='card card-producto overflow-hidden h-100'>
        <div class="row g-0">
        <div class='content_img col-4'>
          <img src='${this.img}' class='img-fluid' alt='${this.nombre}'/>
        </div>
        <div class='card-body col-8'>
          <p class='card-text lh-sm text-uppercase'>${this.marca}</p>
          <h5 class='card-text titulo lh-sm'>${this.nombre}</h5>
          <h6 class='card-text m-0 mb-3'>Cantidad: ${this.cantidad}</h6>
          <h5 class='card-text m-0 precio'>${this.precio}</h5>
        </div>
        <button type="button" class="btn btn-danger btn-floating" onclick="deleteProducto(${this.id})">
          <i class="fas fa-trash-can" style="font-size: 16px"></i>
        </button> 
        </div>
      </div>
    </div>     
    `; 

  }
}



//mostrando todos los productos
const Allproductos = (productos) =>{

  //desordenando aleatoriamente el array
  productos.sort(function() { return Math.random() - 0.5 });

  productos.forEach(element => {

  //formateando precio a moneda local y reemplanzado pulgadas por "
  let precio = formatterPeso.format(element.precio);
  let nombre = element.nombre.replace(" pulgadas", '"');
 
  //enviando datos al cuerpo html  
  new cuerpo(`${element.id}`, `${element.img}`, `${element.marca}`, `${nombre}`, `${precio}`);   

  });

  setTimeout(() => {
    //requitando el loaders
    loaders.classList.add("d-none");
    
    //imprimiendo el resultado
    document.getElementById("imp_productos").innerHTML = html;
  }, 500);

};

ApiProductos().then(productos =>  Allproductos(productos));


//filtrando por categorias
const categorias = document.querySelectorAll('.item-categoria');
categorias.forEach(category => {
  category.addEventListener('click', function(){
    
    //removiendo el menu en mobile
    closeFiltros()

    //limpiando el html
    html = "";

    //removiendo todas las clases active
    categorias.forEach(e => { e.classList.remove("active"); });

    //añadiendo la clase active
    category.classList.add("active");

    if(category.textContent == "Todos")
    {
      ApiProductos().then(productos =>  Allproductos(productos));
    }
    else
    {
      ApiProductos().then(productos =>{

        productos.forEach(function(element) {
          
          let categ = element.categoria.indexOf(category.textContent);

          //formateando precio a moneda local y reemplanzado pulgadas por "
          let precio = formatterPeso.format(element.precio);
          let nombre = element.nombre.replace(" pulgadas", '"');

          if (element.categoria == category.textContent)
          {          
            //enviando datos al cuerpo html
            let bodyHtml = new cuerpo(`${element.id}`, `${element.img}`, `${element.marca}`, `${nombre}`, `${precio}`);
          }
        })

        setTimeout(() => {
          //requitando el loaders
          loaders.classList.add("d-none");
          
          //imprimiendo el resultado
          document.getElementById("imp_productos").innerHTML = html;
        }, 500);

      });
    }
  })
});



//buscador de producto
let busc = document.querySelector("#buscardor-productos");
document.querySelector("#formBusq").addEventListener("submit", function(e){
  e.preventDefault();
});

busc.addEventListener('keyup', function(){

  if(busc.value !== null)
  {
    html = "";

    ApiProductos().then(productos =>{
      productos.forEach(function(element) {        
        let resul = element.nombre.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").indexOf(busc.value.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""));

        //formateando precio a moneda local y reemplanzado pulgadas por "
        let precio = formatterPeso.format(element.precio);
        let nombre = element.nombre.replace(" pulgadas", '"');

        if (resul !== -1)
        {          
          //enviando datos al cuerpo html
          new cuerpo(`${element.id}`, `${element.img}`, `${element.marca}`, `${nombre}`, `${precio}`);
        }
      })

      setTimeout(() => {
        //requitando el loaders
        loaders.classList.add("d-none");
        
        //imprimiendo el resultado
        document.getElementById("imp_productos").innerHTML = html;
      }, 500);

    });

  }
})


//mostrando el detalle de los productos
const mostrarDetalle = (id) =>
{  
  if(!isNaN(id))
  {    
    ApiProductos().then(productos =>{
      let registro = productos.find(e => e.id === id);
      
      //formateando precio a moneda local
      let precio = formatterPeso.format(registro.precio);

      //imprimiendo datos en el modal
      let nombre = registro.nombre.replace(" pulgadas", '"');

      document.querySelector("#img_producto").setAttribute('src', registro.img);
      document.querySelector("#img_producto").setAttribute('alt', registro.nombre);
      document.querySelector("#marca_producto").innerHTML = registro.marca;
      document.querySelector("#nombre_producto").innerHTML = nombre;
      document.querySelector("#categoria_producto").innerHTML = registro.categoria;
      document.querySelector("#ancho_producto").innerHTML = registro.ancho;
      document.querySelector("#largo_producto").innerHTML = registro.largo;
      document.querySelector("#peso_producto").innerHTML = registro.peso;
      document.querySelector("#alto_producto").innerHTML = registro.alto;
      document.querySelector("#precio_producto").innerHTML = precio;
      document.querySelector("#btnAdd").innerHTML = `
      <button type="button" class="btn btn-success btn-floating" onclick="addProducto(${registro.id})">
      <i class="fas fa-cart-plus" style="font-size: 16px"></i>
      </button>
      `
      loaders.classList.add("d-none");
    });  
  }
}


//consultando productos en el carrito
const productosCarrito = () => {
  existentes = JSON.parse(localStorage.getItem("Carrito"));
  if(existentes)
  {

    existentes.forEach(function(element){
      let nombre = element.nombre.replace(" pulgadas", '"');
      let precio = element.precio * element.cantidad;

      //formateando precio a moneda local y reemplanzado pulgadas por "
      let totalPrecio = formatterPeso.format(precio); 

      //sumando los precios
      totalCompra += precio;
      
      new carrito(
        `${element.id}`, 
        `${element.img}`, 
        `${element.marca}`, 
        `${nombre}`, 
        `${totalPrecio}`,
        `${element.cantidad}`
        );  
    }); 

     //imprimiendo el resultado
     document.getElementById("listProductos").innerHTML = html_carrito;
     totalFinal = formatterPeso.format(totalCompra);
     document.querySelector("#totalPrice").innerHTML = 'Total: '+totalFinal;
     html_carrito = "";
     totalCompra = 0;
  }
}

//productosCarrito();


//agregando producto al carrito
const addProducto = (id) =>
{
  ApiProductos().then(productos =>{
    let existentes = JSON.parse(localStorage.getItem("Carrito"));
    let product_new = productos.find(e => e.id === id);

    if(existentes)
    {
      let product_exis = existentes.find(e => e.id === id);
      if(product_exis && product_exis.id == id)
      {
        let cantidad = product_exis.cantidad + 1;            
        product_exis.cantidad = cantidad;
      }
      else 
      {
        //agregando producto al array
        existentes.push(
          {
            'id': product_new.id, 
            'img': product_new.img,
            'marca': product_new.marca, 
            'nombre': product_new.nombre,
            'precio': product_new.precio,
            'cantidad': 1
          }
        );               
      }

      //almacenando productos al storage
      localStorage.setItem("Carrito", JSON.stringify(existentes));

    }
    else
    {
      Carrito.push(
        {
          'id': product_new.id, 
          'img': product_new.img,
          'marca': product_new.marca, 
          'nombre': product_new.nombre,
          'precio': product_new.precio,
          'cantidad': 1
        }
      );
      localStorage.setItem("Carrito", JSON.stringify(Carrito));
    }
  });

  countItems();
  loaders.classList.add("d-none");
  addNotify('bg-success', 'fas fa-check me-2', 'Producto agregado');


}


//eliminando producto
const deleteProducto = (id) =>
{
  const existentes = JSON.parse(localStorage.getItem("Carrito"));
  
  for (let i = 0; i < existentes.length; i++) {
    if (existentes[i].id === id) {
      existentes.splice(i, 1);
      break;
    }
  }

  existentes.forEach(function(element){
    let nombre = element.nombre.replace(" pulgadas", '"');
    let precio = element.precio * element.cantidad;

    //formateando precio a moneda local y reemplanzado pulgadas por "
    let totalPrecio = formatterPeso.format(precio); 

    //sumando los precios
    totalCompra += precio;
    
    new carrito(
      `${element.id}`, 
      `${element.img}`, 
      `${element.marca}`, 
      `${nombre}`, 
      `${totalPrecio}`,
      `${element.cantidad}`
      );  
  }); 

  //almacenando productos al storage
  localStorage.setItem("Carrito", JSON.stringify(existentes));

  //imprimiendo el resultado
  document.getElementById("listProductos").innerHTML = html_carrito;
  totalFinal = formatterPeso.format(totalCompra);
  document.querySelector("#totalPrice").innerHTML = 'Total: '+totalFinal;
  html_carrito = "";
  totalCompra = 0;

  countItems();
  addNotify('bg-danger', 'fas fa-xmark me-2', 'Producto eliminado');
}

//abriendo el carrito
const openShopingCard = (e) =>
{
  let productShopTwo = JSON.parse(localStorage.getItem("Carrito"));
  if(productShopTwo)
  {
    if(e == "open")
    {
      productosCarrito();
      document.body.style.overflowY = 'hidden';
      document.querySelector("#nav-shop").classList.add("active");
      setTimeout(() => {
        document.querySelector("#nav-shop").classList.add("bg");   
      }, 500);      
    }
    else if(e == "close")
    {
      document.body.style.overflowY = '';
      document.querySelector("#nav-shop").classList.remove("active");
      document.querySelector("#nav-shop").classList.remove("bg");   
    }
  }
  else
  {
    addNotify('bg-danger', 'fas fa-xmark me-2', 'El carrito está vacío');
  }
}


//abriendo el menú de filtros
const openFiltros = () =>
{
  $("#content__categorias").addClass("activar");
  $("#closeFiltros").removeClass("d-none");
  $("#openFiltros").addClass("d-none");
}

const closeFiltros = () =>
{
  $("#content__categorias").removeClass("activar");
  $("#closeFiltros").addClass("d-none");
  $("#openFiltros").removeClass("d-none");
}