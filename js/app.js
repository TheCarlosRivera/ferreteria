
const Allproductos = [];

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

//habitaciones
const habitacion_1 = new productos(
  1, 'Habitaciones', 'Titulo sobre habitación', 'Habitaciones', 'img/habitacion-1.jpg'
)
const habitacion_2 = new productos(
  2, 'Habitaciones', 'Titulo sobre habitación', 'Habitaciones', 'img/habitacion-2.jpg'
)
const habitacion_3 = new productos(
  3, 'Habitaciones', 'Titulo sobre habitación', 'Habitaciones', 'img/habitacion-3.jpg'
)
const habitacion_4 = new productos(
  4, 'Habitaciones', 'Titulo sobre habitación', 'Habitaciones', 'img/habitacion-4.jpg'
)
const habitacion_5 = new productos(
  5, 'Habitaciones', 'Titulo sobre habitación', 'Habitaciones', 'img/habitacion-5.jpg'
)
const habitacion_6 = new productos(
  6, 'Habitaciones', 'Titulo sobre habitación', 'Habitaciones', 'img/habitacion-6.jpg'
)
const habitacion_7 = new productos(
  7, 'Habitaciones', 'Titulo sobre habitación', 'Habitaciones', 'img/habitacion-7.jpg'
)
const habitacion_8 = new productos(
  8, 'Habitaciones', 'Titulo sobre habitación', 'Habitaciones', 'img/habitacion-8.jpg'
)

//cocinas
const cocina_1 = new productos(
  1, 'Cocinas', 'Titulo sobre cocina', 'Cocinas', 'img/cocina-1.jpg'
)
const cocina_2 = new productos(
  2, 'Cocinas', 'Titulo sobre cocina', 'Cocinas', 'img/cocina-2.jpg'
)
const cocina_3 = new productos(
  3, 'Cocinas', 'Titulo sobre cocina', 'Cocinas', 'img/cocina-3.jpg'
)
const cocina_4 = new productos(
  4, 'Cocinas', 'Titulo sobre cocina', 'Cocinas', 'img/cocina-4.jpg'
)
const cocina_5 = new productos(
  5, 'Cocinas', 'Titulo sobre cocina', 'Cocinas', 'img/cocina-5.jpg'
)
const cocina_6 = new productos(
  6, 'Cocinas', 'Titulo sobre cocina', 'Cocinas', 'img/cocina-6.jpg'
)
const cocina_7 = new productos(
  7, 'Cocinas', 'Titulo sobre cocina', 'Cocinas', 'img/cocina-7.jpg'
)
const cocina_8 = new productos(
  8, 'Cocinas', 'Titulo sobre cocina', 'Cocinas', 'img/cocina-8.jpg'
)

//living
const living_1 = new productos(
  1, 'Living', 'Titulo sobre living', 'Living', 'img/living-1.jpg'
)
const living_2 = new productos(
  2, 'Living', 'Titulo sobre living', 'Living', 'img/living-2.jpg'
)
const living_3 = new productos(
  3, 'Living', 'Titulo sobre living', 'Living', 'img/living-3.jpg'
)
const living_4 = new productos(
  4, 'Living', 'Titulo sobre living', 'Living', 'img/living-4.jpg'
)
const living_5 = new productos(
  5, 'Living', 'Titulo sobre living', 'Living', 'img/living-5.jpg'
)
const living_6 = new productos(
  6, 'Living', 'Titulo sobre living', 'Living', 'img/living-6.jpg'
)
const living_7 = new productos(
  7, 'Living', 'Titulo sobre living', 'Living', 'img/living-7.jpg'
)
const living_8 = new productos(
  8, 'Living', 'Titulo sobre living', 'Living', 'img/living-8.jpg'
)

