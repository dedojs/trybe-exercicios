import React from "react";
import PropTypes  from "prop-types";

class TvShow extends React.Component {
  render() {
    const {tvShow} = this.props;
    return (
      <section>
        <article >
          <h2 > Titulo: {tvShow.name} </h2>
          <img src={tvShow.image} alt="imagem da serie friends" />
          <p>Genero: <strong>{tvShow.genre}</strong></p>
          <p>Personagens: {tvShow.characters.map((element) => {
              return <strong key={element}>{`${element} | `}</strong>;
            })}
          </p>
          <br></br>
          <p>Temporadas: <strong>{tvShow.info.seasons}</strong> </p>
          <p>Episódios: <strong>{tvShow.info.episodes}</strong> </p>
        </article>
      </section>
    );
  }
}

TvShow.propTypes = {
    tvShow: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        genre:PropTypes.string,
        characters:PropTypes.arrayOf(PropTypes.string),
        info: PropTypes.shape({
            seasons: PropTypes.string,
            episodes: PropTypes.number,
        })
    }).isRequired
}

export default TvShow;
