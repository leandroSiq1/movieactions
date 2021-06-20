import styled from 'styled-components';

export const Box = styled.div`
  width: 300px;
  min-height: 300px;

  text-align: center;

  background: var(--color-shape);
  border-radius: 10px;
  padding-bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > img {
    width: 100%;
    min-height: 200px;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    object-fit: cover;
    object-position: center;
  }
`;

export const Description = styled.footer`
  width: 100%;
  min-height: 90px;

  padding: 10px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  overflow: auto;

  > h1 {
    font-size: 23px;
    padding-bottom: 13px;
  }
  > button {
    padding: 8px 30px;

    background: var(--color-purple);
    border-radius: 5px;
    border: 1px solid var(--color-borders);

    color: var(--color-white);

    transition: .2s;

    &:hover {
      transform: scale(1.08);
    }
  }
`;