import React, { useEffect, useState } from "react"
import DetailProduct from '../../Components/Product/DetailProduct'
import LayoutComp from '../../Components/Layout/LayoutComp'
import { fetchGet } from "../../Logic/Apihelper"

// Componente funcional para la página de inicio
function Home() {
  // Estado para almacenar la lista de productos
  const [products, setProducts] = useState([]);

  // Efecto para cargar la lista de productos al montar el componente
  useEffect(() => {
    // Realiza una solicitud GET para obtener la lista de productos
    fetchGet("https://api.escuelajs.co/api/v1/products").then((response) => {
      // Actualiza el estado con la lista de productos obtenida
      setProducts(response);
    });
  }, []);

  return (
    // Componente de diseño general de la página
    <LayoutComp>
      <div>
        <div className="flex w-full mt-16">
          {/* Título de la lista de productos */}
          <h1 className="px-5 text-lg font-bold underline ">Product List</h1>

          {/* Grid para mostrar los detalles de cada producto */}
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
            {/* Mapea la lista de productos y renderiza el componente DetailProduct para cada uno */}
            {products?.map((product) => (
              <DetailProduct
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                images={product.images}
              />
            ))}
          </div>
        </div>
      </div>
    </LayoutComp>
  );
}

export default Home
