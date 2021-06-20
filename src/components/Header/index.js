import { Link } from 'react-router-dom';

import { Container, Wrapper } from './styles';

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Link to="/">MovieActions</Link>
 
        <Link className="btn" to="/saves">Salvos</Link>
      </Wrapper>
    </Container>
  );
}