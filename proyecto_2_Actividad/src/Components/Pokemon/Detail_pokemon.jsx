import { NavLink } from "react-router-dom";

// Componente funcional para mostrar los detalles de un Pokémon
const DetailPokemon = ({ id, name, heigth, image }) => {
  return (
    // Contenedor principal para los detalles del Pokémon
    <div className='mt-10 p-4 flex flex-col items-center rounded-lg shadow-lg'>
      {/* Imagen del Pokémon */}
      <img src={image} alt="Pokemon" className='h-32 w-32 gap-0 rounded-xl' />

      {/* Nombre del Pokémon */}
      <h1 className='text-center font-light'>{name}</h1>

      {/* Altura del Pokémon */}
      <p className='text-start font-medium mt-6'>{heigth}</p>

      {/* Botón para ver detalles del Pokémon */}
      <button className='flex items-center justify-center space-x-4 bg-lime-500 hover:bg-slate-400 shadow-lg rounded-lg p-2 mt-6'>
        <NavLink to={`/Pokemon/${id}`}>
          Detail
        </NavLink>
      </button>
    </div>
  );
};

export default DetailPokemon;
