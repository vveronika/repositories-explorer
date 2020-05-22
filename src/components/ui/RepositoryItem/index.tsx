import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import NoItemsInfo from 'components/ui/NoItemsInfo';
import './repository-item.styled.scss';

interface Props {
  title: string;
  description: string;
  rating: string;
  repoLink: string;
}

const RepositoryItem: React.FC<Props> = ({
  title,
  description,
  rating,
  repoLink,
}) => {
  return (
    <div className="repo-item">
      <div className="repo-item__info-wrapper">
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-item__info-wrapper__title"
        >
          {title}
        </a>
        <p className="repo-item__info-wrapper__desc">
          {description ? description : <NoItemsInfo />}
        </p>
      </div>
      <div className="repo-item__rating-wrapper">
        <p className="repo-item__rating-wrapper__rating">
          {rating}
          <StarIcon />
        </p>
      </div>
    </div>
  );
};

export default RepositoryItem;
