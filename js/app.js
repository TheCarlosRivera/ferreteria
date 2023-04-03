
const productos = 
[
  {tipo:"Habitación", titulo:"Titulo sobre habitación", descrip:"habitación", img:"img/habitacion.jpg", },
  {tipo:"Cocina", titulo:"Titulo sobre cocina", descrip:"cocina", img:"img/cocina.jpg"},
  {tipo:"Living", titulo:"Titulo sobre living", descrip:"living", img:"img/living.jpg"},
  {tipo:"Baño", titulo:"Titulo sobre baño", descrip:"baño", img:"img/baño.jpg"},
  {tipo:"Oficina", titulo:"Titulo sobre oficina", descrip:"oficina", img:"img/oficina.jpg"},

  {tipo:"Cocina", titulo:"Titulo sobre cocina 2", descrip:"cocina 2", img:"img/cocina-2.jpg"},
  {tipo:"Baño", titulo:"Titulo sobre baño 2", descrip:"baño 2", img:"img/baño-2.jpg"},
  {tipo:"Living", titulo:"Titulo sobre living 2", descrip:"living 2", img:"img/living-2.jpg"},
];

const categorias = document.querySelectorAll('.item-categoria');
categorias.forEach(categoria => {
  categoria.addEventListener('click', function(){
    //removiendo todas las clases active
    categorias.forEach(e => { e.classList.remove("active"); });

    //añadiendo la clase active
    categoria.classList.add("active");

    //enviando la categoria a la funcion e imprimiendola en la consola
    buscarCategory(categoria.textContent);
    console.log(categoria.textContent)
  })
});

//mostrando todos los productos
const mostrarProductos = () => {
  let html='';
  productos.forEach(function(element) {
    html += `
      <div class='col-lg-4 col-xxl-3'>
      <div class='card card-producto h-100 hover-shadow'>
        <img src='${element.img}' class='card-img-top' alt='Fissure in Sandstone'/>
        <div class='card-body'>
          <h5 class='card-title'>${element.titulo}</h5>
          <p class='card-text m-0'>Categoría: ${element.tipo}</p>
          <p class='card-text m-0'>Descripción: ${element.descrip}</p>
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
    let confirmacion = confirm("¿Seguro quieres mostrar todos?");
    if(confirmacion)
    {
      mostrarProductos();
    }
  }
  else{
    productos.forEach(function(element) {
      let categ = element.tipo.indexOf(categoria);
      if (categ !== -1)
      {
         html += `
         <div class='col-lg-4 col-xxl-3'>
         <div class='card card-producto h-100 hover-shadow'>
           <img src='${element.img}' class='card-img-top' alt='Fissure in Sandstone'/>
           <div class='card-body'>
             <h5 class='card-title'>${element.titulo}</h5>
             <p class='card-text m-0'>Categoría: ${element.tipo}</p>
             <p class='card-text m-0'>${element.descrip}</p>
           </div>
         </div>
       </div>        
        `;
      }
    })
    document.getElementById("imp_productos").innerHTML = html;
  }
} 


//buscador de producto por medio del prompt
let inputPrompt = document.querySelector("#buscardor-productos");
inputPrompt.addEventListener('click', function(){
  let name = prompt("Ingresa el nombre a buscar");
  buscarProductos(name);
})

const buscarProductos = (name) =>
{
  if(name !== null)
  {
    let html='';
    productos.forEach(function(element) {
      let categ = element.titulo.indexOf(name);
      if (categ !== -1)
      {
         html += `
         <div class='col-lg-4 col-xxl-3'>
         <div class='card card-producto h-100 hover-shadow'>
           <img src='${element.img}' class='card-img-top' alt='Fissure in Sandstone'/>
           <div class='card-body'>
             <h5 class='card-title'>${element.titulo}</h5>
             <p class='card-text m-0'>Categoría: ${element.tipo}</p>
             <p class='card-text m-0'>${element.descrip}</p>
           </div>
         </div>
       </div>        
        `;
      }
    })

    document.getElementById("imp_productos").innerHTML = html; 
  }
 
}


