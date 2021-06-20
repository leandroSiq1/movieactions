
import { Container, Box, Sinopse, Actions, Group, Banner, CloseIcon } from './styles';

export default function ModalMovie({  movieId ,image, title, text, callback }) {

  function save(movieId) {
    const moviesSaves = JSON.parse(localStorage.getItem("movies.saves:")) || [];


    try {
      moviesSaves.forEach(movie => {
        if (movie.movieId === movieId) {
          alert("Você já possui esse filme Salvo!!");
          throw new Error("Você já possui esse filme Salvo!!");
        }
      }); 

      const movieSave = generateObjectMovie(movieId, image, title, text);
      moviesSaves.push(movieSave);

      localStorage.setItem("movies.saves:", JSON.stringify(moviesSaves));

      alert(`Filme ${title} Salvo com sucesso!`);
    } catch (error) {
      alert(`${error.message}`)
    }
  }

  function generateObjectMovie(movieId, image, title, text) {
    return {
      movieId,
      image, 
      title,
      text
    }
  }

  return (
    <Container>
      <CloseIcon onClick={callback} >X</CloseIcon>
      <Box>
        <Banner image={image}></Banner>
        
        <Group>
          <Actions>
            <a target="_blank" href={`https://www.youtube.com/results?search_query=filme+${title}`}>Trailer</a>

            <h2>{title}</h2>

            <button onClick={() => save(movieId)} type="button">Salvar</button>
          </Actions>
          <Sinopse>
            <h3>Sinopse:</h3>

            <p>
              {text}
            </p>
          </Sinopse>
        </Group>
      </Box>
    </Container>
  );
}