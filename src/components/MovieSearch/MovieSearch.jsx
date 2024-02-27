import { FaSearch } from "react-icons/fa";
import "./MovieSearch.css";
import { useDispatch, useSelector } from "react-redux";
import { setNameQuery, setMovieData } from "../../redux/features/movieSlice";
import { useGetMovieByNameQuery } from "../../redux/services/movies";

const MovieSearch = () => {
  const dispatch = useDispatch();
  const nameValue = useSelector((state) => state.movies.nameQuery);

  const { data: movies } = useGetMovieByNameQuery(nameValue);

  dispatch(setMovieData(movies));

  return (
    <div className="form-container">
      <form className="form-wrapper">
        <input
          className="form-input"
          type="text"
          placeholder="Search for movies..."
          onChange={(e) => dispatch(setNameQuery(e.target.value))}
        />
        <div className="search-icon-container">
          <FaSearch className="search-icon" />
        </div>
      </form>
    </div>
  );
};

export default MovieSearch;
