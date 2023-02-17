import CharactersPage from 'pages/CharactersPage';
import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="*" element={<Navigate replace to="/characters" />} />
    </ReactRouterRoutes>
  );
};
