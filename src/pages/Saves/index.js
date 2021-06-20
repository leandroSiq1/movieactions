import { Container, Wrapper } from './styles';

import CardSaves from '../../components/CardSaves';

export default function Saves() {
  const moviesSaved = JSON.parse(localStorage.getItem("movies.saves:"));

  return (
    <Container>
      <Wrapper>
        { 
          moviesSaved.map(movie => {
            return (
              <CardSaves movieId={movie.movieId} image={movie.image} title={movie.title} />
            );
          }) 
        }
      </Wrapper>
    </Container>
  );
}