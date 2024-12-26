import React from 'react'

export default function Navbar() {
  return (
    <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid navbar_section_highlighter">
                    <a className="navbar-brand placepoint_highlighter mx-1 text-light" href="#">PlacePoint</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"><a className="nav-link text-light" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#">Features</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#">Pricing</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#">Testimonials</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#">Contact</a></li>
                        </ul>
                        <div className="d-flex my-2 mx-1">
                            <button type="button" className="btn btn-primary button_styler">Login</button>
                            <button type="button" className="btn btn-light mx-2 button_styler">Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}
