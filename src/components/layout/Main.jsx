import mainData from '../../data/mainData';
import EmailService from '../../services/EmailJS';
import useTheme from '../useTheme.js';
import '../../styles/components/Main.css';

const Main = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <>
      <main>
        {/* Theme Toggle */}
          <div className="theme-toggle">
            <label className="theme-switch">
              <input
                type="checkbox"
                id="btn-theme-toggle"
                checked={theme === 'dark'}
                onChange={toggleTheme}
                aria-label="Alternar tema escuro/claro"
              />
              <span className="slider"></span>
            </label>
          </div>
        <section id="profile-section">
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
        <section id="experience-section">
          <div className="section-content experience-content">
            <div className="experience">
              <h1>{mainData.experienceTitle}</h1>
              {mainData.experience.map((experience, index) => (
                <div className="experience-cards" key={index}>
                  <div className="company-name">
                    <h2>{experience.enterprise.name}</h2>
                  </div>
                  <div className="company-description">
                    {experience.enterprise.description.map(
                      (description, idx) => (
                        <p key={idx}>{description}</p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="academic-training-section">
          <div className="section-content academic-training-content">
            <div className="academic-training">
              <h1>{mainData.academicTrainingTitle}</h1>
            </div>
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
        <section id="technologies-section" className="sct-technologies section">
          <div className="section-content technologies-content">
            <div className="technologies">
              <h1>{mainData.technologiesTitle}</h1>
              <div className="technologies-logo">
                <div className="logo-grid-l">
                  {mainData.technologiesLogosL.map((logos, index) => (
                    <div className="logo-card" key={index}>
                      <img src={logos.src} alt={logos.alt} />
                    </div>
                  ))}
                </div>
                <div className="logo-grid-r">
                  {mainData.technologiesLogosR.map((logos, index) => (
                    <div className="logo-card" key={index}>
                      <img src={logos.src} alt={logos.alt} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact-section" className="sct-contact section">
          <div className="section-content contact-content contact">
            <div className="contact">
              <h1 className="main-values">{mainData.contatoH1}</h1>
              <legend>{mainData.contatoDescription}</legend>
            </div>
            <div className="form-group">
              <EmailService />
            </div>
          </div>
        </section>
      </main>
      <a href="#profile-section" className="back-to-top">
        <p>&#11205;</p>
      </a>
    </>
  );
};

export default Main;
