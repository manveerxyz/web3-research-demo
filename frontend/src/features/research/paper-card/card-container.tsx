import { Paper } from 'common/models/paper';
import React from 'react';
import PaperCard from './card';

export type PropTypes = {
  paper: Paper
}

const PaperCardContainer = ({ paper }: PropTypes) => (
  <PaperCard
    p={paper}
  />
);

export default PaperCardContainer;
