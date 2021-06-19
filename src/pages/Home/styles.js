import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;

  padding: 20px 0 50px 0;
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ModalMovie = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0,0,0,0.8);
`;