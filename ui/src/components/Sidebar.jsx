import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    const navigate = useNavigate();

    const logout = () => {
        navigate("/");
    }

  return (
    <div className="app-layout">
      <div className="sidebar">
        <div className="sidebar-brand-name">Financial<br />Dashboard</div>
        <div className="sidebar-brand-sub">Family Office</div>

        <nav className="sidebar-nav">
          <NavLink to="/family-tree">Family Tree</NavLink>
          <NavLink to="/wealth-assets">Wealth & Assets</NavLink>
          <NavLink to="/tax">Tax Intelligence</NavLink>
        </nav>

        <div className="sidebar-bottom">
          <hr className="sidebar-divider" />
          <button onClick={logout}>
            <i className="ti ti-logout" aria-hidden="true"></i>
            Logout
          </button>
        </div>
      </div>

      <main className="main-content">
        <Outlet />  
      </main>
    </div>
  );
};

export default Sidebar;
