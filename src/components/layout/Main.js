import React from 'react';
import mainData from '../../data/mainData';
import '../../styles/Main.css';

const Main = () => {
  return (
    <>
      <section id="home" class="home main-bg section">
        <div class="main-content home-content">
          <div class="home-text-content">
            <h1>{mainData.homeH1}</h1>
            <h2>{mainData.homeH2}</h2>
          </div>
          <div class="menu-img">
            <img src="../Work/img/home.svg" alt="" />
          </div>
        </div>
      </section>
      <section id="servicos" class="white-bg section">
        <div class="main-content servicos-content">
          <h1>{mainData.servicosH1}</h1>
          {mainData.servicosH2.map((servico, index) => (
            <p key={index}>{servico}</p>
          ))}
        </div>
      </section>
      <section id="detalhes" class="main-bg section">
        <div class="main-content detalhes-content">
          <h1 class="main-detalhes">{mainData.detalhesH1}</h1>
          <p class="description-detalhes">{mainData.detalhesDescription}</p>
          <div class="detalhes-grid">
            <article>
              {mainData.descricaoServicos.map((descricaoServicos, index) => (
                <div class="detalhes-card" key={index}>
                  <h2>{descricaoServicos.titulo}</h2>
                  <p>{descricaoServicos.descricao}</p>
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>
      <section id="galeria" class="white-bg section">
        <div class="main-content galeria-content">
          <h2 class="main-galeria">{mainData.galeriaH1}</h2>
          <div class="galeria-grid">
            {mainData.galeriaImagens.map((imagens, index) => (
              <div class="galeria-card" key={index}>
                <img src={imagens.src} alt={imagens.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="valores" class="main-bg section">
        <div class="main-content valores-content responsive-table">
          <table>
            <h2 class="main-valores">{mainData.valoresH1}</h2>
            <caption>{mainData.valoresDescription}</caption>
            <thead>
              <tr>
                {mainData.valoresTitulos.map((titulo, index) => (
                  <th key={index}>
                    <p>{titulo}</p>
                  </th>
                ))}
              </tr>
              <tr>
                {mainData.valoresServicos.map((valores, index) => (
                  <tr key={index}>
                    <p>{valores}</p>
                  </tr>
                ))}
              </tr>
            </thead>
          </table>
        </div>
      </section>
      <section id="contato" class="white-bg section">
        <div class="main-content contact-content contact">
          <h2 class="main-valores">{mainData.contatoH1}</h2>
          <legend>{mainData.contatoDescription}</legend>
          <div class="form-group">
            <form>
              {mainData.dadosContato.map((item, index) => (
                <div key={index} class="form-group">
                  <input
                    type={item.type}
                    name={item.name}
                    id={item.id}
                    placeholder={item.placeholder}
                  />
                </div>
              ))}
            </form>
          </div>
        </div>
      </section>
      <a href="#home" class="back-to-top">
        <h1>➤</h1>
      </a>
    </>
  );
};

export default Main;
