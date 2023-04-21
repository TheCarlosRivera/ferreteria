

//funcion para  formatear precio a moneda local
const formatterPeso = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  minimumFractionDigits: 0
})


let html = "";
const cuerpo = (id, img, marca, nombre, precio) =>
{
    html += `
    <div class='items-productos position-relative col-12 col-sm-6 col-md-4 col-xl-3'>
      <div class='card card-producto h-100 hover-shadow' onclick='mostrarDetalle(${id})' data-mdb-toggle="modal" data-mdb-target="#exampleModal">
        <div class='content_img'>
          <img src='${img}' class='img-fluid' alt='${nombre}'/>
        </div>
        <div class='card-body'>
          <p class='card-text lh-sm mb-3'>${marca}</p>
          <p class='card-text titulo lh-sm'>${nombre}</p>
          <h5 class='card-text m-0 precio d-flex align-items-center justify-content-between'> 
          ${precio}           
          </h5>
        </div>
      </div>
      <button type="button" class="btn btn-success btn-floating">
        <i class="fas fa-cart-plus" style="font-size: 16px"></i>
      </button>  
    </div>      
  `; 
}

const Allproductos = async () =>{
  
  await fetch('js/productos.json')
  .then((response) => response.json())
  .then((data) => {

    //desordenando aleatoriamente el array
    data.sort(function() { return Math.random() - 0.5 });

    //imprimiendo los productos
    data.forEach(element => {

      //formateando precio a moneda local
      let precio = formatterPeso.format(element.precio);

      //enviando datos al cuerpo html
      cuerpo(`${element.id}`, `${element.img_1}`, `${element.marca}`, `${element.nombre}`, `${precio}`);

    });
    document.getElementById("imp_productos").innerHTML = html;
  });

};

Allproductos();

//filtrando por categorias
const categorias = document.querySelectorAll('.item-categoria');
categorias.forEach(category => {
  category.addEventListener('click', function(){
    
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
          
          let categ = element.tipo.indexOf(category.textContent);

          //formateando precio a moneda local
          let precio = formatterPeso.format(element.precio);

          if (element.tipo == category.textContent)
          {          
            //enviando datos al cuerpo html
            cuerpo(`${element.id}`, `${element.img_1}`, `${element.marca}`, `${element.nombre}`, `${precio}`);
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
        
        let resul = element.nombre.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").indexOf(busc.value);

        //formateando precio a moneda local
        let precio = formatterPeso.format(element.precio);

        if (resul !== -1)
        {          
          //enviando datos al cuerpo html
          cuerpo(`${element.id}`, `${element.img_1}`, `${element.marca}`, `${element.nombre}`, `${precio}`);
        }
      })

      document.getElementById("imp_productos").innerHTML = html;    

  })

  }
})

const buscarProductos = () =>
{
  input = document.getElementById("buscardor-productos").value;

 
}

/*
class productos
{
  constructor(id, tipo, titulo, descripcion, url_img)
  {
    this.id = id;
    this.tipo = tipo;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.url_img = url_img;

    Allproductos.push({
      id: this.id, 
      tipo: this.tipo,
      titulo: this.titulo,
      descripcion: this.descripcion,
      url_img: this.url_img
    });
  }
}
*/


//desordenando aleatoriamente el array
//Allproductos.sort(function() { return Math.random() - 0.5 });

//mostrando todos los productos
/*
const mostrarProductos = () => {
  let html='';
  Allproductos.forEach(function(element) {
  
    html += `
      <div class='col-lg-4 col-xxl-3'>
      <div class='card card-producto h-100 hover-shadow'>
        <img src='${element.url_img}' class='card-img-top' alt='Fissure in Sandstone'/>
        <div class='card-body'>
          <h5 class='card-title'>${element.titulo}</h5>
          <p class='card-text m-0'>Categoría: ${element.tipo}</p>
          <p class='card-text m-0'>Descripción: ${element.descripcion}</p>
        </div>
      </div>
    </div>      
    `;
  })
  document.getElementById("imp_productos").innerHTML = html;

}
mostrarProductos();
*/







