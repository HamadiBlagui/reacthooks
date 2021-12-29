import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MoviesListe.css'


function MoviesListe({data, titleSearch , ratingSearch }) {

    
    return (
        <div className='myListe'>
           {data
           .filter((movie)=>movie.title.toLowerCase().includes(titleSearch.toLowerCase())&& movie.rating>=ratingSearch)
           .map ((movie,index)=><MovieCard movie={movie} key={index}/>)}
            
        </div>
    )
}

export default MoviesListe
