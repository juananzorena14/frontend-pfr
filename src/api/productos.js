const url = "https://rincondelsaborbd-dev-ssmt.4.us-1.fl0.io/api/productos";
// const token = JSON.parse(localStorage.getItem("token")) || null;

const listaProducto = async () => {
  const respuesta = await fetch(url , {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const datos = await respuesta.json();

  return datos;
};

export {listaProducto} 