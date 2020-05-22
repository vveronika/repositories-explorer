import React from 'react';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './accordion-header.styled.scss';

interface Props {
  title: string;
  userId: number;
}

const AccordionHeader: React.FC<Props> = ({ title, userId }) => {
  return (
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`${userId}-content`}
      id={`${userId}-header`}
    >
      <Typography className="accordion-title">{title}</Typography>
    </ExpansionPanelSummary>
  );
};

export default AccordionHeader;
