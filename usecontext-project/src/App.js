import { MovieProvider } from './MovieContext';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import AddMovie from './AddMovie';

function App() {
  return (
    <MovieProvider>
      <div className='App'>
        <Nav />
        <div className='movie_list'>
          <AddMovie />
          <MovieList />
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
