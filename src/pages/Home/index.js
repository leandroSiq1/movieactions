import React, { useState, useEffect } from 'react';

import { Main, Container } from './styles';

import api from '../../services/api';
import Card from '../../components/Card';
import ModalMovie from '../../components/ModalMovie';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadingMovies() {
      const response = await api.get("r-api/?api=filmes/");
      setMovies(response.data);
    }
  
    loadingMovies();
  }, []);

  return (
    <Main>
      <Container>
        {/* <ModalMovie /> */}
        {
          movies.map(movie => {
            return (
              <Card 
                key={movie.id}
                title={movie.nome}
                image={movie.foto}
              />
            );
          })
        }
      </Container>
    </Main>
  );
}