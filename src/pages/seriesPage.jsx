import React from 'react'
import MovieGrid from "../components/movieGrid";
function SeriesPage() {
    return (
        <div>
            <MovieGrid title={"Series"} url={`/discover/tv`} />

        </div>
    )
}

export default SeriesPage