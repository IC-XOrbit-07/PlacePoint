import React from 'react'

export default function Homeherosection() {
  return (
    <div>
      
      <div className="container text-center heading-css">
        Welcome to Our Amazing AI Powered Platform
      </div>
      <p className="container text-center my-3 subheading-css">Discover a new way to manage your projects and boost productivity.</p>
      
      <div className="container text-center my-4">
        <button type="button" className="btn btn-primary p-2 button_styler">Get Started</button>
        <button type="button" className="btn btn-light mx-2 p-2 button_styler">Learn More</button>
      </div>

      <div className="text-center feature_font text-white">Our Features</div>
      <div className="container my-5">
        <div className="row g-4">
            <div className="col-md-4">
                <div className="card text-white bg-dark h-100">
                    <div className="card-body features_box">
                        <h5 className="card-title" style={{fontSize: '28px'}}>Easy Integration</h5>
                        <p className="card-text">Effortlessly connect with the tools and platforms you already use, without any complicated setup.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4" style={{height: "auto"}}>
                <div className="card text-white bg-dark h-100">
                    <div className="card-body features_box">
                        <h5 className="card-title" style={{fontSize: '28px'}}>Real-time Collaboration</h5>
                        <p className="card-text">Empower your team to collaborate more effectively with live updates and instant communication.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4"> 
                <div className="card text-white bg-dark h-100">
                    <div className="card-body features_box">
                        <h5 className="card-title" style={{fontSize: "28px"}}>Advanced Analytics</h5>
                        <p className="card-text">Unlock valuable insights with our cutting-edge analytics tools. Gain a deeper understanding of your data through interactive dashboards.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
