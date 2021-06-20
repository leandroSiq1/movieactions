import React, { useState, useEffect } from 'react';

import { Main, Container } from './styles';

import api from '../../services/api';
import Card from '../../components/Card';
import ModalMovie from '../../components/ModalMovie';

export default function Home() {
  const [movies, setMovies] = useState([]);

  const [movieOn, setMovieOn] = useState({});
  const [modalOn, setModalOn] = useState(false);

  const [stateBody, setStateBody] = useState("initial");

  useEffect(() => {
    async function loadingMovies() {
      const response = await api.get("r-api/?api=filmes/");
      setMovies(response.data);
    }
  
    loadingMovies();
  }, []);

  async function openModalMovie(movieId) {
    const movie = await api.get(`r-api/?api=filmes/${movieId}`);
    
    setMovieOn({ ...movie.data });
    setModalOn(true);
    setStateBody("hidden");
  }

  function closeModalMovie() {
    setMovieOn({});
    setModalOn(false);
    setStateBody("initial")
  }

  function bodyOverflow() {
    document.body.style.overflow = stateBody;
  }

  bodyOverflow();

  return (
    <Main>
      <Container>
        { 
          modalOn ? 
          <ModalMovie movieId={movieOn.id} image={movieOn.foto} title={movieOn.nome} text={movieOn.sinopse} callback={closeModalMovie} />
          : ""
        }
        {
          movies.map(movie => {
            return (
              <Card 
                key={movie.id}
                title={movie.nome}
                image={movie.foto}
                callback={() => openModalMovie(movie.id)}
              />
            );
          })
        }
      </Container>
    </Main>
  );
}