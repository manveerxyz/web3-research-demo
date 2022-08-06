import WaitlistContainer from 'features/home/waitlist/waitlist-container';
import PaperPageContainer from 'features/research/page/paper-page-container';
import CitationsContainer from 'features/research/citations/citations-container';
import ResearchHomeContainer from 'features/research/home/home-container';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Router = () => (
  <Routes>
    <Route path="/" element={<WaitlistContainer />} />

    <Route path="research">
      <Route index element={<ResearchHomeContainer />} />
      <Route path=":id" element={<PaperPageContainer />} />
      <Route path=":id/citations" element={<CitationsContainer />} />
    </Route>
  </Routes>
);

export default Router;
