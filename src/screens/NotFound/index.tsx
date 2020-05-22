import React from 'react';
import { useHistory } from 'react-router-dom';
import PageTitle from 'components/ui/PageTitle';
import PageSubtitle from 'components/ui/PageSubtitle';
import BaseButton from 'components/ui/BaseButton';
import './not-found.styled.scss';

const NotFound = () => {
  let history = useHistory();

  const goToHomepage = () => {
    history.push('/');
  };

  return (
    <div className="not-found">
      <PageTitle title="Oops!" />
      <PageSubtitle
        firstSubtitle="Probably"
        highlightSubtitle="not"
        secondSubtitle="the page you were looking for!"
      />
      <div className="not-found__button">
        <BaseButton
          type="button"
          label="Visit homepage"
          onClick={goToHomepage}
        />
      </div>
    </div>
  );
};

export default NotFound;
