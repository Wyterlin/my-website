import homeImg from '../assets/images/sobre.svg';
import logoJS from '../assets/images/JavaScript.png';
import logoPython from '../assets/images/Python.png';
import logoReact from '../assets/images/React.png';
import logoHtml from '../assets/images/html.png';
import logoCss from '../assets/images/html.png';
import logoMySql from '../assets/images/html.png';

const mainData = {
  /*Sobre*/
  aboutTitle: 'Sobre',
  aboutDescription: [
    'Sou um profissional da área de Tecnologia da Informação em constante evolução, atualmente em transição de carreira para Desenvolvedor Full-Stack. Tenho experiência com tecnologias como JavaScript, HTML, CSS, Python e bancos de dados como MySQL e SAP HANA, realizando bloqueios, consultas e automações.',
    'Atualmente trabalho com suporte do sistema SAP Business One, utilizando juntamente as ferramentas SAP Hana e Crystall Reports.',
    'Estou sempre em busca de novos desafios e oportunidades para aplicar minhas habilidades em projetos inovadores, colaborativos e que gerem valor para a sociedade.',
  ],
  aboutImage: {
    src: homeImg,
    alt: 'Imagem de um computador com código',
  },

  /*Experiência*/
  experienceTitle: 'Experiências',
  experience: [
    {
      enterprise: {
        name: 'FastDrywall',
        description: [
          'Suporte, Treinamentos de utilização do sistema, consulta no BD (Banco de Dados) e envolvimento ativo no desenvolvimento de processos a serem utilizados no sistema Shop Control 9. Adquiri conhecimento básico da linguagem de programação SQL, utilizadas para realizar consultas e modificações no banco de dados.',
          'Em um período posterior expandi o meu conhecimento para a linguagem de programação Python para automatizações de processos e outras tarefas diárias e me aprofundei, também, na linguagem SQL HANA gerando bloqueios e consultas no BD.',
        ],
      },
    },
  ],

  /*Formação Acadêmica*/
  academicTrainingTitle: 'Formação Acadêmica',
  academicTrainingDescription: 'Formação acadêmica e cursos realizados.',
  academicTraining: [
    {
      name: 'Curso Microlins',
      description: [
        'Experiência Acadêmica e Conquista Profissional',
        'Durante o curso, fui membro de um grupo de estudo formado por 5 participante, com os quais construímos uma relação de amizade. Cooperação em estudos, exames e paper foi a abordagem adotada pelo grupo.',
        'Por minha realização, recebi dois certificados de aluno nota mil, por ter obtido uma das melhores notas em todo o decorrer do curso e de aluno destaque.',
        'Realizei também neste período um curso de capacitação para líder.',
      ],
    },
  ],

  /*technologies*/
  technologiesTitle: 'Tecnologias Utilizadas',
  technologiesLogos: [
    {
      name: 'Java Script',
      src: logoJS,
      alt: 'Java Script',
    },
    {
      name: 'Python',
      src: logoPython,
      alt: 'Python',
    },
    {
      name: 'React',
      src: logoReact,
      alt: 'React',
    },
    {
      name: 'HTML',
      src: logoHtml,
      alt: 'HTML',
    },
    {
      name: 'CSS',
      src: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
      alt: 'CSS',
    },
    {
      name: 'MySQL',
      src: 'https://cdn-icons-png.flaticon.com/512/5968/5968363.png',
      alt: 'MySQL',
    },
  ],

  /*Aba de Valores*/
  valoresH1: 'Valores',
  valoresDescription: 'Valores dos serviços prestados.',
  valoresTitulos: ['Serviço', 'Valor'],
  valoresServicos: ['Formatação', 'Limpeza de PC', 'Otimização', 'Atualização'],
  /*Aba Contato*/
  contatoH1: 'Contato',
  contatoDescription:
    'Entre em contato para mais informações ou para solicitar um orçamento.',
  dadosContato: [
    {
      type: 'text',
      name: 'first_Name',
      id: 'first_Name',
      placeholder: 'Primeiro nome',
    },
    {
      type: 'text',
      name: 'last_Name',
      id: 'last_Name',
      placeholder: 'Último nome',
    },
    {
      type: 'email',
      name: 'email',
      id: 'email',
      placeholder: 'Email',
    },
    {
      type: 'tel',
      name: 'phone',
      id: 'phone',
      placeholder: 'Telefone',
    },
    {
      type: 'text',
      name: 'message',
      id: 'message',
      placeholder: 'Mensagem',
    },
    {
      type: 'submit',
      name: 'submit',
      id: 'submit',
      value: 'Enviar',
    },
  ],
};

export default mainData;
