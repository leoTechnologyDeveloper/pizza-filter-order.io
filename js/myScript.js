 
 // VARIABLES  ***********************************
 
 const selectTamanio  = document.querySelector('#tamaño');
 const selectPorciones  = document.querySelector('#porciones');
 const selectBebida  = document.querySelector('#bebida');
 const selectExtraqueso  = document.querySelector('#extraqueso');
 const selectIngrediente1  = document.querySelector('#ingrediente1');
 const selectIngrediente2  = document.querySelector('#ingrediente2');
 const selectIngrediente3  = document.querySelector('#ingrediente3');
 const resultadoContainer = document.querySelector('#resultadoContainer');
 const btnReset = document.querySelector("#formulario button[type='reset']");
 

// OBJETOS **************************************************

const datosBusqueda = {     
    tamanio: '',
    porciones: '',
    bebida: '',
    extraqueso: '',
    ingrediente1: '',
    ingrediente2: '',
    ingrediente3: ''
  }


 // EVENTOS **************************************************

// Evento 1 - EVENTO INICIAL DE CARGA DE PAGINA COMPLETA

document.addEventListener('DOMContentLoaded',() => {
    // muestra los datos de las pizzas en el html
   //mostrarPizzas(pizzasInStock);
    
  
    })
  

// Evento 2 -  Event Listeners para selección

selectTamanio.addEventListener('change', e => {
    datosBusqueda.tamanio = e.target.value;
    console.log(datosBusqueda);
    filtrarPizza();
  })

  selectPorciones.addEventListener('change', e => {
    datosBusqueda.porciones = parseInt(e.target.value);
    console.log(datosBusqueda);
    filtrarPizza();
  })

  selectBebida.addEventListener('change', e => {
    datosBusqueda.bebida = e.target.value;
    console.log(datosBusqueda);
    filtrarPizza();
  })

  selectExtraqueso.addEventListener('change', e => {
    datosBusqueda.extraqueso = e.target.value;
    console.log(datosBusqueda);
    filtrarPizza();
  })

  selectIngrediente1.addEventListener('change', e => {
    datosBusqueda.ingrediente1 = e.target.value;
    console.log(datosBusqueda);
    filtrarPizza();
  })

  selectIngrediente2.addEventListener('change', e => {
    datosBusqueda.ingrediente2 = e.target.value;
    console.log(datosBusqueda);
    filtrarPizza();
  })

  selectIngrediente3.addEventListener('change', e => {
    datosBusqueda.ingrediente3 = e.target.value;
    console.log(datosBusqueda);
    filtrarPizza();
  })

  btnReset.addEventListener('click', function(e) {
    resetearFormulario();
    limpiarHtml();
  });  
  
// FUNCIONES **************************************************

// FUNCION 1 - Mostrar Pizzas

function mostrarPizzas(pizzas) {
    limpiarHtml(); // Para elimnar el Html previo
    pizzas.forEach(pizza => {
      const{tamanio, porciones, bebida, extraqueso, ingrediente1, ingrediente2, ingrediente3, imagen} = pizza;
      
      const imageContainer = document.createElement('picture');
      const imagePizza = document.createElement('img');
      const pizzaParrafo = document.createElement('P');
      const imagePlusDescription = document.createElement('div');
      
      imageContainer.classList.add('p-2');
      
      imagePizza.src = imagen;
      imagePizza.classList.add('object-cover', 'md:w-full');
      
      pizzaParrafo.textContent = 
      ` 
      Tamaño : ${tamanio},  Porciones : ${porciones}, Bebida :  ${bebida}, Extraqueso: ${extraqueso}, Ingrediente 1 : ${ingrediente1}, Ingrediente 2 : ${ingrediente2}, Ingrediente 3 : ${ingrediente3}
      `;

      pizzaParrafo.classList.add('my-3', 'bg-gray-50', 'flex', 'justify-center', 'items-center');
      imageContainer.appendChild(imagePizza)
      imagePlusDescription.classList.add('flex', 'flex-col',  'md:flex-row-reverse', 'overflow-hidden', 'md:gap-2', 'md:p-2');
      imagePlusDescription.appendChild(imageContainer);
      imagePlusDescription.appendChild(pizzaParrafo);
 
       resultadoContainer.appendChild(imagePlusDescription); 
      })
  }

  // FUNCION 2 - Limpiar el HTML 

