import {
  Navigate,Outlet

} from 'react-router-dom';

function PublicRoute({ children, isAuthenticated, ...rest }) {
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default PublicRoute;