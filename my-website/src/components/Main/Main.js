import React from 'react';
import contentData from '../../data/contentData';

const Content = () => {
  return (
    <div>
      <h1>{contentData.title}</h1>
      <p>{contentData.description}</p>
    </div>
  );
};

export default Content;
