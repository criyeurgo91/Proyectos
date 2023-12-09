import React from 'react';
import { NavLink } from 'react-router-dom';

// Componente funcional para la barra de navegación
const NavbarComp = () => {
  return (
    // Contenedor de la barra de navegación
    <nav className='flex justify-center fixed z-10 top-0 w-full py-3 px-3 text-lg font-semibold bg-black text-white'>
      {/* Lista de elementos de navegación */}
      <ul className='flex items-center gap-3'>
        {/* Elemento de navegación para la página de inicio */}
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        {/* Elemento de navegación para la página de creación de productos */}
        <li>
          <NavLink to='/createProduct'>Create Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarComp;
