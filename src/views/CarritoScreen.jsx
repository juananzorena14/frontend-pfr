import React from 'react'
import { Link } from "react-router-dom";
import '../css/carrito.css'


const CarritoScreen = () => {
  return (
    <div className="containe">
        <div className="row ">
            <div className=" carrito">
                <h1>Carrito vacio</h1>
            <Link type="button" className="btn btn-dark" to='/pay'>
              Comprar 
            </Link>
            </div>
            
        </div>
    </div>
  )
}

export default CarritoScreen
