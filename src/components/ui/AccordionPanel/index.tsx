import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { Repository } from 'models/repositories.types';
import AccordionHeader from 'components/ui/AccordionHeader';
import AccordionBody from 'components/ui/AccordionBody';
import './accordion-panel.styled.scss';

interface Props {
  isExpanded: boolean;
  onChange: any;
  title: string;
  userId: number;
  repositories: Repository[];
}

const AccordionPanel: React.FC<Props> = ({
  isExpanded,
  onChange,
  title,
  userId,
  repositories,
}) => {
  return (
    <ExpansionPanel
      className="expansion-panel"
      expanded={isExpanded}
      onChange={onChange}
    >
      <AccordionHeader title={title} userId={userId} />
      <AccordionBody repositories={repositories} />
    </ExpansionPanel>
  );
};

export default AccordionPanel;
