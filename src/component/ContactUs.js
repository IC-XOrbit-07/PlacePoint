import React from 'react'

export default function ContactUs() {
  return (
    <div className="card contact_us">
        <div className="card-body">
            <h5 className="card-title text-center text-light" style={{fontSize:"30px"}}>Reach Out to Us</h5>
            <p className="card-text text-center text-light">Have any questions or need assistance? We're here to help! Feel free to get in touch, and we'll respond as soon as possible.</p>
            
            <div class="d-flex flex-row mb-3 direction_adjuster">
                <div class="p-2"><input type="text" className="form-control" style={{width:"auto"}} placeholder="Enter your email address" aria-label="Username"/></div>
                <div class="p-2"><button type="button" class="btn btn-primary">Send</button></div>
            </div>
        </div>
    </div>
    

  )
}
