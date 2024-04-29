import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import ShowData from '../../components/ShowData';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';

const Home = () => {
    const [movies, setMovies] = useState([]);

    const getData=()=>{
        fetch('./data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setMovies(myJson);
          });
      }
      useEffect(()=>{
        setTimeout(getData, 1000);
        
      },[])

  return (
    <>
        
        <Hero />
        {movies && movies.length>0 ? (
            <ShowData movies={movies} />
        ): (<Loader />)}
        <Footer />
    </>
  )
}

export default Home