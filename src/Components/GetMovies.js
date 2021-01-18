import React, {useState} from 'react'
import Display from './Display'

export default function GetMovies() {
    const [movies, setMovies] = useState({})

    function getMovies(){
                    fetch(`https://api.themoviedb.org/3/movie/27?api_key=${process.env.REACT_APP_KEY}`)
                        .then(response => response.json())
                        .then(response => {setMovies(response)})
                        }
    const {genres, adult, original_title, overview, poster_path} = movies
    return (
        <div>
            <React.Fragment>
            <div>{JSON.stringify(movies)}</div>
            <button type='button' onClick={getMovies}>getMovies</button>
            <Display movies={Object.keys(movies)} genres={genres} adult={adult} title={original_title} overview={overview} poster={poster_path}/>
            </React.Fragment>
        </div>
    )
}
