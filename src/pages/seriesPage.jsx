import React from 'react'
import MovieGrid from "../components/movieGrid";
function SeriesPage() {
    return (
        <div>
            <MovieGrid title={"Series"} isSerie={true} url={`/trending/tv/week`} />

        </div>
    )
}

export default SeriesPage