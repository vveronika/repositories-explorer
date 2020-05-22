import React from 'react';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Repository } from 'models/repositories.types';
import RepositoryItem from 'components/ui/RepositoryItem';
import NoItemsInfo from 'components/ui/NoItemsInfo';

interface Props {
  repositories: Repository[];
}

const AccordionBody: React.FC<Props> = ({ repositories }) => {
  return (
    <ExpansionPanelDetails>
      {repositories.length > 0 &&
        repositories.map((r) => (
          <RepositoryItem
            key={r.id}
            title={r.name}
            description={r.description}
            rating={r.stargazers_count.toString()}
            repoLink={r.html_url}
          />
        ))}
      {repositories.length === 0 && <NoItemsInfo />}
    </ExpansionPanelDetails>
  );
};

export default AccordionBody;
