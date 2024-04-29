import React from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

type Props = {}

const About = (props: Props) => {
  return (
    <>
        <Hero />
        <div className='w-2/3 mx-auto p-4 mt-10 mb-20 text-justify'>
            <h2 className='text-2xl font-semibold font-playfair my-4 mt-8 text-red'>About Movie Mania</h2>

            <p className='text-lg font-opensans'>Welcome to Movie Mania, where the world of cinema comes alive at your fingertips. Founded by Sachin Shrivastav, Movie Mania is your ultimate destination for all things related to movies.</p>

            <h2 className='text-2xl font-semibold font-playfair my-4 mt-8 text-red'>Our Mission</h2>

            <p className='text-lg font-opensans'>At Movie Mania, our mission is simple: to ignite and nurture the passion for cinema in every movie enthusiast. We strive to provide a comprehensive platform that caters to the diverse tastes and preferences of moviegoers worldwide.</p>

            <h2 className='text-2xl font-semibold font-playfair my-4 mt-8 text-red'>What We Offer</h2>

            <p className='text-lg font-opensans my-4'>1. Extensive Database: Dive into a vast repository of movie information spanning across genres, eras, and languages. Whether you're into Hollywood blockbusters, indie gems, or international cinema, Movie Mania has you covered.</p>

            <p className='text-lg font-opensans my-4'>2. Up-to-Date Content: Stay informed with the latest movie news, reviews, trailers, and release dates. Our team of dedicated curators ensures that you're always in the loop with the most relevant and timely updates from the world of entertainment.</p>

            <p className='text-lg font-opensans my-4'>3. Personalized Recommendations: Discover your next favorite film with personalized recommendations tailored to your unique preferences. Our advanced algorithms analyze your viewing history and preferences to suggest movies that resonate with your tastes.</p>

            <p className='text-lg font-opensans my-4'>4. Engaging Community: Connect with like-minded movie enthusiasts from around the globe. Share your thoughts, reviews, and recommendations, and engage in lively discussions about your favorite films and upcoming releases.</p>

            <h2 className='text-2xl font-semibold font-playfair my-4 mt-8 text-red'>Meet the Founder - Sachin Shrivastav</h2>

            <p className='text-lg font-opensans'>Sachin Shrivastav, a passionate Software Developer, is the driving force behind Movie Mania. With a deep-seated love for movies and a keen understanding of technology, Sachin embarked on a mission to create a platform that celebrates the art of cinema while leveraging the power of digital innovation.</p>

            <h2 className='text-2xl font-semibold font-playfair my-4 mt-8 text-red'>Join the Movie Mania Experience</h2>

            <p className='text-lg font-opensans'>Whether you're a casual moviegoer, an avid cinephile, or a seasoned critic, Movie Mania invites you to embark on an immersive journey through the captivating world of cinema. Join us today and let your love for movies reach new heights. Let's make every movie moment unforgettable together.</p>
        </div>
        <Footer />
    </>
  )
}

export default About