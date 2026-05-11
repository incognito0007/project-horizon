import { useEffect, useState } from 'react'

interface PokemonData {
  name: string
  sprites: {
    other: {
      dream_world: {
        front_default: string | undefined
      }
    }
  }
  base_experience: number
}

const PokemonApp = () => {
  const [apiData, setApiData] = useState<PokemonData | null>(null)

  const API = 'https://pokeapi.co/api/v2/pokemon/pikachu'

  const fetchPokemon = () => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        setApiData(data)
      })
      .catch(error => console.error('Error fetching data:', error))
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  if (apiData) {
    return (
      <section className="component">
        <header>
          <h1>Lets Catch Some Pokemon!</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                src={apiData.sprites.other.dream_world.front_default}
                alt={apiData.name}
                className="pokemon-image"
              />
            </figure>
            <h1>{apiData.name}</h1>
            <p>Base Experience: {apiData.base_experience}</p>
          </li>
        </ul>
      </section>
    )
  }
  return <p>Loading...</p>
}

export default PokemonApp
