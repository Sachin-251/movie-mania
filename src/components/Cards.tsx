import React from 'react'

interface Props{
    title: string;
    genres: any;
    languages: any;
    countries: any;
    image: any;
    link: any;
}

const Cards = ({title, genres, languages, countries, image, link}: Props) => {
  return (
    <a href={link} target='_blank' className="md:w-1/4 sm:w-1/2 xs:w-full w-full p-4 hover:scale-105 transition duration-700">
        <div className={`p-3 h-full shadow-lg shadow-black text-softTextColor bg-softBg rounded-lg w-full`}>
          {
            !image ? (
              <img className="h-60 rounded w-full object-cover object-center mb-6" src={`/assets/default.jpg`} alt="default" width={400} height={400} />
            ):(
              <img className="h-60 rounded w-full object-cover object-center mb-6" src={image} alt={`${title}`} width={400} height={400} />
            )
          }
            
            <h2 className={`text-2xl text-center text-green-500 font-bold title-font mb-4`}>{title}</h2>
            <h3 className="tracking-widest py-1 font-semibold title-font"><span className='text-blue'>Genres:</span> {genres.join(', ')}</h3>
            <p className="leading-relaxed font-medium title-font py-1 text-sm"><span className='text-blue'>Languages:</span> {languages.slice(0,10).join(', ')}</p>
            <p className="leading-relaxed font-medium title-font py-1 text-sm"><span className='text-blue'>Countries:</span> {countries?.length>0 ?countries.slice(0,10).join(', '): 'India'}</p>
        </div>
    </a>
  )
}

export default Cards