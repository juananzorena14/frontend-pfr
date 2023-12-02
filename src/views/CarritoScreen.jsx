import React from 'react'
import { Link } from "react-router-dom";
import  { useState } from 'react';

import '../css/carrito.css'


function Carrito() {
  const [carrito, setCarrito] = useState([]);
  const productosSeleccionados = async()=>{

  }
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };


  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
  };

  return (
    
    <div className="App">
      <h1>Carrito de Compras</h1>
      <div>
        <h2>Productos Disponibles</h2>
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} - ${producto.precio}
              <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Carrito</h2>
        <ul>
          {carrito.map((producto) => (
            <li key={producto.id}>
              {producto.nombre} - ${producto.precio}
            </li>
          ))}
        </ul>
        <p>Total: ${calcularTotal()}</p>
      </div>
    </div>
  );
}

export default Carrito;



// const CarritoScreen = () => {
//   return (
//     <div className="containe">
//         <div className="row ">
//             <div className=" carrito">
//                 <h1>Carrito vacio</h1>
//             <Link type="button" className="btn btn-dark" to='/productos'>
//               Comprar 
//             </Link>
//             </div>
            
//         </div>
//     </div>
//   )
// }

// export default CarritoScreen



