import React from 'react';
import mainData from '../../data/mainData';
import '../../styles/global/Base.css';
import '../../styles/components/Main.css';

const Main = () => {
  return (
    <>
      <section id="home" className="home main-bg section">
        <div className="main-content home-content">
          <div className="home-text-content">
            <h2>{mainData.homeH2}</h2>
          </div>
          <div className="menu-img">
            <img src="../Work/img/home.svg" alt="" />
          </div>
        </div>
      </section>
      <section id="servicos" className="white-bg section">
        <div className="main-content servicos-content">
          <h1>{mainData.servicosH1}</h1>
          {mainData.servicosH2.map((servico, index) => (
            <p key={index}>{servico}</p>
          ))}
        </div>
      </section>
      <section id="detalhes" className="main-bg section">
        <div className="main-content detalhes-content">
          <h1 className="main-detalhes">{mainData.detalhesH1}</h1>
          <p className="description-detalhes">{mainData.detalhesDescription}</p>
          <div className="detalhes-grid">
            <article>
              {mainData.descricaoServicos.map((descricaoServicos, index) => (
                <div className="detalhes-card" key={index}>
                  <h2>{descricaoServicos.titulo}</h2>
                  <p>{descricaoServicos.descricao}</p>
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>
      <section id="galeria" className="white-bg section">
        <div className="main-content galeria-content">
          <h2 className="main-galeria">{mainData.galeriaH1}</h2>
          <div className="galeria-grid">
            {mainData.galeriaImagens.map((imagens, index) => (
              <div className="galeria-card" key={index}>
                <img src={imagens.src} alt={imagens.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="valores" className="main-bg section">
        <div className="main-content valores-content responsive-table">
          <h1 className="main-valores">{mainData.valoresH1}</h1>
          <table>
            <caption>{mainData.valoresDescription}</caption>
            <thead>
              <tr>
                {mainData.valoresTitulos.map((titulo, index) => (
                  <th key={index}>
                    <p>{titulo}</p>
                  </th>
                ))}
              </tr>
              {mainData.valoresServicos.map((valores, index) => (
                <tr key={index}>
                  <td>{valores}</td>
                </tr>
              ))}
            </thead>
          </table>
        </div>
      </section>
      <section id="contato" className="white-bg section">
        <div className="main-content contact-content contact">
          <h2 className="main-valores">{mainData.contatoH1}</h2>
          <legend>{mainData.contatoDescription}</legend>
          <div className="form-group">
            <form>
              {mainData.dadosContato.map((item, index) => (
                <div key={index} className="form-group">
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
      <a href="#home" className="back-to-top">
        <h1>➤</h1>
      </a>
    </>
  );
};

export default Main;
