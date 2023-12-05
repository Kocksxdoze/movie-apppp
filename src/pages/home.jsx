import React from "react";
import MovieSlider from "../components/movieSlider";
import Chips from "../categories/chips";
import MovieGrid from "../components/movieGrid";
import { useState } from "react";
import TrandingSlider from "../components/trandingSlider/index"
import { useTranslation } from "react-i18next";
export default function Home() {
    const [categorieId, setCategorieId] = useState();
    const [name, setName] = useState("")
    const { t } = useTranslation()
    return (
        <>
            <TrandingSlider />

            <Chips categorieId={categorieId} setId={setCategorieId} setName={setName} />
            {categorieId ?
                < MovieGrid id={categorieId} title={name} params={`&with_genres=${categorieId}`} url={`/discover/movie`} />
                :
                <>
                    <MovieSlider title={t("Recommended")} url={"/movie/top_rated"} />
                    <MovieSlider title={t("Popular")} url={"/movie/popular"} />
                    <MovieSlider isSerie={true} title={t("Series")} url={"/trending/tv/day"} />
                    <MovieSlider title={t("Other")} url={"/movie/upcoming"} />
                </>
            }

        </>
    );
}