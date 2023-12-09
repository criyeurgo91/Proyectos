import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchDelete } from '../../Logic/Apihelper';

// Componente funcional para mostrar los detalles de un producto
const DetailProduct = ({ id, title, description, images }) => {
  // Estado para manejar el estado de eliminación del producto
  const [isDeleted, setIsDeleted] = useState(false);

  // Función para eliminar el producto
  const deleteProduct = () => {
    // Realiza una solicitud DELETE para eliminar el producto por su ID
    fetchDelete("https://api.escuelajs.co/api/v1/products/", id)
      .then((response) => {
        if (response) {
          // Si la eliminación es exitosa, actualiza el estado
          setIsDeleted(true);
        }
      })
      .catch((error) => {
        console.error('Error al eliminar el producto:', error);
      });
  };

  // Si el producto ha sido eliminado, no renderizar nada
  if (isDeleted) {
    return null;
  }

  // Renderiza los detalles del producto
  return (
    <div className='mt-10 p-4 flex flex-col items-center rounded-lg shadow-lg'>
      {/* Imagen del producto */}
      <img src={images} alt="Product" className='h-32 w-32 gap-0 rounded-xl' />

      {/* Título del producto */}
      <h1 className='text-center font-light'>{title}</h1>

      {/* Descripción del producto */}
      <p className='text-start font-medium mt-6'>{description}</p>

      {/* Botón para ver detalles del producto */}
      <button className='flex items-center justify-center space-x-4 bg-lime-500 hover:bg-slate-400 shadow-lg rounded-lg p-2 mt-6'>
        <NavLink to={`/Product/${id}`}>
          Detail
        </NavLink>
      </button>

      {/* Botón para eliminar el producto */}
      <button onClick={deleteProduct} className='flex items-center justify-center space-x-4 bg-red-700 hover:bg-slate-400 shadow-lg rounded-lg p-2 mt-6'>
        Delete
      </button>
    </div>
  );
}

export default DetailProduct;
