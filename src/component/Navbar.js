import React from 'react'

export default function Navbar() {
const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    };
  return (
    <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid navbar_section_highlighter">
                    <a className="navbar-brand placepoint_highlighter text-light mx-xl-5 mx-1" href="#">PlacePoint</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"><a className="nav-link text-light" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#" onClick={() => scrollToSection('features')}>Features</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#" onClick={() => scrollToSection('pricing')}>Pricing</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="#" onClick={() => scrollToSection('contact_us')}>Contact Us</a></li>
                        </ul>
                        <div className="d-flex my-2 mx-1 mx-xl-5">
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
