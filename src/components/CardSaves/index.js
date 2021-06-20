import { Link } from 'react-router-dom';
import { Card, Image, Content, Buttons } from './styles';

export default function CardSaves({ movieId ,image, title, }) {

  function removeMovieSave(movieId) {
    const moviesSaves = JSON.parse(localStorage.getItem("movies.saves:"));

    const updatedMoviesSaves = moviesSaves.filter(movie => {
      return movie.movieId !== movieId;
    })

    localStorage.setItem("movies.saves:", JSON.stringify(updatedMoviesSaves));
    alert("Filme removido com sucesso!");
    
    window.location.reload();
  }

  return (
    <Card>
      <Image src={image} alt={`Imagem de ${title}`} />
      
      <Content>
        <h3>{title}</h3>
      
        <Buttons>
          <a target="_blank" href={`https://www.youtube.com/results?search_query=filme+${title}`}>Trailer</a>

          <button onClick={() => removeMovieSave(movieId)}>Excluir</button>
        </Buttons>
      </Content>
    </Card>
  );
}