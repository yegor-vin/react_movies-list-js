import './MovieList.scss';

import MovieCard from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movieCard={movie} />
    ))}
  </div>
);
export default MovieList;
