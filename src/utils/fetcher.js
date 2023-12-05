import axios from "axios";

export default async function fetcher(url, params, lang) {
  let defaultLang = lang ? lang : "en-US"
  const response = await axios.get(
    `https://api.themoviedb.org/3${url}?${params
      ? params + `&include_adult=false&certification_country=US&certification.lte=PG-13&language=${defaultLang}`
      : `include_adult=false&certification_country=US&certification.lte=PG-13&language=${defaultLang}`}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGZkYTFjMDhiODE1ZTZkMzU2NmYzYTQ5ZTBjYWE2ZCIsInN1YiI6IjY1MzkwYTcxMGZiMTdmMDEzOGZjY2I0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.16Lq58HvoXoclQo_3BtMj_IAguqwpSGyUSDBfSDH1AE",
      },
    }
  );

  return response.data;
}
