import React from 'react';
import ReactDOM from 'react-dom';
import './src/components/Header/Header.css';
import './src/components/Content/Content.css';
import './src/components/Footer/Footer.css';
import Content from './components/Header/Header.js';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Content />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
