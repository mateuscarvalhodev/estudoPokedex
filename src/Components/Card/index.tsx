/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
import Image from "next/image";
import { ReactElement } from "react";
import { IPokemons } from "@/pages/dashboard";



const Card = ({ name, image, index, types }: IPokemons): ReactElement => {
  return (
    <>
      <div className="border-solid border-2 border-sky-500 max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src={image}
          alt={name}
          className="mx-auto"
          width={100}
          height={100}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{index}{name}</div>
          <p className="text-gray-700 text-base">
            {name}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:border-sky-500'>{types}</span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:border-sky-500'>{name}</span>
        </div>
      </div>
    </>
  );
};

export default Card;