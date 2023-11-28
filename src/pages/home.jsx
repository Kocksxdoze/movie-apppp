import React from "react";
import MovieSlider from "../components/movieSlider";
import Chips from "../categories/chips";
import MovieGrid from "../components/movieGrid";
import { useState } from "react";
import TrandingSlider from "../components/trandingSlider/index"
export default function Home({ }) {
    const [categorieId, setCategorieId] = useState();
    const [name, setName] = useState("")
    return (
        <>
            <TrandingSlider />

            <Chips categorieId={categorieId} setId={setCategorieId} setName={setName} />
            {categorieId ?
                < MovieGrid id={categorieId} title={name} params={`&with_genres=${categorieId}`} url={`/discover/movie`} />
                :
                <>
                    <MovieSlider title={"Recommended"} url={"/movie/top_rated"} />
                    <MovieSlider title={"Popular"} url={"/movie/popular"} />
                    <MovieSlider isSerie={true} title={"Series"} url={"/trending/tv/day"} />
                    <MovieSlider title={"Other"} url={"/movie/upcoming"} />
                </>
            }

        </>
    );
}