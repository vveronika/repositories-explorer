import React from 'react';
import { Repository } from 'models/repositories.types';
import { User } from 'models/users.types';
import AccordionPanel from 'components/ui/AccordionPanel';
import './search-results.styled.scss';

interface Props {
  results: User[];
  fetchDetails: (userName: string, userId: number, onSuccess: Function) => void;
}

const SearchResults: React.FC<Props> = ({ results, fetchDetails }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [expandedPanelRepos, setExpandedPanelRepos] = React.useState<any[]>([]);

  const handleChange = (panel: string, login: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean,
  ) => {
    fetchDetails(login, parseInt(panel), (res: Repository[]) => {
      setExpandedPanelRepos(res);
      setExpanded(isExpanded ? panel : false);
    });
  };

  return (
    <div className="results-wrapper">
      {results.length > 0 &&
        results.map((r) => (
          <AccordionPanel
            key={r.id}
            isExpanded={expanded === r.id.toString()}
            onChange={handleChange(r.id.toString(), r.login)}
            title={r.login}
            userId={r.id}
            repositories={expandedPanelRepos}
          />
        ))}
    </div>
  );
};

export default SearchResults;
