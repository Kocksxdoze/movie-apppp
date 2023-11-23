import React from 'react'
import MovieGrid from "../components/movieGrid";
function Movies() {
    return (
        <div>

            <MovieGrid title={"Movies"} url={`/discover/movie`} />
        </div>
    )
}

export default Movies