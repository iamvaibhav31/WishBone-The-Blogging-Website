import React from "react";
import twitter from './static/image & SVG/twitter.svg'
import facebook from './static/image & SVG/facebook.svg'
import instagram from './static/image & SVG/instagram.svg'
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24" href="#bootstrap" />
            </a>
            <span className="text-muted">&copy; 2021 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <Link className="text-muted" to={"/"}>
                <img src={twitter} className="bi" width="24" height="24" href="#twitter" />
               
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-muted" to={"/"}>
                <img src={instagram} className="bi" width="24" height="24" href="#instagram" />
               
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-muted" to={"/"}>
                <img src={facebook} className="bi" width="24" height="24" href="#facebook" />
               
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
