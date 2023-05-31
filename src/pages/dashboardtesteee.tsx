/* eslint-disable react-hooks/rules-of-hooks */
import { api } from '@/pages/api/api'
import { useState } from 'react'
export const dashboard = () => {

  const [pokemons, setPokemons] = useState('')

  api.get('pokemon').then((response) => {
    console.log(response)
  })


  return (
    <>

    </>
  )
}

export default dashboard;