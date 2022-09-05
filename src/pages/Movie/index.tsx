import MovieList from "@/components/movie/movie-list.component";
import MovieItems from "@/components/movie/movie-item.component";
import MovieSearch from "@/components/movie/movie-search.component";
import { useStore } from "@/stores";

const Movie = () => {
  const { items, nominated } = useStore();

  return (
    <>
      <div className="min-h-96 rounded-lg border border-solid border-gray-200 col-span-3 md:col-span-2">
        <MovieSearch />
        <MovieList layoutClass="grid-cols-1 lg:grid-cols-2">
          {items
            .map((movie) => (
              <MovieItems key={movie.imdbID} movie={movie} listType="search" />
            ))}
        </MovieList>
      </div>
      <div className="rounded-lg border-2 border-double border-gray-200 hidden md:block">
        <div className="font-sans font-medium text-lg dark:text-white px-5  h-20 flex items-center border-b-2 border-double">
          Nominated Movie
        </div>
        {nominated.length < 1 && <p className="p-5 text-gray-300 italic">You dont have nominated movie</p>}
        {nominated.length >= 5 && <p className="p-5 text-white font-semibold bg-teal-400">5 movies already got nominated</p>}
        <MovieList layoutClass="grid-cols-1">
          {nominated.map((movie) => (
            <MovieItems key={movie.imdbID} movie={movie} listType="nomination" />
          ))}
        </MovieList>
      </div>
    </>
  );
};

export default Movie;
