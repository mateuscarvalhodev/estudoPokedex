import Card from '@/Components/Card';
import { useEffect, useState } from 'react';
import { api } from './api/api';


export interface IPokemons {
  sprites: any;
  name: string;
  image: string;
  index: number;
  types: Array<{ type: { name: string } }>
}
const Dashboard = () => {


  const [pokemon, setPokemon] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [page, setPage] = useState(0);
  const [isDisableNext, setIsDisableNext] = useState(false);
  const [isDisablePrevious, setIsDisablePrevious] = useState(true);

  useEffect(() => {
    api.get('/pokemon', {
      params: {
        limit: 20,
        offset: 20 * page
      }
    }).then((response) => {

      console.log(response);
      const { next, previous, results } = response.data;
      console.log(next, previous);
      setIsDisableNext(!next);
      setIsDisablePrevious(!previous);
      setPokemon(results);

    })
  }, [page]);

  useEffect(() => {
    const loadPokemonInfo = async () => {
      const loadedPokemonInfo = await Promise.all(
        pokemon.map((p: { name: string, url?: string }) =>
          api.get(`pokemon/${p.name}`)
        )
      );
      setPokemonInfo(loadedPokemonInfo.map((response) => response.data));
    };

    loadPokemonInfo();
  }, [pokemon]);
  console.log(pokemonInfo);
  return (
    <>
      <div className='flex flex-wrap flex-row gap-4 justify-center p-4'>
        {
          pokemon.map((item: IPokemons, index: number) =>
            <Card
              key={item.index}
              name={item.name}
              index={item.index}
              // image={item.sprites.front_default}
              types={item.types}
            // image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(page * 20) + (index + 1)}.png`}
            />
          )
        }
      </div>
      <div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-30'
          onClick={() => setPage(page - 1)}
          disabled={isDisablePrevious}
        >Previous</button>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full '
          onClick={() => setPage(page + 1)}
          disabled={isDisableNext}
        >Next</button>
      </div>
    </>
  );
};
// console.log(item.name);

export default Dashboard;