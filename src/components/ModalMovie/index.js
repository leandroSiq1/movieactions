import { Container, Box, Sinopse, Actions } from './styles';

export default function ModalMovie() {
  return (
    <Container>
      <Box>
        <img src="https://github.com/leandrosiq1.png" />
        <h2>Os Vingadores de Leandro</h2>
        <Sinopse>
          <h3>Sinopse:</h3>

          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja
          </p>
        </Sinopse>
        <Actions>
          <a target="_blank" href="https://github.com/leandrosiq1">Trailer</a>
          <button>Salvar</button>
        </Actions>
      </Box>
    </Container>
  );
}