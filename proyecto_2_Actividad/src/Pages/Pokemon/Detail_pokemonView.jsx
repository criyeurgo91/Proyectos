import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchGet } from "../../Logic/Apihelper"

// Componente funcional para visualizar los detalles de un Pokémon
const DetailPokemon_view = () => {
  // Obtiene el parámetro de la URL que corresponde al ID del Pokémon
  const { id } = useParams();

  // Estado para almacenar los detalles del Pokémon
  const [pokemon, setPokemon] = useState({
    name: "",
    height: 0,
    sprites: { front_default: "" },
  });

  // Efecto para cargar los detalles del Pokémon al montar el componente o cuando cambia el ID
  useEffect(() => {
    // Realiza una solicitud GET para obtener los detalles del Pokémon por su ID
    fetchGet(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) =>
      setPokemon(response)
    );
  }, [id]);

  return (
    // Contenedor principal para los detalles del Pokémon
    <div className="mt-10 flex justify-center items-center">
      {/* Tarjeta con los detalles del Pokémon */}
      <div className="p-4 flex flex-col items-center rounded-sm shadow-lg max-w-xs">
        {/* Nombre del Pokémon */}
        <h1 className="text-black font-semibold">{pokemon.name}</h1>

        {/* Tamaño del Pokémon */}
        <h3>tamaño: {pokemon.height} pies</h3>

        {/* Imagen del Pokémon */}
        <img
          src={pokemon.sprites.front_default}
          alt="pokemon"
          width={200}
        />
      </div>
    </div>
  );
};

export default DetailPokemon_view
