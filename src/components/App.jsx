import { LoginPage } from '../pages/LoginPage/LoginPage.jsx';
import { InviteCodePage } from '../pages/InviteCode.jsx';
import { ProjectPage } from '../pages/SingleProjectPage/ProjectPage.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage.jsx';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/diploma_front/">
          <Route index element={<InviteCodePage />} />
          {/* <Route path="project" element={<ProjectPage />} /> */}
          <Route path="project/:project_id" element={<ProjectPage />} />
          <Route path="auth/login" element={<LoginPage />} />
          <Route path="auth/register" element={<SignUpPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
