import React from 'react';
import './index.css'; // Importando um arquivo CSS específico para estilizar o Home

const Home = () => {
  const movies = [
    {
      title: "A Fera",
      image: "/img/a fera.jpg" // Substitua pelo URL da imagem do filme
    },
    {
      title: "A Forja",
      image: "./img/a forja.jpg"
    },
    {
      title: "Avatar",
      image: "./img/avatar.jpg"
    },
    {
      title: "Divertidamente",
      image: "./img/divertidamente.jpg"
    },
    {
      title: "Furiosa",
      image: "./img/furiosa.jpg"
    },
    {
      title: "Megan",
      image: "./img/megan.jpg"
    },
    {
      title: "Moana",
      image: "./img/moana.jpg"
    },
    {
      title: "Narnia",
      image: "./img/narnia.jpg"
    },
    {
      title: "O corvo",
      image: "./img/o corvo.jpg"
    },
  ];

  return (
    <div className="home-container">
      <h1>Melhores filmes</h1>
      <p>Bem vindo a nossa página de indicação de filmes!</p>
      <div className="movies-list">
        {movies.map((movie, index) => (
          <div className="movie" key={index}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
