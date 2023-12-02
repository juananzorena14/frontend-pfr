import React from 'react'
import { Link } from "react-router-dom";
import '../css/carrito.css'


const CarritoScreen = () => {
  return (
    <div className="containe">
        <div className="row ">
            <div className=" carrito">
                <h1>Carrito vacio</h1>
            <Link type="button" className="btn btn-dark" to='/productos'>
              Comprar 
            </Link>
            </div>
            
        </div>
    </div>
  )
}

export default CarritoScreen

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [carrito, setCarrito] = useState([]);
//   const productos = [
//     { id: 1, nombre: 'Producto 1', precio: 10 },
//     { id: 2, nombre: 'Producto 2', precio: 20 },
//     { id: 3, nombre: 'Producto 3', precio: 30 },
//   ];

//   const agregarAlCarrito = (producto) => {
//     setCarrito([...carrito, producto]);
//   };

//   const calcularTotal = () => {
//     return carrito.reduce((total, producto) => total + producto.precio, 0);
//   };

//   return (
//     <div className="App">
//       <h1>Carrito de Compras</h1>
//       <div>
//         <h2>Productos Disponibles</h2>
//         <ul>
//           {productos.map((producto) => (
//             <li key={producto.id}>
//               {producto.nombre} - ${producto.precio}
//               <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h2>Carrito</h2>
//         <ul>
//           {carrito.map((producto) => (
//             <li key={producto.id}>
//               {producto.nombre} - ${producto.precio}
//             </li>
//           ))}
//         </ul>
//         <p>Total: ${calcularTotal()}</p>
//       </div>
//     </div>
//   );
// }

// export default App;
