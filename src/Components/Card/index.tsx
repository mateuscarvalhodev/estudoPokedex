import Image from "next/image";
import charmeleon from '@/assets/img/charmeleon.png';
const Card = () => {
  return (
    <>
      <div className="border-solid border-2 border-sky-500 max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          src={charmeleon}
          alt='pokemonX'
          width={150}
          height={150}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Charmeleon</div>
          <p className="text-gray-700 text-base">
          Charmeleon impiedosamente destrói seus inimigos usando suas garras afiadas. Se ele encontrar um adversário forte, verifica-se agressivo. Neste estado animado, a chama na ponta da cauda se inflama com uma cor branca azulada.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:border-sky-500 hover:border-2'>#Fire</span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:border-sky-500 hover:border-2'>#Normal</span>
        </div>
      </div>
    </>
  );
};

export default Card;