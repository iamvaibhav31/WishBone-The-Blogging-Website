import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import Authcontext from '../context/Authcontext';
const Login = () => {
  let data = useContext(Authcontext)
  return (
    <>
      <section className="vh-100 m-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={data.login_Users} >
                {/* <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <Link type="button" className="btn btn-light btn-floating mx-1" to={"/"}>
                <img src={linkedin} className="bi" width="24" height="24" href="#twitter" />  
            </Link>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div> */}


                <div className="form-outline mb-4">
                  <input type="Username" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid username" autoComplete="on" name='username' required />
                  <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                  <label className="form-label" for="form3Example3">Username</label>

                </div>


                <div className="form-outline mb-3">
                  <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" autoComplete="on" name='password' required />
                  <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                  <label className="form-label" for="form3Example4">Password</label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" required />
                    <label className="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="Submit" className="btn btn-primary btn-lg" style={{ paddingleft: "2.5rem", paddingright: "2.5rem" }}>Login</button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to={"/register"}
                    className="link-danger">Register</Link></p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login