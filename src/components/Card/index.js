import { Box, Description } from './styles';

export default function Card({ title, image, callback }) {
  return (
    <Box>
      <img title="Saiba Mais" src={image} alt={`Imagem ${title}`}/>

      <Description>
        <h1>{title}</h1>

        <button onClick={callback}>Acessar</button>
      </Description>
    </Box>
  );
}