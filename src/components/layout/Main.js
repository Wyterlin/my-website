import React from 'react';
import mainData from '../../data/mainData';
import '../../styles/global/Base.css';
import '../../styles/global/Layout.css';
import '../../styles/components/Main.css';

const Main = () => {
  return (
    <>
      <main>
        <section id="profile-section" className="bg-black section">
          <div className="section-content profile-content">
            <div className="about-content">
              <div>
                <h1>{mainData.aboutTitle}</h1>
              </div>
              <div>
                {mainData.aboutDescription.map((aboutDesciption, index) => (
                  <p key={index}>{aboutDesciption}</p>
                ))}
              </div>
            </div>
            <div className="image-menu">
              <img
                src={mainData.aboutImage.src}
                alt={mainData.aboutImage.alt}
              />
            </div>
          </div>
        </section>
        <section id="experience-section" className="bg-white section">
          <div className="section-content experience-content">
            <div className="experience">
              <h1>{mainData.experienceTitle}</h1>
            </div>
            {mainData.experience.map((experience, index) => (
              <div className="experience-cards" key={index}>
                <div className="company-name">
                  <h2>{experience.enterprise.name}</h2>
                </div>
                <div className="company-description">
                  {experience.enterprise.description.map((description, idx) => (
                    <p key={idx}>{description}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="academic-training" className="bg-black section">
          <div className="section-content academic-training-content">
            <h1>{mainData.academicTrainingTitle}</h1>
            <p>{mainData.academicTrainingDescription}</p>
            <div className="details-grid">
              <article>
                {mainData.academicTraining.map((academicTraining, index) => (
                  <div className="details-card" key={index}>
                    <h2>{academicTraining.name}</h2>
                    {academicTraining.description.map((description, idx) => (
                      <p key={idx}>{description}</p>
                    ))}
                  </div>
                ))}
              </article>
            </div>
          </div>
        </section>
        <section id="technologies" className="bg-white section">
          <div className="section-content technologies-content">
            <h1>{mainData.technologiesTitle}</h1>
            <div className="logo-grid">
              {mainData.technologiesLogos.map((logos, index) => (
                <div className="logo-card" key={index}>
                  <img src={logos.src} alt={logos.alt} />
                  <h3>{logos.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="skills" className="bg-black section">
          <div className="section-content skills-content responsive-table">
            <h1 className="main-values">{mainData.valoresH1}</h1>
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
        <section id="contact" className="bg-white section">
          <div className="section-content contact-content contact">
            <h2 className="main-values">{mainData.contatoH1}</h2>
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
