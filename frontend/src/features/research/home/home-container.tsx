import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import { getPapers, selectResearch } from '../research-slice';
import HomeCard from './home';

export type PropTypes = { }

const ResearchHomeContainer = () => {
  const dispatch = useAppDispatch();
  const { paperIds } = useAppSelector(selectResearch);

  useEffect(() => {
    if (!paperIds || paperIds.length <= 0) {
      dispatch(getPapers({ ids: [0, 1] }));
    }
    // only run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeCard />
  );
};

export default ResearchHomeContainer;
