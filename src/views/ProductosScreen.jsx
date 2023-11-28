import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { listaProducto } from "../api/productos";
import imagenPortada from "../assets/portad.jpg";
import '../css/tarjetasPrincipal.css'

const ProductosScreen = () => {
  const [producEstado, setProducEstado] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoria } = useParams(); //categoria = bebidas

  useEffect(() => {
    traerProductosFiltrados();
  }, []);

  const traerProductosFiltrados = async () => {
    //ejecutaria getProductos para traer todos los productos
    const { productos } = await listaProducto();

    const productosFiltrados = productos.filter((produc) => {
      return produc.categoria === categoria;
    });

    setProducEstado(productosFiltrados);
    setLoading(false);
  };

  return (
    <div className="container-fluid">
      <div className="row d-block ">
     

{/* ---------------------esto agrege yo imagen portada --------------------*/}

         
            <div className="col-12 col-md portada   ">
              <div className=" col-4 col-md-5 mt-3 ">
                <h3 className="text-end texto fst-italic fs-2">El Rincon del Sabor</h3>
                <p className="text-end texto fst-italic fs-4">
                Donde cada bocado es un viaje de sabores.
                </p>
              </div>

           
            </div>
          

          {/* --------------------------hasta aca---------------------- */}

          {loading ? (
          <div className="col">
            <h3>Cargando info...</h3>
          </div>



        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {producEstado.length > 0 ? (
              producEstado.map((producto) => (
                <div className="col" key={productosFiltrados.categoria}>
                  <div className="card h-100 tarjeta">
                    <img
                      src={productosFiltrados.img}
                      className="card-img img-cards"
                      alt={productosFiltrados.nombre}
                    />
                    <div className="card-body tarjeta">
                      <h5 className="card-title">{producto.nombre}</h5>
                      <p className="card-text">{producto.descripcion}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col">
                <h3>No hay productos en esa categoría</h3>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductosScreen;
