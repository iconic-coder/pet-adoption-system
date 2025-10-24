import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
        <div>
          <h1>
            Paw <span>Adoption</span>
          </h1>
        </div>

        <div>
          <a href="#" >Home</a>
          <a href="#" >Adopt</a>
          <a href="#" >Give Up a Pet</a>
          <button >
            Login
          </button>
        </div>
    </nav>
  );
}

export default Navbar;
