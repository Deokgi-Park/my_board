"use client";
import { useEffect, useState } from "react";

export const getRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * (max + 1));
};

export const getPokemonFrontImage = async (
  pokemonId: number
): Promise<string | null> => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-form/${pokemonId}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.sprites.front_default;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const PokemonImage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png"
  );
  const [error, setError] = useState<string | null>(null);
  let pokemonId = getRandomNumber(896);
  useEffect(() => {
    getPokemonFrontImage(pokemonId).then((url) => {
      if (url) {
        const element = document.getElementById("poketmon");
        setTimeout(() => {
          if (element !== null) {
            element.classList.remove("opacity-0");
          } else {
            console.error("요소를 찾을 수 없습니다.");
          }
          setTimeout(() => {
            if (element !== null) {
              element.classList.add("opacity-0");
            } else {
              console.error("요소를 찾을 수 없습니다.");
            }
            setTimeout(() => {
              setImageUrl(url);
            }, 400);
          }, 2600);
        }, 3000);
      } else {
        setError("Failed to load image");
      }
      return url;
    });
  });

  if (error) {
    return <div>Error: {error} </div>;
  }
  if (!imageUrl) {
    return <div>Loading...</div>;
  }

  return (
    <img
      className="poketmon transition-opacity duration-300 ease-in-out opacity-0"
      width={270}
      src={imageUrl}
      id="poketmon"
    />
  );
};

export default PokemonImage;
