import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-bold fs-5">
                Register
              </h5>
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    required
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-danger btn-login text-uppercase fw-bold"
                    type="submit"
                  >
                    Register
                  </button>
                  <p className="mt-2">
                    All Ready Registered{" "}
                    <NavLink
                      className="link-success fw-bold text-decoration-none"
                      to="/Login"
                    >
                      Login Now
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
