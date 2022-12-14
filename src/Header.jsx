import React, { Component } from 'react';
import './dashboard.css'
class Header extends Component {
  render() {
    return <div>
        <header className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow ">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">Faculty name</a>
                {/* <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                    <div className="navbar-nav">
                        <div className="nav-item text-nowrap">
                            <a className="nav-link px-3" href="/Login">Logout</a>
                        </div>
                    </div>
            </header>
    </div>;
  }
}

export default Header;
