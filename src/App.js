import * as React from 'react';
import Noty from 'noty';
import "noty/lib/noty.css";  
import "noty/lib/themes/mint.css"; 
import './assets/stylesheet/index.css';
import Search from './components/Search';
import MovieList from './components/MovieList';
import EmptyState from './components/EmptyState';
import DetailModal from './components/DetailModal';

class App extends React.Component {
  state = {
    movies: {},
    showMovies: false,
    movieDetail: {},
    showDetail: false,
  };

  handleDetailSearch = (movieId) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://www.omdbapi.com/?apikey=91df31c3&i=${movieId}`, true);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status !== 200) {
        new Noty({
          type: 'error',
          timeout: 2000,
          text: 'Oops! Something went wrong. Try again!',
        }).show();
      } else {
        this.setState({ movieDetail: JSON.parse(xhr.response), showDetail: true });
      }
    };
  }

  handleTitleSearch = (title) => {
    if(title.length >= 3) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', `http://www.omdbapi.com/?apikey=91df31c3&type=movie&s=${title}`, true);
      xhr.send();
      xhr.onload = () => {
        if (xhr.status !== 200) {
          new Noty({
            type: 'error',
            timeout: 2000,
            text: 'Oops! Something went wrong. Try again!',
          }).show();
        } else {
          this.setState({ movies: JSON.parse(xhr.response), showMovies: true });
        }
      };
    } else {
      new Noty({
        type: 'warning',
        timeout: 2000,
        text: 'Too many results. Please, type at least 3 letters.',
      }).show();
    }
  };

  componentDidMount() {
    this.handleTitleSearch('Love');
  }

  render() {
    const { showMovies, movies, showDetail, movieDetail } = this.state;
    const returnedMovies = movies.Response === 'True';
    return(
      <div className="App">
        <Search handleSearch={this.handleTitleSearch} />
        {showMovies && returnedMovies && <MovieList movies={movies.Search} handleDetailSearch={this.handleDetailSearch} />}
        {showMovies && !returnedMovies && <EmptyState />}
        {showDetail && <DetailModal movieDetail={movieDetail} />}
      </div>
    )
  }
}

export default App;
