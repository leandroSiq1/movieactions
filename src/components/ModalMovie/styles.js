import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: rgba(0,0,0,0.7);

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
`;

export const Box = styled.div`
  width: min(800px, 90%);
  height: 600px;

  text-align: center;
  background: var(--color-background);
  border-radius: 20px;

  > h2 {
    padding: 10px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 60%;

  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Actions = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  > a {
    width: 120px;
    height: 35px;

    font-size: 14px;
    font-weight: bold;
    color: var(--color-white);
    
    background: var(--color-purple);
    border-radius: 5px; 

    display: flex;
    align-items: center;
    justify-content: center;

    transition: .2s;

    &:hover {
      transform: scale(1.08);
    }
  }
  > button {
    width: 120px;
    height: 35px;

    background: var(--color-purple);
    border: none;
    border-radius: 5px;

    font-size: 14px;
    font-weight: bold;
    color: var(--color-white);

    transition: .2s;

    &:hover {
      transform: scale(1.08);
    }
  }
`;

export const Group = styled.div`
  width: 100%;
  padding: 40px;
`;

export const Sinopse = styled.div`
  width: 100%;
  max-height: 120px;

  padding: 15px;
  text-align: left;
  overflow: auto;

  > h3 {
    padding: 10px;
    color: var(--color-purple);
  } 
  > p {
    text-align: center;
    font-size: 17px;
  }
`;

export const CloseIcon = styled.h3`
  font-size: 35px;
  font-weight: bold;
  color: var(--color-purple);

  position: absolute;
  top: 20px;
  right: 30px;

  transition: .5s;
  cursor: pointer;

  &:hover {
    transform: rotate(180deg);
  }
`;