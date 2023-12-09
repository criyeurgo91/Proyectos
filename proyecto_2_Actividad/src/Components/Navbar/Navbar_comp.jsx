import React from 'react';
import { NavLink } from 'react-router-dom';

// Componente funcional para la barra de navegación
const Navbar_comp = () => {
  return (
    // Contenedor de la barra de navegación
    <nav className='flex justify-center fixed z-10 top-0 w-full py-3 px-3 text-lg font-semibold bg-cyan-800 text-white'>
      {/* Lista de elementos de navegación */}
      <ul className='flex items-center gap-3'>
        {/* Elemento de navegación para la página de inicio */}
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar_comp;
