import React, { useState, useEffect } from 'react'
import fetcher from '../utils/fetcher'
import { useSearchParams } from 'react-router-dom'
import MovieGrid from '../components/movieGrid'
function Search() {
    const [searchParams] = useSearchParams()

    const query = searchParams.get('searchValue')
    return (
        <div><MovieGrid url={"search/movie"} params={`query=${query}`} ></MovieGrid></div>
    )
}

export default Search