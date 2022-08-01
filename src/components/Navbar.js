import React, { useState, useContext } from "react";
import Authcontext from "../context/Authcontext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Blog from "./static/image & SVG/blogger.svg";
import Add from "./static/image & SVG/add.svg";
import { Dropdown } from "react-bootstrap";
// import Notification from "./static/image & SVG/notification.svg"
const Navbar = () => {
  let data = useContext(Authcontext);
  const [search, setsearch] = useState("");
  const navigate = useNavigate();
  const userid = localStorage.getItem("userid")
  const userprofilepic = localStorage.getItem("userprofilepic")
  const goTosearch = (event) => {
    event.preventDefault();
    navigate({
      pathname: "/search",
      search: "?s=" + search,
    });
  };

  const url = (link, id) => {
    return link + id
  }

  return (
    <>
      <header className="p-3  ">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to={"/"}
              className="d-flex align-items-center mb-2 mb-lg-0  text-decoration-none"
            >
              <img
                src={Blog}
                className="bi me-2"
                width="40"
                height="32"
                alt="logo"
              />
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink to={"/"} className="nav-link px-2 link-dark">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"} className="nav-link px-2 link-dark">
                  Features
                </NavLink>
              </li>

              <li>
                <NavLink to={"/"} className="nav-link px-2 link-dark">
                  About us
                </NavLink>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              onSubmit={goTosearch}
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                name="search"
                aria-label="Search"
                onChange={(event) => {
                  setsearch(event.target.value);
                }}
              />
              <button type="submit" hidden></button>
            </form>
            {localStorage.getItem("authTokens") !== null ? (
              <div className="text-end">
                <Dropdown className="d-inline mx-2" autoClose="outside">
                  <Dropdown.Toggle id="dropdown-autoclose-outside">
                    <img
                      src={url("https://vaibhavsharma3108.pythonanywhere.com", userprofilepic)}
                      alt="mdo"
                      width="32"
                      height="32"
                      className="rounded-circle"
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>

                    <Dropdown.Item>
                      <Link to={"/Addblog"} className="text-decoration-none">
                        Add Blog...
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item >
                      <Link to={url("/profile/", userid)} className="text-decoration-none text-black">
                        Profile
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Divider />

                    <Dropdown.Item onClick={data.logout_Users}>
                      Logout
                    </Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              <div className="text-end">
                <Link
                  to={"/login"}
                  class="btn btn-outline-dark me-2"
                  role="button"
                >
                  Login
                </Link>
              </div>
            )}
            {/* className="dropdown text-end"         */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
