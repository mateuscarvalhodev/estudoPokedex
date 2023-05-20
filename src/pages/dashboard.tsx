import Card from '@/Components/Card';
import { useEffect, useState } from 'react';
import { api } from './api/api';

const Dashboard = () => {

  const [pokemon, setPokemon] = useState([]);
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
      const {next, previous, results} = response.data;
      console.log(next, previous);
      setIsDisableNext(!next);
      setIsDisablePrevious(!previous);
      setPokemon(results);
      
    })
  }, [page]);

  console.log('teste');
  return (
    <>
      <div className='flex flex-row gap-4 justify-center p-4'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <button
         className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
         onClick={() => setPage(page -1)}
         disabled={isDisablePrevious}
         >Previous</button>
        <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
         onClick={() => setPage(page +1)}
         disabled={isDisableNext}
         >Next</button>
      </div>
      <ul>
        {
          pokemon.map(item =>
            <li key={item.name}>{item.name}</li>
          )
        }
      </ul>
    </>
  );
};

export default Dashboard;