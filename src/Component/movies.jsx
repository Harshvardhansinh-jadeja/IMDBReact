import React, {Component} from "react";
import Pagination from "./Common/pagination";
import {paginate} from "../utils/paginate";
import ListGroup from "./Common/listGroup";
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import NavBar from "./NavBar";
export class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortColumn: {path: "title", order: "asc"},
  };

  componentDidMount() {
    const genres = [{_id: "", name: "All Genres"}, ...getGenres()];

    this.setState({movies: getMovies(), genres});
  }

  handleDelete = (movie) => {
    console.log(movie);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({movies});
  };

  handleLike = (movie) => {
    // console.log("Liked", movie)
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies});
  };

  handlePageChange = (page) => {
    this.setState({currentPage: page});
  };

  handleGenreSelect = (genre) => {
    console.log(genre);
    this.setState({selectedGenre: genre, currentPage: 1});
  };

  handleSort = (sortColumn) => {
    this.setState({sortColumn});
  };

  render() {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      movies: allMovies,
    } = this.state;
    const {length: count} = this.state.movies;

    if (count === 0)
      return (
        <h5 className="text-danger my-4">
          There are no Movies in this Database
        </h5>
      );

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <React.Fragment>
      
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
            />
        </div>
        <div className="col">
          <p className="my-4 font-weight-bold font-italic">
            Showing {filtered.length} movies in the database
          </p>
          <MoviesTable
            movies={movies}
            onSort={this.handleSort}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
      </React.Fragment>

    );
  }
}

export default Movies;
