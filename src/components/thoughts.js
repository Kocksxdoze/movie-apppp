import React from "react";
import MovieSlider from "./movieSlider";

function Thoughts({ id }) {
  return (
    <div>
      <MovieSlider
        title={"Thoughts"}
        url={`/movie/${id}/recommendations
`}
      />
    </div>
  );
}

export default Thoughts;
