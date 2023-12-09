import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGet } from '../../Logic/Apihelper';

// Componente funcional para visualizar los detalles de un producto
const DetailProduct_view = () => {
  // Obtiene el parámetro de la URL que corresponde al ID del producto
  const { id } = useParams();

  // Estado para almacenar los detalles del producto
  const [product, setProduct] = useState({});

  // Efecto para cargar los detalles del producto al montar el componente
  useEffect(() => {
    // Realiza una solicitud GET para obtener los detalles del producto por su ID
    fetchGet("https://api.escuelajs.co/api/v1/products/" + id).then(
      (response) => setProduct(response)
    );
  }, [id]); // El efecto se ejecuta nuevamente cuando cambia el ID

  return (
    // Contenedor principal para los detalles del producto
    <div className='mt-10 flex justify-center items-center'>
      {/* Tarjeta con los detalles del producto */}
      <div className='p-4 flex flex-col items-center rounded-sm shadow-lg max-w-xs'>
        {/* Título del producto */}
        <h1 className='text-black font-semibold'>{product.title}</h1>
        
        {/* Precio del producto */}
        <h3>{product.price}</h3>
        
        {/* Imagen del producto */}
        <img src={product.images} alt="product" width={150} />
        
        {/* Descripción del producto */}
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default DetailProduct_view;
