import { connect } from 'react-redux';
import MoviesList from './MoviesList';
import { fetchMoviesStartAsync } from '../../redux/movie/actions';

const mapStateToProps = (state) => ({
  movie: state.movie,
  navigation: state.navigation,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMoviesStartAsync: () => dispatch(fetchMoviesStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
