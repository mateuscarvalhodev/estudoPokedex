import Card from '@/Components/Card';
import { useEffect, useState } from 'react';
import { api } from './api/api';

const Dashboard = () => {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    api.get('/pokemon').then((response) => {
      console.log(response);
      setPokemon(response.data.results);
    })
  }, [])
  return (
    <>
      <div className='flex flex-row gap-4 justify-center p-4'>
        <Card />
        <Card />
        <Card />
        <Card />
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