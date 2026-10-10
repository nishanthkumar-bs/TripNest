import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Compass, Home } from 'lucide-react';
import './NotFound.css';

export const NotFound = () => {
  useDocumentTitle('404 — Page Not Found');

  return (
    <div className="section-py notfound-section">
      <div className="container notfound-container">
        <div className="notfound-icon-wrap">
          <Compass size={44} />
        </div>

        <h1 className="notfound-code">
          404
        </h1>

        <h2 className="notfound-heading">
          Lost in Navigation?
        </h2>

        <p className="notfound-text">
          The destination or path you are looking for doesn’t exist or has been relocated to another sanctuary.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary">
            <Home size={16} /> Back to Home
          </Link>
          <Link to="/packages" className="btn btn-secondary">
            Explore Destinations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