//baños
const baños_1 = new productos(
  1, 'Baños', 'Titulo sobre baño', 'Baños', 'img/baño-1.jpg'
)
const baños_2 = new productos(
  2, 'Baños', 'Titulo sobre baño', 'Baños', 'img/baño-2.jpg'
)
const baños_3 = new productos(
  3, 'Baños', 'Titulo sobre baño', 'Baños', 'img/baño-3.jpg'
)
const baños_4 = new productos(
  4, 'Baños', 'Titulo sobre baño', 'Baños', 'img/baño-4.jpg'
)
const baños_5 = new productos(
  5, 'Baños', 'Titulo sobre baño', 'Baños', 'img/baño-5.jpg'
)
const baños_6 = new productos(
  6, 'Baños', 'Titulo sobre baño', 'Baños', 'img/baño-6.jpg'
)
const baños_7 = new productos(
  7, 'Baños', 'Titulo sobre baño', 'Baños', 'img/baño-7.jpg'
)
const baños_8 = new productos(
  8, 'Baños', 'Titulo sobre baño', 'Baños', 'img/baño-8.jpg'
)

//comedores
const comedor_1 = new productos(
  1, 'Comedores', 'Titulo sobre comedor', 'Comedores', 'img/comedor-1.jpg'
)
const comedor_2 = new productos(
  2, 'Comedores', 'Titulo sobre comedor', 'Comedores', 'img/comedor-2.jpg'
)
const comedor_3 = new productos(
  3, 'Comedores', 'Titulo sobre comedor', 'Comedores', 'img/comedor-3.jpg'
)
const comedor_4 = new productos(
  4, 'Comedores', 'Titulo sobre comedor', 'Comedores', 'img/comedor-4.jpg'
)
const comedor_5 = new productos(
  5, 'Comedores', 'Titulo sobre comedor', 'Comedores', 'img/comedor-5.jpg'
)
const comedor_6 = new productos(
  6, 'Comedores', 'Titulo sobre comedor', 'Comedores', 'img/comedor-6.jpg'
)
const comedor_7 = new productos(
  7, 'Comedores', 'Titulo sobre comedor', 'Comedores', 'img/comedor-7.jpg'
)
const comedor_8 = new productos(
  8, 'Comedores', 'Titulo sobre comedor', 'Comedores', 'img/comedor-8.jpg'
)

//desordenando aleatoriamente el array
Allproductos.sort(function() { return Math.random() - 0.5 });

const categorias = document.querySelectorAll('.item-categoria');
categorias.forEach(categoria => {
  categoria.addEventListener('click', function(){
    //removiendo todas las clases active
    categorias.forEach(e => { e.classList.remove("active"); });

    //añadiendo la clase active
    categoria.classList.add("active");

    //enviando la categoria a la funcion e imprimiendola en la consola
    buscarCategory(categoria.textContent);
  })
});

//mostrando todos los productos
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

//filtrando por categoria
const buscarCategory = (categoria) =>
{
  let html='';
  if(categoria == "Todos")
  {
    mostrarProductos();
  }
  else{
    console.log(categoria)
    Allproductos.forEach(function(element) {
      let categ = element.tipo.indexOf(categoria);
      if (categ !== -1)
      {
         html += `
         <div class='col-lg-4 col-xxl-3'>
         <div class='card card-producto h-100 hover-shadow'>
           <img src='${element.url_img}' class='card-img-top' alt='Fissure in Sandstone'/>
           <div class='card-body'>
             <h5 class='card-title'>${element.titulo}</h5>
             <p class='card-text m-0'>Categoría: ${element.tipo}</p>
             <p class='card-text m-0'>${element.descripcion}</p>
           </div>
         </div>
       </div>        
        `;
      }
    })
    document.getElementById("imp_productos").innerHTML = html;
  }
} 


//buscador de producto
let busc = document.querySelector("#buscardor-productos");
busc.addEventListener('keyup', function(){
  buscarProductos();
})

const buscarProductos = () =>
{
  input = document.getElementById("buscardor-productos").value;
  if(input !== null)
  {
    let html='';
    Allproductos.forEach(function(element) {
      let categ = element.titulo.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").indexOf(input);
      if (categ !== -1)
      {
         html += `
         <div class='col-lg-4 col-xxl-3'>
         <div class='card card-producto h-100 hover-shadow'>
           <img src='${element.url_img}' class='card-img-top' alt='Fissure in Sandstone'/>
           <div class='card-body'>
             <h5 class='card-title'>${element.titulo}</h5>
             <p class='card-text m-0'>Categoría: ${element.tipo}</p>
             <p class='card-text m-0'>${element.descripcion}</p>
           </div>
         </div>
       </div>        
        `;
      }
    })

    document.getElementById("imp_productos").innerHTML = html; 
  }
 
}




