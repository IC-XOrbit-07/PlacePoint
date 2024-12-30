import React from 'react'

export default function NavbarDashboard() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand text-light" href="#" style={{fontWeight:"bold",fontSize:"25px"}}>PlacePoint</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 dashboardNavbar_reponsive">
                <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Dashboard</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#">Applied Jobs</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#">Analytics & Reports</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#">Settings</a>
                </li>
                
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" style={{backgroundColor:"f2f2f5"}} type="search" placeholder="Search" aria-label="Search"/>
                <button type="button" class="btn btn-primary d-flex" style={{width:"100px",alignItems:"center",gap:"10px",outline:"none !important"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"></path>
                    </svg>
                Profile
              </button>
            </form>
            </div>
        </div>
        </nav>
    </div>
  )
}
