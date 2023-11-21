import React from 'react'
import MovieGrid from "../components/movieGrid";
function Movies() {
    return (
        <div>

            <MovieGrid url={`/discover/movie`} />
        </div>
    )
}

export default Movies