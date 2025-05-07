import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import mainData from '../data/mainData';
import '../styles/global/Forms.css';

const EmailService = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    current_year: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Por favor, insira um email válido.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const updatedFormData = {
      ...formData,
      current_year: new Date().getFullYear(),
    };

    emailjs
      .send(
        'service_hzobohx',
        'template_21tek65',
        updatedFormData,
        'glNOe31YNICw5j-nB'
      )
      .then(
        (result) => {
          alert('Email enviado com sucesso!');
          setFormData({
            name: '',
            email: '',
            message: '',
            current_year: '',
          });
        },
        (error) => {
          alert('Erro ao enviar o email, tente novamente mais tarde.');
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      {mainData.dadosContato.map((item, index) => (
        <div key={index} className="form-field">
          <input
            id={item.id}
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            value={formData[item.name]}
            onChange={handleChange}
            className="input-field"
          />
          <label htmlFor={item.id} className="form-label">
            {item.placeholder}
          </label>
        </div>
      ))}
      <div className="send-form">
        <div class="container">
          <div class="center">
            <button class="btn">
              <svg
                width="180px"
                height="60px"
                viewBox="0 0 180 60"
                class="border"
              >
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  class="bg-line"
                />
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  class="hl-line"
                />
              </svg>
              <span>Enviar</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EmailService;