function limpiarHtml() {
    while (resultadoContainer.firstChild) {
      resultadoContainer.removeChild(resultadoContainer.firstChild)
  }
  }
  

  // FUNCION 3 - Filtra la Búsqueda Total

function filtrarPizza() {


    const resultado = pizzasInStock.filter(filtrarTamanio).filter(filtrarPorciones).filter(filtrarBebida).filter(filtrarExtraqueso).filter(filtrarIngrediente1).filter(filtrarIngrediente2).filter(filtrarIngrediente3)
    ;
    console.log("Imprimiendo resultado");
    console.log(resultado);
  
    if (resultado.length) {
      
      mostrarPizzas(resultado);
      
    } else {
      limpiarHtml(); // Para elimnar el Html previo
      noResultado();
      
    }
    console.log("Filtrando Pizza");
    // mostrarPizzas(resultado);
  }
  
  // FUNCION 4 - NO RESULTADO DE BUSQUEDA

  function noResultado() {
    const parrafoNoResultado = document.createElement('P');
    parrafoNoResultado.textContent = 
    ` 
    No existe una Pizza con las cualidades solicitadas
    `;
    parrafoNoResultado.style.color = "red";
    parrafoNoResultado.style.background = "darkblue";
    parrafoNoResultado.style.padding = "10px"
    resultadoContainer.appendChild(parrafoNoResultado); 
  }
  

  // FUNCION 5 - Filtra por Tamanio

function filtrarTamanio(pizza) {
    const {tamanio} = datosBusqueda;
    if (tamanio) {
      return pizza.tamanio === tamanio;
    }
      return pizza;
  }

    // FUNCION 6 - Filtra por Porciones

function filtrarPorciones(pizza) {
    const {porciones} = datosBusqueda;
    if (porciones) {
      return pizza.porciones === porciones;
    }
      return pizza;
  }
    // FUNCION 7 - Filtra por Bebida

function filtrarBebida(pizza) {
    const {bebida} = datosBusqueda;
    if (bebida) {
      return pizza.bebida === bebida;
    }
      return pizza;
  }
    // FUNCION 8 - Filtra por Extraqueso

function filtrarExtraqueso(pizza) {
    const {extraqueso} = datosBusqueda;
    if (extraqueso) {
      return pizza.extraqueso === extraqueso;
    }
      return pizza;
  }
    // FUNCION 9 - Filtra por Ingrediente 1

function filtrarIngrediente1(pizza) {
    const {ingrediente1} = datosBusqueda;
    if (ingrediente1) {
      return pizza.ingrediente1 === ingrediente1;
    }
      return pizza;
  }
    // FUNCION 10 - Filtra por Ingrediente 2

function filtrarIngrediente2(pizza) {
    const {ingrediente2} = datosBusqueda;
    if (ingrediente2) {
      return pizza.ingrediente2 === ingrediente2;
    }
      return pizza;
  }
    // FUNCION 11 - Filtra por Ingrediente 3

function filtrarIngrediente3(pizza) {
    const {ingrediente3} = datosBusqueda;
    if (ingrediente3) {
      return pizza.ingrediente3 === ingrediente3;
    }
      return pizza;
  }

 // FUNCION 12 - Resetear Formulario
  function resetearFormulario() {
    datosBusqueda.porciones = "";
    datosBusqueda.bebida = "";
    datosBusqueda.extraqueso = "";
    datosBusqueda.ingrediente1 = "";
    datosBusqueda.ingrediente2 = "";
    datosBusqueda.ingrediente3 = "";
    // formulario.reset();
    
  }