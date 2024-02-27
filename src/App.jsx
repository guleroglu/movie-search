import "./App.css";
import Header from "./components/Header/Header";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import Movies from "./components/Movies/Movies";

function App() {
  return (
    <div>
      <Header />
      <MovieSearch />
      <Movies />
    </div>
  );
}

export default App;
