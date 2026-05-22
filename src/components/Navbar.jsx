import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <span className="navbar__icon">📚</span>
        <span className="navbar__title">BiblioFront</span>
      </div>
      <ul className="navbar__links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link--active" : "nav-link"
            }
          >
            Pesquisar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lancamentos"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link--active" : "nav-link"
            }
          >
            Últimos Lançamentos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
