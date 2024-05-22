import { LoginPage } from '../pages/LoginPage/LoginPage.jsx';
import { InviteCodePage } from '../pages/InviteCode.jsx';
import { ProjectPage } from '../pages/SingleProjectPage/ProjectPage.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage.jsx';
import { PrivatRoute } from '../pages/guards/PrivateRoute.jsx';
import { PubliceRoute } from '../pages/guards/PublickRoute.jsx';
import { CamerasPage } from '../pages/Cameras/CameraPage.jsx';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/diploma_front/">
          <Route
            path="auth/login"
            element={
              <PubliceRoute>
                <LoginPage />
              </PubliceRoute>
            }
          />
          <Route
            path="auth/register"
            element={
              <PubliceRoute>
                <SignUpPage />
              </PubliceRoute>
            }
          />

          <Route
            path="invite"
            element={
              <PrivatRoute>
                <InviteCodePage />
              </PrivatRoute>
            }
          />
          <Route
            path="project/:project_id"
            element={
              <PrivatRoute>
                <ProjectPage />
              </PrivatRoute>
            }
          />
          <Route
            path="project/:project_id"
            element={
              <PrivatRoute>
                <CamerasPage />
              </PrivatRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};
