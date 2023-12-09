import React from "react";
import Navbar_comp from "../../Components/Navbar/Navbar_comp";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import DetailPokemon_view from "../Pokemon/Detail_pokemonView";

// Componente funcional para definir las rutas de la aplicación
const AppRoutes = () => {
  // Define las rutas y sus componentes asociados
  let routes = useRoutes([
    { path: "/", element: <Home /> },  // Ruta para la página de inicio
    { path: "/Pokemon/:id", element: <DetailPokemon_view /> },  // Ruta para ver detalles de un Pokémon
  ]);

  // Retorna las rutas definidas
  return routes;
};

// Componente principal de la aplicación
const App = () => {
  return (
    // Envolvente de las rutas y la barra de navegación
    <BrowserRouter>
      <Navbar_comp />  {/* Renderiza la barra de navegación */}
      <AppRoutes />  {/* Renderiza las rutas de la aplicación */}
    </BrowserRouter>
  );
}

export default App;
