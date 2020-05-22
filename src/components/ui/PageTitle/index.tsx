import React from 'react';
import './page-title.styled.scss';

interface Props {
  title: string;
}

const PageTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
    </div>
  );
};

export default PageTitle;
