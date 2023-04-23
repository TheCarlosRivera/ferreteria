

//funcion para  formatear precio a moneda local
const formatterPeso = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  minimumFractionDigits: 0
})


let html = "";

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
    <div class='items-productos position-relative col-12 col-sm-4 col-md-4 col-xl-3'>
      <div class='card card-producto overflow-hidden h-100 hover-shadow' onclick='mostrarDetalle(${this.id})' data-mdb-toggle="modal" data-mdb-target="#exampleModal">
        <div class="row g-0">
        <div class='content_img col-4 col-sm-12'>
          <img src='${this.img}' class='img-fluid' alt='${this.nombre}'/>
        </div>
        <div class='card-body col-8 col-sm-12'>
          <h6 class='card-text lh-sm mb-3 text-uppercase'>${this.marca}</h6>
          <h6 class='card-text titulo lh-sm'>${this.nombre}</h6s>
          <h5 class='card-text m-0 precio d-flex align-items-center justify-content-between'> 
          ${this.precio}           
          </h5>
        </div>
        </div>
      </div>
      <button type="button" class="btn btn-success btn-floating">
        <i class="fas fa-cart-plus" style="font-size: 16px"></i>
      </button>  
    </div>      
  `; 

  }
}


const Allproductos = async () =>{
  
  await fetch('js/productos.json')
  .then((response) => response.json())
  .then((data) => {

    //desordenando aleatoriamente el array
    data.sort(function() { return Math.random() - 0.5 });

    //imprimiendo los productos
    data.forEach(element => {

      //formateando precio a moneda local y reemplanzado pulgadas por "
      let precio = formatterPeso.format(element.precio);
      let nombre = element.nombre.replace(" pulgadas", '"');

      //enviando datos al cuerpo html  
      let bodyHtml = new cuerpo(`${element.id}`, `${element.img_1}`, `${element.marca}`, `${nombre}`, `${precio}`);

    });
    document.getElementById("imp_productos").innerHTML = html;
  });

};

Allproductos();

//filtrando por categorias
const categorias = document.querySelectorAll('.item-categoria');
categorias.forEach(category => {
  category.addEventListener('click', function(){
    
    //removiendo el menu en mobile
    closeFiltros()

    //limpiando el html
    html = "";

    if(category.textContent == "Todos")
    {
      Allproductos();
    }
    else
    {
      //removiendo todas las clases active
      categorias.forEach(e => { e.classList.remove("active"); });

      //añadiendo la clase active
      category.classList.add("active");

      fetch('js/productos.json')
      .then((response) => response.json())
      .then((data) => {    
        
        data.forEach(function(element) {
          
          let categ = element.categoria.indexOf(category.textContent);

          //formateando precio a moneda local y reemplanzado pulgadas por "
          let precio = formatterPeso.format(element.precio);
          let nombre = element.nombre.replace(" pulgadas", '"');

          if (element.categoria == category.textContent)
          {          
            //enviando datos al cuerpo html
            let bodyHtml = new cuerpo(`${element.id}`, `${element.img_1}`, `${element.marca}`, `${nombre}`, `${precio}`);
          }
        })

        document.getElementById("imp_productos").innerHTML = html;
        
      })
    }
  })
});

//buscador de producto
let busc = document.querySelector("#buscardor-productos");
busc.addEventListener('keyup', function(){

  if(busc.value !== null)
  {
    //limpiando el html
    html = "";
    
    fetch('js/productos.json')
    .then((response) => response.json())
    .then((data) => {    
      
      data.forEach(function(element) {
        
        let resul = element.nombre.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").indexOf(busc.value.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""));

        //formateando precio a moneda local y reemplanzado pulgadas por "
        let precio = formatterPeso.format(element.precio);
        let nombre = element.nombre.replace(" pulgadas", '"');

        if (resul !== -1)
        {          
          //enviando datos al cuerpo html
          let bodyHtml = new cuerpo(`${element.id}`, `${element.img_1}`, `${element.marca}`, `${nombre}`, `${precio}`);
        }
      })

      document.getElementById("imp_productos").innerHTML = html;    

  })

  }
})

//mostrando el detalle de los productos
const mostrarDetalle = (id) =>
{  
  if(!isNaN(id))
  {    
     fetch('js/productos.json')
     .then((response) => response.json())
     .then((data) => {    
       
       data.forEach(function(element) {
         
         //formateando precio a moneda local
         let precio = formatterPeso.format(element.precio);
 
         if (element.id == id)
         {          
            //imprimiendo datos en el modal

            let nombre = element.nombre.replace(" pulgadas", '"');

            document.querySelector("#img_1_producto").setAttribute('src', element.img_1);
            document.querySelector("#img_1_producto").setAttribute('alt', element.nombre);
            document.querySelector("#img_2_producto").setAttribute('src', element.img_2);
            document.querySelector("#img_2_producto").setAttribute('alt', element.nombre);
            document.querySelector("#img_3_producto").setAttribute('src', element.img_3);
            document.querySelector("#img_3_producto").setAttribute('alt', element.nombre);
            document.querySelector("#marca_producto").innerHTML = element.marca;
            document.querySelector("#nombre_producto").innerHTML = nombre;
            document.querySelector("#categoria_producto").innerHTML = element.categoria;
            document.querySelector("#ancho_producto").innerHTML = element.ancho;
            document.querySelector("#largo_producto").innerHTML = element.largo;
            document.querySelector("#peso_producto").innerHTML = element.peso;
            document.querySelector("#alto_producto").innerHTML = element.alto;
            document.querySelector("#precio_producto").innerHTML = precio;
         }
       })

   })   
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









