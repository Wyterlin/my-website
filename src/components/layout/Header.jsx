import headerData from '../../data/headerData.js';
import '../../styles/components/Header.css';

const Content = () => {
  return (
    <>
      <nav>
        <div className="menu-content">
          {/* Logo */}
          <div className="logo">
            <h1>{headerData.CWS}</h1>
          </div>
          {/* Sections */}
          <div className="secoes">
            <ul>
              {headerData.menuSections.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Content;
