import styled from 'styled-components';

export const Card = styled.div`
  width: 500px;
  min-height: 200px;

  background: var(--color-shape);
  border-radius: 5px;

  padding: 10px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 250px;
  height: 90%;

  border-radius: 5px;
`;

export const Content = styled.div`
  width: calc(100% - 160px);
  height: 100%;

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  > h3 {
    font-size: 17px;
    color: var(--color-white);
  }
`;

export const Buttons = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  > a {
    display: block;
    padding: 5px 20px;

    background: var(--color-secondary);
    border: none;
    border-radius: 3px;

    font-size: 15px;
    color: var(--color-black);

    transition: .2s;

    &:hover {
      transform: scale(1.07);
    }
  }
  > button {
    padding: 5px 20px;

    font-size: 15px;
    color: var(--color-white);

    background: var(--color-red);
    border: none;
    border-radius: 3px;

    transition: .2s;

    &:hover {
      transform: scale(1.07);
    }
  }
`;