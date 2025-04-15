import React from "react";
import mainData from "../../data/mainData";
import "../../styles/global/Base.css";
import "../../styles/global/Layout.css";
import "../../styles/components/Main.css";

const Main = () => {
  return (
    <>
      <main>
        <section id="profile-section" className="bg-black section">
          <div className="section-content profile-content">
            <div className="about-content">
              <div>
                <h1>{mainData.titulo}</h1>
              </div>
              <div>
                {mainData.descricao.map((descricao, index) => (
                  <p key={index}>{descricao}</p>
                ))}
              </div>
            </div>
            <div className="image-menu">
              <img
                src={mainData.sobreImagem.src}
                alt={mainData.sobreImagem.alt}
              />
            </div>
          </div>
        </section>
        <section id="experience-section" className="bg-white section">
          <div className="section-content experience-content">
            <div className="experience">
              <h1>{mainData.experienciaH1}</h1>
            </div>
            {mainData.experienciaEmpresas.map((experiencia, index) => (
              <div className="experience-cards" key={index}>
                <div className="company-name">
                  <h2>{experiencia.empresa.nome}</h2>
                </div>
                <div className="company-description">
                  {experiencia.empresa.descricao.map((descricao, idx) => (
                    <p key={idx}>{descricao}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="formacao-academica" className="bg-black section">
          <div className="section-content formacao-academica-content">
            <h1 className="main-detalhes">{mainData.detalhesH1}</h1>
            <p className="description-detalhes">
              {mainData.detalhesDescription}
            </p>
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
        <section id="certificados" className="bg-white section">
          <div className="section-content certificados-content">
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
        <section id="competencias" className="bg-black section">
          <div className="section-content competencias-content responsive-table">
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
        <section id="contato" className="bg-white section">
          <div className="section-content contato-content contact">
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
      </main>
      <a href="#home" className="back-to-top">
        <h1>➤</h1>
      </a>
    </>
  );
};

export default Main;
