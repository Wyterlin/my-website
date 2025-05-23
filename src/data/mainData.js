import homeImg from '../assets/images/sobre.svg';
import logoJS from '../assets/images/JavaScript.png';
import logoPython from '../assets/images/Python.png';
import logoReact from '../assets/images/React.png';
import logoHtml from '../assets/images/html.png';
import logoCss from '../assets/images/CSS.png';
import logoMySql from '../assets/images/MySql.png';

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
      name: 'Estácio',
      description: ['Bacharelado', 'Ciência da Computação.'],
    },
    {
      name: 'Curso Microlins',
      description: [
        'Durante o curso, fui membro de um grupo de estudo formado por 5 participante, com os quais construímos uma relação de amizade. Cooperação em estudos, exames e paper foi a abordagem adotada pelo grupo.',
        'Por minha realização, recebi dois certificados de aluno nota mil, por ter obtido uma das melhores notas em todo o decorrer do curso e de aluno destaque.',
        'Realizei também neste período um curso de capacitação para líder.',
      ],
    },
  ],

  /*technologies*/
  technologiesTitle: 'Tecnologias Utilizadas',
  technologiesLogosL: [
    {
      name: 'JS',
      src: logoJS,
      alt: 'Java Script',
      className: 'left',
    },
    {
      src: logoPython,
      alt: 'Python',
      className: 'left',
    },
    {
      src: logoReact,
      alt: 'React',
      className: 'left',
    },
  ],
  technologiesLogosR: [
    {
      src: logoHtml,
      alt: 'HTML',
      className: 'right',
    },
    {
      src: logoCss,
      alt: 'CSS',
      className: 'right',
    },
    {
      src: logoMySql,
      alt: 'MySQL',
      className: 'right',
    },
  ],

  /*Aba de Valores*/
  valoresH1: 'Valores',
  valoresDescription: 'Valores dos serviços prestados.',
  valoresTitulos: ['Serviço', 'Valor'],
  valoresServicos: ['Formatação', 'Limpeza de PC', 'Otimização', 'Atualização'],

  /*Aba Contato*/
  contatoH1: 'Contato',
  contatoDescription: 'Entre em contato para mais informações.',
  dadosContato: [
    {
      id: 'name',
      type: 'text',
      name: 'name',
      placeholder: 'Nome',
    },
    {
      id: 'email',
      type: 'email',
      name: 'email',
      placeholder: 'E-mail',
    },
    {
      id: 'message',
      type: 'text',
      name: 'message',
      placeholder: 'Mensagem',
    },
  ],
};

export default mainData;
