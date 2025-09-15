import './MovieCard.scss';

const MovieCard = ({ movieCard }) => (
  <div className="card" data-cy="Movie" key={movieCard.imdbId}>
    <div className="card-image">
      <figure className="image is-4by3">
        <img data-cy="MovieImage" src={movieCard.imgUrl} alt="Film logo" />
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="images/imdb-logo.jpeg" alt="imdb" />
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-8" data-cy="MovieTitle">
            {movieCard.title}
          </p>
        </div>
      </div>

      <div className="content">
        <p data-cy="MovieDescription">{movieCard.description}</p>

        <a href={movieCard.imdbUrl} data-cy="MovieLink">
          IMDB
        </a>
      </div>
    </div>
  </div>
);

export default MovieCard;
