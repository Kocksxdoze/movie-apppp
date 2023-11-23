import React from "react";
import MovieSlider from "./movieSlider";

function ThoughtsSerie({ id }) {
    return (
        <div>
            <MovieSlider
                title={"Thoughts"}
                url={`/tv/popular
`}
            />
        </div>
    );
}

export default ThoughtsSerie;
