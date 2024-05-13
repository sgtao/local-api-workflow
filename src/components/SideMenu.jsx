// components/SideMenu.jsx
import { Link } from 'react-router-dom';
import './SideMenu.css';

const SideMenu = () => {
  return (
    <nav className="side-menu">
      <h2>
        <Link to="/Home">Home</Link>
      </h2>
      <h3>Contents</h3>
      <ul>
        <li>
          <Link to="/EditFlow">Edit Flow</Link>
        </li>
        {/* Add more titles */}
      </ul>
    </nav>
  );
};

export default SideMenu;
