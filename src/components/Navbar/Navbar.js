import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
    <div className="container-fluid" style={{padding: "1px"}}>
      <div className="navbar1">
        <div className="navbar-logo1">
          <img src="/fight-right-logo.png" alt="Image Not Found" />
        </div>
        <div style={{marginLeft:"auto"}}>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">  
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0" style={{listStyleType: "none"}}>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Add Case
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Upcoming Hearing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      </div>
    </>
  );
}

export default Navbar;
