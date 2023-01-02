import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
     return (
          <div class="container">
               <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <Link to={"/"} class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                         <span class="fs-4">Face Prep</span>
                    </Link>

                    <ul class="nav nav-pills">
                         <li class="nav-item"><Link to={""} class="mx-2" aria-current="page">Home</Link></li>
                         <li class="nav-item"><Link to={""} class="mx-2" aria-current="page">Register</Link></li>
                         <li class="nav-item"><Link to={""} class="mx-2" aria-current="page">Log in</Link></li>
                         <li class="nav-item"><Link to={""} class="mx-2" aria-current="page">Log out</Link></li>
                    </ul>
               </header>
          </div>
     );
}

export default Navbar;
