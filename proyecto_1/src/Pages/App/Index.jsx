import React from 'react';
import NavbarComp from '../../Components/Navbar/NavbarComp';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import CreateProduct from '../Product/CreateProduct';
import Home from '../../Pages/Home/Home';
import DetailProduct_view from '../Product/DetailProduct_view';

// Componente funcional para gestionar las rutas de la aplicación
const AppRoutes = () => {
  // Define las rutas y sus componentes asociados
  let routes = useRoutes([
    { path: '/', element: <Home /> },  // Ruta para la página de inicio
    { path: '/createProduct', element: <CreateProduct /> },  // Ruta para la creación de productos
    { path: '/Product/:id', element: <DetailProduct_view /> },  // Ruta para ver detalles de un producto
  ]);

  // Retorna las rutas definidas
  return routes;
};

// Componente principal de la aplicación
const App = () => {
  return (
    // Envolvente de las rutas y la barra de navegación
    <BrowserRouter>
      <AppRoutes /> {/* Renderiza las rutas de la aplicación */}
      <NavbarComp /> {/* Renderiza la barra de navegación */}
    </BrowserRouter>
  );
}

export default App;
