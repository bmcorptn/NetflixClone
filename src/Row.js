import React, {useState, useEffect} from 'react'
import axios from './axios'

function Row({ title, fetchUrl }) {

    const [movies, setMovies] = useState([])
    const baseUrl="https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.table(request.data.results)
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img src={`${baseUrl}${movie.poster_path}`} alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row
