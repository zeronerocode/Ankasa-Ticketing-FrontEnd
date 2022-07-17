import React from 'react'
import './page.css'
import {  Link } from "react-router-dom";
function Page404() {
  return (
    <div>
      <div class="over404">
        <div class="darkOverlay"></div>
        <header>
          <h1 class="glitch" data-text="404">
            404
          </h1>
          <div className="link-container">
            <Link to="/home" className="more-link">
              Visit the home page
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Page404