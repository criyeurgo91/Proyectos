import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { fetchGet, fetchPost } from '../../Logic/Apihelper'
import { useNavigate } from 'react-router-dom'

const FormCreateProduct = () => {
  // Configuración del formulario utilizando react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  // Navegación entre páginas
  const navigate = useNavigate()

  // Estado para almacenar la lista de categorías
  const [listCategories, setListCategories] = useState([])

  // Función para manejar el registro del producto
  const handleBtnRegistrar = async (data) => {
    // Estructura de los datos del producto
    const dataProduct = {
      title: data.nameProduct,
      price: data.priceProduct,
      description: data.Descripcion,
      categoryId: data.categoryId,
      images: ["https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe.jpg"],
    };

    // Realiza una solicitud POST para registrar el producto
    fetchPost("https://api.escuelajs.co/api/v1/products/", dataProduct).then(
      (response) => {
        if (response) {
          alert('Product Registered')
          // Redirecciona a la página principal después de registrar el producto con éxito
          navigate('/')
        } else {
          alert('Failed to save Product')
        }
        console.log(response)
      }
    );
  }

  // Efecto para cargar las categorías al montar el componente
  useEffect(() => {
    fetchGet("https://api.escuelajs.co/api/v1/categories").then((response) => {
      // Almacena la lista de categorías en el estado
      setListCategories(response)
    })
  }, [])

  return (
    // Formulario para crear un nuevo producto
    <form onSubmit={handleSubmit(handleBtnRegistrar)} className="flex flex-col items-start w-full">
      {/* Campo para el nombre del producto */}
      <label htmlFor="nameProduct" className="mb-4">Nombre producto</label>
      <input
        {...register('nameProduct', { required: true })}
        type="text"
        placeholder="Nombre producto"
        className={`p-2 shadow-lg rounded-lg w-full mb-4 ${errors.nameProduct ? 'border-red-500' : ''}`}
      />
      {errors.nameProduct && <span className="text-red-500">Este campo es obligatorio</span>}

      {/* Campo para el precio del producto */}
      <label htmlFor="priceProduct" className="mb-4">Precio producto</label>
      <input
        {...register('priceProduct', { required: true })}
        type="text"
        placeholder="Precio producto"
        className={`p-2 shadow-lg rounded-lg w-full mb-4 ${errors.priceProduct ? 'border-red-500' : ''}`}
      />
      {errors.priceProduct && <span className="text-red-500">Este campo es obligatorio</span>}

      {/* Campo para la descripción del producto */}
      <label htmlFor="Descripcion" className="mb-4">Descripción</label>
      <input
        {...register('Descripcion', { required: true })}
        type="text"
        placeholder="Descripción"
        className={`p-2 shadow-lg rounded-lg w-full mb-4 ${errors.Descripcion ? 'border-red-500' : ''}`}
      />
      {errors.Descripcion && <span className="text-red-500">Este campo es obligatorio</span>}

      {/* Campo para seleccionar la categoría del producto */}
      <label htmlFor="categoryId" className="mb-4">Categoría</label>
      <select
        {...register('categoryId', { required: true })}
        className={`p-2 shadow-lg rounded-lg w-full mb-4 ${errors.categoryId ? 'border-red-500' : ''}`}
      >
        <option value="">Seleccionar Categoría</option>
        {/* Mapea las categorías disponibles para mostrarlas en las opciones */}
        {listCategories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      {errors.categoryId && <span className="text-red-500">Este campo es obligatorio</span>}

      {/* Botón para enviar el formulario */}
      <button
        type="submit"
        className="p-2 rounded-lg bg-green-400 text-white"
      >
        Save Product
      </button>
    </form>
  )
}

export default FormCreateProduct
