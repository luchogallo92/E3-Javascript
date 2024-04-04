const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

/////////////////////////////////////////////////////////

///Llamados a realizar
const formsearch = document.getElementById ('input_form')
const searchinput = document.getElementById ('pizzaboxsearch')
const renderpizza = document.querySelector ('.pizza-card')


/////////////////////////////////////
//Funcion INIT
const init = () => {
  searchinput.addEventListener('input', () => checktext(searchinput))
} 


//Funciones Auxiliares
const isEmpty = (input) => {
  
  return !input.value.trim().lenght
}

const Noexiste = () => {
  renderpizza.innerHTML
  return `<small>No existe ese producto</small>`
}

const pizzafinder = (id) => {
  for (const pizza of pizzas) {
    if (pizza.id === id) {
      return pizza;
    }
  }
  return null;
}

//Caja de busqueda
const checktext = (input) => {
  let valid = false;

  const inputValue = searchinput.value;
  const id = parseInt(inputValue);

  const pizza = pizzafinder(id);
  if (pizza) {
    renderpizza.innerHTML = rendercard(pizza);
  } else {
    renderpizza.innerHTML = Noexiste();
  }


  /// esto no me funca
  if (pizzas.ingredientes) {
    renderpizza.innerHTML = rendercard (pizzas);
  }

  return valid;
}



//Renderizado de las cards
const rendercard = (pizza) => {
  const {id, nombre, precio, ingredientes, imagen} = pizza


  return `
  <img src="${imagen}" alt="">
  <div class="pizza-info">
      <h4>${nombre}</h4>
      <span>${ingredientes}</span>
      <span>Precio $${precio}</span>
  </div>`
}

renderpizza.innerHTML = pizzas.map(rendercard).join('')
//////////////////
init ()