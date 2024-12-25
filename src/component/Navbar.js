import React from 'react'

export default function Navbar() {
  return (
    <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand placepoint_highlighter mx-1" href="#">PlacePoint</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Testimonials</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                        </ul>
                        <div className="d-flex my-2 mx-1">
                            <button type="button" className="btn btn btn-primary">Login</button>
                            <button type="button" className="btn btn-dark mx-2">Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}
