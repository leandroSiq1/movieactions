
import { Container, Box, Sinopse, Actions, Group, Banner, CloseIcon } from './styles';

export default function ModalMovie({  image, title, text, callback }) {

  return (
    <Container>
      <CloseIcon onClick={callback} >X</CloseIcon>
      <Box>
        <Banner image={image}>
          <Actions>
            <a target="_blank" href={`https://www.youtube.com/results?search_query=filme+${title}`}>Trailer</a>

            <button type="button">Salvar</button>
          </Actions>
        </Banner>
        
        <Group>
          <h2>{title}</h2>
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