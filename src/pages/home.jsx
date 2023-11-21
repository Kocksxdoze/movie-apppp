import React from "react";
import MovieSlider from "../components/movieSlider";
import Chips from "../categories/chips";
import MovieGrid from "../components/movieGrid";
import { useState } from "react";
import TrandingSlider from "../components/trandingSlider/index"
export default function Home() {
    const [categorieId, setCategorieId] = useState();

    return (
        <>
            <TrandingSlider />

            <Chips categorieId={categorieId} setId={setCategorieId} />
            {categorieId ?
                < MovieGrid id={categorieId} title={categorieId} params={`&with_genres=${categorieId}`} url={`/discover/movie`} />
                :
                <>
                    <MovieSlider title={"Recommended"} url={"/movie/top_rated"} />
                    <MovieSlider title={"Popular"} url={"/movie/popular"} />
                    <MovieSlider isSerie={true} title={"Series"} url={"/tv/popular"} />
                    <MovieSlider title={"Multifilms"} url={"/movie/upcoming"} />
                </>
            }

        </>
    );
}