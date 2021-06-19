import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: rgba(200,200,200,0.2);

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: min(800px, 90%);
  height: 700px;

  text-align: center;
  background: var(--color-shape);
  border-radius: 20px;

  > img {
    width: 100%;
    height: min(460px, 70%);

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    object-fit: cover;
    object-position: center;
  }
  > h2 {
    padding: 10px;
  }
`;

export const Sinopse = styled.div`
  width: 100%;
  min-height: 120px;

  text-align: left;

  > h3 {
    padding: 10px;
    color: var(--color-purple);
  } 
  > p {
    text-align: center;
    font-size: 17px;
  }
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