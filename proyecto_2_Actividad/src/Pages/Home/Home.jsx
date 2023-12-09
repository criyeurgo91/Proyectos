import React, { useEffect, useState } from "react";
import DetailPokemon from "../../Components/Pokemon/Detail_pokemon";
import Layout_comp from "../../Components/Layout/layout_comp";
import { fetchGet } from "../../Logic/Apihelper";

// Componente funcional para la página de inicio
function Home() {
  // Estado para almacenar la lista de Pokémon
  const [objects, setObjects] = useState([]);

  // Efecto para cargar la lista de Pokémon al montar el componente
  useEffect(() => {
    // Realiza una solicitud GET para obtener la lista de Pokémon
    fetchGet("https://pokeapi.co/api/v2/pokemon").then(async (response) => {
      if (Array.isArray(response.results)) {
        // Obtiene datos detallados de cada Pokémon en paralelo
        const detailedPokemonData = await Promise.all(
          response.results.map(async (pokemon) => {
            // Realiza una solicitud GET para obtener detalles de un Pokémon
            const detailedResponse = await fetchGet(pokemon.url);
            return {
              id: detailedResponse.id,
              name: detailedResponse.name,
              image: detailedResponse.sprites.front_default,
            };
          })
        );

        // Actualiza el estado con los datos detallados de los Pokémon
        setObjects(detailedPokemonData);
      } else {
        console.error("La respuesta no es un array:", response);
      }
    });
  }, []);

  return (
    // Componente de diseño general de la página
    <Layout_comp>
      <div>
        <div className="flex w-full mt-16">
          {/* Título de la lista de Pokémon */}
          <h1 className="px-5 text-lg font-bold underline">Character List</h1>

          {/* Grid para mostrar los detalles de cada Pokémon */}
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
            {/* Mapea la lista de Pokémon y renderiza el componente DetailPokemon para cada uno */}
            {objects.map((pokemon) => (
              <DetailPokemon
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout_comp>
  );
}

export default Home;
