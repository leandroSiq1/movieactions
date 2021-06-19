import { Box, Description } from './styles';

export default function Card({ title, image, callback }) {
  return (
    <Box>
      <img title="Saiba Mais" src={image} alt={`Imagem ${title}`}/>

      <Description>
        <h1>{title}</h1>

        <a target="_blank" onClick={callback}>Acessar</a>
      </Description>
    </Box>
  );
}