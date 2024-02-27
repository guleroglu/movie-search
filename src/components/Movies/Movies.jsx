import { useGetMovieByNameQuery } from "../../redux/services/movies";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import "./Movies.css";
import { useSelector } from "react-redux";

const Movies = () => {
  const { error, isLoading } = useGetMovieByNameQuery();

  const datas = useSelector((state) => state.movies.movieData);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <main className="movies-container">
      <div className="movies-wrapper">
        {datas.results.map((movie) => (
          <div className="movie-item" key={movie.id}>
            <div className="movie-info">
              <h4 className="movie-title">{movie.title}</h4>
              <p className="movie-date">{movie.release_date}</p>
            </div>
            {movie.poster_path && (
              <div className="movie-img-wrapper">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Movies;
