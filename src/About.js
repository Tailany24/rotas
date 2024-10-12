import React, { useState } from 'react';
import './index.css'; // Certifique-se de que o CSS está sendo importado

const About = () => {
  const [isPaused, setIsPaused] = useState(false); // Estado para controlar a pausa da animação

  const togglePause = () => {
    setIsPaused(!isPaused); // Alterna entre pausar e continuar a animação
  };

  return (
    <div className="about-container">
      <div
        className="scrolling-text"
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        <h1>Sobre Filmes</h1>
        <p>
          Bem-vindo ao site Filmes, o seu portal definitivo para descobrir os melhores filmes de todos os gêneros e épocas.
          Nossa missão é proporcionar uma experiência única para os apaixonados por cinema, oferecendo uma curadoria especial
          de filmes que vão desde os clássicos do cinema mundial até as mais recentes produções de Hollywood e além.
        </p>
        <p>
          Criamos este site com o intuito de unir todos aqueles que compartilham da paixão por histórias inesquecíveis, personagens
          marcantes e tramas envolventes. No Filmes, você encontra uma vasta seleção de filmes que vão desde aventuras
          épicas, passando por comédias que garantem risadas, até dramas emocionantes que tocam profundamente o coração.
        </p>
        <p>
          Nosso diferencial está na forma como apresentamos os filmes. Aqui, não é apenas sobre assistir, mas sobre mergulhar
          no universo cinematográfico, entender o contexto por trás de cada obra e se conectar com outros cinéfilos. Além das
          recomendações e sinopses, oferecemos análises detalhadas e listas exclusivas para você explorar os melhores títulos
          de acordo com seu gosto pessoal.
        </p>
        <p>
          Quer você esteja buscando algo para assistir no próximo fim de semana ou esteja interessado em descobrir mais sobre
          o cinema de uma maneira geral, o Filmes é o lugar certo para você. Sinta-se à vontade para navegar pelas
          nossas páginas, explorar nossas categorias e se deliciar com as histórias que selecionamos especialmente para você.
        </p>
        <p>
          Acompanhe as novidades do mundo do cinema, descubra novos filmes e aproveite ao máximo o que o Filmes tem a
          oferecer. Estamos sempre atualizando nosso catálogo para garantir que você tenha as melhores opções a qualquer
          momento.
        </p>
        <p>
          Obrigado por fazer parte dessa jornada cinematográfica conosco. Prepare a pipoca, escolha um filme e boa sessão!
        </p>
      </div>
      <button className="pause-button" onClick={togglePause}>
        {isPaused ? 'Continuar' : 'Pausar'}
      </button>
    </div>
  );
};

export default About;
