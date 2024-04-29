import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import 'react-multi-carousel/lib/styles.css';
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";

type Props = {
    movies: any;
}

const ShowData = ({movies}: Props) => {
    const genres: any = [];
    const languages: any = [];
    const countries: any = [];
    const [searchInput, setSearchInput] = useState<string>('');
    const [filterGenre, setFilterGenre] = useState('');
    const [filterLanguage, setFilterLanguage] = useState('');
    const [filterCountry, setFilterCountry] = useState('');
    const [filterMovies, setFilterMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const totalPages = Math.ceil(movies?.length/postsPerPage);
    const pageNumbers = [];
 
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    
    movies?.map((movie: any) => {
        const genre = movie?.moviegenres?.map((gen: any) => {
            if(!genres.includes(gen)){
                genres.push(gen);
            }
            return null;
        })
        return genre;
    })

    movies?.map((movie: any) => {
        const language = movie?.movielanguages?.map((lang: any) => {
            if(!languages.includes(lang)){
                languages.push(lang);
            }
            return null;
        })
        return language;
    })

    movies?.map((movie: any) => {
        const country = movie?.moviecountries?.map((count: any) => {
            if(!countries.includes(count)){
                countries.push(count);
            }
            return null;
        })
        return country;
    })

    useEffect(() => {
        if(filterGenre === '' && filterLanguage === '' && filterCountry === ''){
            setFilterMovies(movies.slice(indexOfFirstPost, indexOfLastPost));
            return;
        }
        
        if(filterGenre !== ''){
            if(filterLanguage === '' && filterCountry === ''){
                setFilterMovies(movies.filter((movie: any) => movie?.moviegenres?.includes(filterGenre)));
                return;
            }else{
                if(filterLanguage !== '' && filterCountry === ''){
                    setFilterMovies(movies.filter((movie: any) => movie?.moviegenres?.includes(filterGenre) && movie?.movielanguages?.includes(filterLanguage)));
                    return;
                }else if(filterLanguage === '' && filterCountry !== ''){
                    setFilterMovies(movies.filter((movie: any) => movie?.moviegenres?.includes(filterGenre) && movie?.moviecountries?.includes(filterCountry)));
                    return;
                }else if(filterLanguage !== '' && filterCountry !== ''){
                    setFilterMovies(movies.filter((movie: any) => movie?.moviegenres?.includes(filterGenre) && movie?.movielanguages?.includes(filterLanguage) && movie?.moviecountries?.includes(filterCountry)));
                    return;
                }
            }
        }else if(filterLanguage !== ''){
            if(filterCountry === ''){
                setFilterMovies(movies.filter((movie: any) => movie?.movielanguages?.includes(filterLanguage)));
                return;
            }else {
                setFilterMovies(movies.filter((movie: any) => movie?.movielanguages?.includes(filterLanguage) && movie?.moviecountries?.includes(filterCountry)));
                return;
            }
        }else if(filterCountry !== ''){
            setFilterMovies(movies.filter((movie: any) => movie?.moviecountries?.includes(filterCountry)));
            return;
        }
      },[filterGenre, filterLanguage, filterCountry, currentPage]);

      useEffect(() => {
        if(searchInput === ""){
            setFilterGenre('');
            setFilterLanguage('');
            setFilterCountry('');
            setFilterMovies(movies.slice(indexOfFirstPost, indexOfLastPost));
            return;
        }
      },[searchInput])

    const handleSearch = () => {
        if(searchInput === ""){
            return;
        }else {
            setFilterMovies(movies.filter((movie: any) => (movie.movietitle).toLowerCase().includes(searchInput.toLowerCase())));          
        }
        
      }

  return (
    <div className='w-full h-full px-5 mt-6 mx-auto py-10'>
        <div className='flex justify-center gap-3 w-full'>
            <input type="text" className='border-2 bg-softBg w-full md:w-1/2 border-green-500 p-1 px-3 rounded-md' onChange={(e) => setSearchInput(e.target.value)} placeholder='Search Movie...' />

            <button className='btn btn-circle btn-success' onClick={handleSearch}><FaSearch color='white' /></button>
            
            <label htmlFor="my-drawer" className="btn btn-circle btn-outline drawer-button"><FaFilter color='white' /></label>
        </div>
        <div className='p-3 w-full mt-10'>
            <div className="flex flex-wrap -m-4">
                {filterMovies?.map((movie: any) => (
                        <Cards key={movie?.imdbmovieid} title={movie?.movietitle} genres={movie?.moviegenres} languages={movie?.movielanguages} countries={movie?.moviecountries} image={movie?.moviemainphotos[0]} link={`https://www.imdb.com/title/${movie?.imdbmovieid}`} />

                    )) 
                }
            </div>   
        </div>
    
        {filterGenre === '' && filterLanguage === '' && filterCountry === '' ?
            (<div className='flex justify-center my-8'>
                <div className="join">
                    {pageNumbers?.map((page: number) => (
                        <input key={page} className="join-item btn btn-square" type="radio" name="options" aria-label={page.toString()} checked={page === currentPage ? true : false} onClick={() => setCurrentPage(page)} />
                    ))}
                    
                </div>
            </div>) : null
        }

        <div className="drawer drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
            </div> 
            <div className="drawer-side z-40">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-6 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <h3 className='text-lg font-bold text-center font-playfair'>Filters</h3>
                <div className="divider"></div>
                <li className='my-2'>
                <select name="genreFilter" value={filterGenre} className='w-full bg-softBg px-3 py-2 border-2 border-green-500 rounded-md' id="genreFilter" onChange={(e) => setFilterGenre(e.target.value)}>
                        <option value="" className='bg-softBg'>Genre</option>
                        {
                        genres.map((genre: string, index: number) => (
                            <option key={index} value={genre} className='bg-softBg'>{genre}</option>
                        ))
                        }
                    </select>
                </li>

                <li className='my-2'>
                <select name="languageFilter" value={filterLanguage} className='w-full bg-softBg px-3 py-2 border-2 border-green-500 rounded-md' id="languageFilter" onChange={(e) => setFilterLanguage(e.target.value)}>
                        <option value="" className='bg-softBg'>Language</option>
                        {
                        languages.map((language: string, index: number) => (
                            <option key={index} value={language} className='bg-softBg'>{language}</option>
                        ))
                        }
                    </select>
                </li>

                <li className='my-2'>
                <select name="countryFilter" value={filterCountry} className='w-full bg-softBg px-3 py-2 border-2 border-green-500 rounded-md' id="countryFilter" onChange={(e) => setFilterCountry(e.target.value)}>
                        <option value="" className='bg-softBg'>Country</option>
                        {
                        countries.map((country: string, index: number) => (
                            <option key={index} value={country} className='bg-softBg'>{country}</option>
                        ))
                        }
                    </select>
                </li>
                <li className='my-4'>
                    <button className='btn btn-success text-white' onClick={() => {
                        setFilterGenre('');
                        setFilterLanguage('');
                        setFilterCountry('');
                    }}>Reset Filters</button>
                </li>
                </ul>
            </div>
        </div>
  </div>
  )
}

export default ShowData