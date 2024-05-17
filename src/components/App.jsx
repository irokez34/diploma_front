import { InviteCodePage } from '../pages/InviteCode.jsx';
import { ProjectPage } from '../pages/SingleProjectPage/ProjectPage.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/diploma_front/">
          <Route index element={<InviteCodePage />} />
          {/* <Route path="project" element={<ProjectPage />} /> */}
          <Route path="project/:project_id" element={<ProjectPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
