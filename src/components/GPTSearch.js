import { useRef } from "react";
import { NETFLIX_BG, options } from "../utils/constants";
import openai from "../utils/openai";
import { useSelector } from "react-redux";
import { languageSupported } from "../utils/languageSupported";
import GPTMoviesSuggestions from "./GPTMoviesSuggestions";

const GPTSearch = () => {
  const movieSearch = useRef("");
  const language = useSelector((store) => store.lang.selectedLang);

  const movieResult = async (movName) => {
    const response = fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movName}&include_adult=false&language=en-US&page=1`,
      options
    );
    const json = await response.json();
    return json.results;
  };
  const searchGPTMovies = async () => {
    const gptQuery = `Act as a movie recommendation system and suggest some movie name for the query ${movieSearch.current.value} in the format like example (Example - Movie1, Mov2, Mov3).`;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });

    const gptResults = response.choices[0].message.content;
    const movResults = Promise.all(
      gptResults.map((mov) => {
        return movieResult(mov);
      })
    );
  };

  return (
    <div>
      <img src={NETFLIX_BG} alt="netflix background" />
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ position: "absolute" }}
      >
        <input
          style={{ width: "200px" }}
          ref={movieSearch}
          placeholder={languageSupported[language].searchPlaceholder}
        />
        <button onClick={() => searchGPTMovies()}>
          {languageSupported[language].search}
        </button>
      </form>
      <GPTMoviesSuggestions/>
    </div>
  );
};

export default GPTSearch;
