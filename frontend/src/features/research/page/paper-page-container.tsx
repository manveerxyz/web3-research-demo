import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Paper } from 'common/models/paper';
import { mergeStatuses } from 'common/util/status';
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPaperById, selectResearch } from '../research-slice';
import ResourcePage from './paper-page';

const PaperPageContainer = () => {
  const dispatch = useAppDispatch();
  const { getPapersStatus, getPaperByIdStatus, paperIdToPaper } = useAppSelector(selectResearch);
  const [paper, setPaper] = useState<Paper | undefined>(undefined);

  const { id } = useParams();

  const status = useMemo(
    () => mergeStatuses(getPaperByIdStatus, getPapersStatus),
    [getPaperByIdStatus, getPapersStatus],
  );

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id && (!paperIdToPaper || Object.keys(paperIdToPaper).length === 0) && getPaperByIdStatus === 'idle') {
      dispatch(getPaperById({ id: parseInt(id, 10) }));
    }
    // only run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (id) {
      const paperId = parseInt(id, 10);
      if (paperIdToPaper && paperIdToPaper[paperId]) {
        setPaper(paperIdToPaper[paperId]);
      } else {
        dispatch(getPaperById({ id: paperId }));
      }
    }
  }, [id, dispatch, paperIdToPaper]);

  return (
    <ResourcePage
      paper={paper}
      status={status}
    />
  );
};

export default PaperPageContainer;
