import React from 'react';
import './page-subtitle.styled.scss';

interface Props {
  firstSubtitle?: string;
  highlightSubtitle?: string;
  secondSubtitle?: string;
}

const PageSubtitle: React.FC<Props> = ({
  firstSubtitle,
  highlightSubtitle,
  secondSubtitle,
}) => {
  return (
    <div className="sub-header">
      <span className="sub-header__title">{firstSubtitle} </span>
      <span className="sub-header__title--underline">{highlightSubtitle} </span>
      <span className="sub-header__title">{secondSubtitle}</span>
    </div>
  );
};

export default PageSubtitle;
