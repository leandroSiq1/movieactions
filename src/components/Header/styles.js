import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 70px;

  background: var(--color-shape);
`;

export const Wrapper = styled.div`
  width: 90%;
  min-height: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;

  > a {
    font-size: 18px;
    color: var(--color-purple);

    opacity: 0.7;
    transition: .2s;

    &:hover {
      transform: scale(1.04);
      opacity: 1;
    }
  }
  > button {
    padding: 6px 25px;

    background: var(--color-purple);
    border: 1px solid var(--color-borders);
    border-radius: 5px;

    color: var(--color-white);

    transition: .2s;

    &:hover {
      transform: scale(1.08);
    }
  }
`;