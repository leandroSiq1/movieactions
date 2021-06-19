import React, { useState, useEffect } from 'react';
import { Main, Container, ModalMovie } from './styles';

import api from '../../services/api';

import Card from '../../components/Card';

export default function Home() {
  const [isModalMovie, setIsModalMovie] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadingMovies() {
      const response = await api.get("r-api/?api=filmes/");
      setMovies(response.data);
    }
  
    loadingMovies();
  }, []);

  function openModalMovie() {
    setIsModalMovie(!isModalMovie)
  } 

  return (
    <Main>
      <Container>
        {
          movies.map(movie => {
            return (
              <Card 
                key={movie.id}
                title={movie.nome}
                image={movie.foto} 
                callback={openModalMovie}
              />
            );
          })
        }
      </Container>
    </Main>
  );
}