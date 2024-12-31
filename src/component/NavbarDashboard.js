import {React,useState} from 'react'

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
                <a className="nav-link text-light" href="#">Job Market Updates</a>
                </li>
                <li className="nav-item">
                {/* <a className="nav-link text-light" href="#">Filter</a> */}

                <button className="btn text-light nav-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" style={{border:"none",marginTop:"2.5px"}}>Filter</button>
               

                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#">AI Cold Emailing</a>
                </li>
                
            </ul>
            <form className="d-flex" role="search">
                <button type="button" className="btn btn-primary d-flex" style={{width:"100px",alignItems:"center",gap:"10px",outline:"none !important"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"></path>
                    </svg>
                Profile
              </button>
            </form>
            </div>
        </div>
        </nav>
        

        {/* <div className="sideBar my-5" style={{height:"10vh",width:"auto",backgroundColor:"#f2f2f5"}}>
          <button className="btn text-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" style={{border:"none",paddingTop:"30px"}}>Filter</button>          
        </div> */}

        <div style={{width:"60vw",marginTop:"50px"}} className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel" style={{fontWeight:"bold" ,marginTop:"40px",marginLeft:"5px"}}>Filters</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{fontWeight:"bold" ,marginTop:"40px",marginRight:"10px"}}></button>
          </div>
          <div className="offcanvas-body" style={{marginLeft:"5px"}}>
            Put filter option here but above that put a motivational card which shows motivation quotes
          </div>
        </div>
    </div>
  )
}
