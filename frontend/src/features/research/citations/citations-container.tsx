import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Paper } from 'common/models/paper';
import { mergeStatuses } from 'common/util/status';
import React, { useEffect, useMemo, useState } from 'react';
import { getCitations, getPapers, selectResearch } from '../research-slice';
import Citations from './citations';

/**
 * We only use this component on PaperID=0, so we use that ID as an assumption.
 */
const CitationsContainer = () => {
  const dispatch = useAppDispatch();
  const {
    paperIds,
    paperIdToPaper,
    paperIdToCitations,
    getPapersStatus,
    getCitationsStatus,
  } = useAppSelector(selectResearch);
  const [paper, setPaper] = useState<Paper>();
  const [citation, setCitation] = useState<Paper>();

  const status = useMemo(
    () => mergeStatuses(getPapersStatus, getCitationsStatus, true),
    [getPapersStatus, getCitationsStatus],
  );

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!paperIds || paperIds.length <= 0) {
      dispatch(getPapers({ ids: [0, 1] })).then((action) => {
        if (action.meta.requestStatus === 'fulfilled') {
          dispatch(getCitations({ id: 0 }));
        }
      });
    } else if (!paperIdToCitations[0] || paperIdToCitations[0].length <= 0) {
      // papers already fetched, get citations
      dispatch(getCitations({ id: 0 }));
    }
    // only run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (paperIdToPaper && paperIdToCitations && paperIdToCitations[0]?.length > 0) {
      const citationIdx = paperIdToCitations[0][0]; // assume it's only one citation for demo
      if (paperIdToPaper[0] && paperIdToPaper[citationIdx]) {
        setPaper(paperIdToPaper[0]);
        setCitation(paperIdToPaper[citationIdx]);
      }
    }
  }, [dispatch, paperIdToPaper, paperIdToCitations]);

  return (
    <Citations
      paper={paper}
      citation={citation}
      status={status}
    />
  );
};

export default CitationsContainer;
