import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h1>Paw <span>Adoption</span></h1>
      </div>
      <div>
        <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
        <Link to="/adopt" style={{ margin: '0 1rem' }}>Adopt</Link>
        <Link to="/give-up" style={{ margin: '0 1rem' }}>Give Up a Pet</Link>
      </div>
    </nav>
  );
}

export default Navbar;
