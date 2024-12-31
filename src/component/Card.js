import React from 'react'
import '../card.css'
import googleLogo from '../images/google.jpg'

export default function Card(props) {
  return (
    <div className='container' style={{justifyItems:'center',marginTop:"100px"}}>
        <div className="card_dashboard">
            <div className="top_div_dashboard">
                <div className="card-header_dashboard">
                    <p className="date_dashboard">{props.date}</p>
                    <div style={{marginRight:"13px",cursor:'pointer'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="" viewBox="0 0 16 16">
                            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"/>
                            <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"/>
                        </svg>
                    </div>
                </div>
                <div className="card-body_dashboard">
                <div className="company_dashboard">
                    <p style={{fontSize: "25px" ,fontWeight: "bold"}}>{props.company}</p>
                    {/* <img src="../images/google.jpg" alt="Google Logo" className="company-logo_dashboard"/> */}
                    <img src={googleLogo} alt="Google Logo" className="company-logo_dashboard"/>
                </div>
                <h3 className="job-title_dashboard">{props.role}</h3>
                <div className="tags_dashboard">
                    <span className="tag">{props.employmentType[0]}</span>
                    <span className="tag">{props.employmentType[1]}</span>
                    <span className="tag">{props.employmentType[2]}</span>
                    <span className="tag">{props.employmentType[3]}</span>
                    <span className="tag">{props.employmentType[4]}</span>
                </div>
                </div>
            </div>
            <div className="card-footer_dashboard">
            <div style={{display: "flex", flexDirection: "column", gap: "0px"}}>
                <p className="salary">{props.rate}</p>
                <p style={{marginBottom:"auto", fontSize: "10px"}}>{props.location}</p>
            </div>  
            <button className="details-btn_dashboard">{props.detailsUrl}</button>
            </div>
        </div>
    </div>
  )
}
