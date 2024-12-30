import React from 'react'
import { SplitText } from "../component/SplitText";

export default function Homeherosection() {
  return (
    <div>
      
      <div className="container text-center heading-css">
        Welcome to Your <SplitText text="AI-Powered" className="custom-class" delay={50} /> Placement Buddy
      </div>
      <p className="container text-center my-3 subheading-css">Helping you find the right opportunities and career paths with ease</p>
      
      <div className="container text-center my-4">
        {/* here i have defined id as fetures to stop the scroll at a partivluar level */}
        <button type="button" className="btn btn-primary p-2 button_styler">Get Started</button> 
        <button type="button" className="btn btn-light mx-2 p-2 button_styler">Learn More</button>
      </div>

      <div id="features"></div>
      
       {/* Features Section */}
      <div className="text-center feature_font text-white">Our Features</div>
      <div className="container my-2 p-4">
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

      <div id="pricing"></div>

      {/* Pricing Section */}
      <div className="text-center feature_font text-white">Flexible Pricing</div>
      <div className="container my-2 p-4">
        <div className="row g-4">
            <div className="col-md-4">
                <div className="card text-white bg-dark h-100">
                    <div className="card-body  pricing_box">
                        <h1 className="card-title" style={{fontSize: '35px'}}>Basic</h1>
                        <h5 className="card-title" style={{fontSize: '15px'}}>₹0 per month</h5>
                        <ul class="my-4 mx-3 list-group">
                          <li className='mb-2'>Access to limited job postings</li>
                          <li className='mb-2'>Basic analytics reports</li>
                          <li className='mb-2'>Email support</li>
                          <li className='mb-2'>Access to free webinars</li>
                          <li className='mb-2'>Weekly placement updates</li>
                          <li className='mb-2'>Mobile-friendly interface</li>
                          <li className='mb-2'>Resume builder tool (basic)</li>
                          <li className='mb-2'>Standard security and privacy</li>
                        </ul>
                        <div className="container text-center">
                          <button type="button" class="btn btn-dark px-5 py-2 choose_plan_button">Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card text-white bg-dark h-100">
                    <div className="card-body  pricing_box">
                    <h1 className="card-title" style={{fontSize: '35px'}}>Pro</h1>
                        <h5 className="card-title" style={{fontSize: '15px'}}>₹299 per month</h5>
                        <ul class="my-4 mx-3 list-group">
                          <li className='mb-2'>Unlimited job applications</li>
                          <li className='mb-2'>Advanced analytics tools</li>
                          <li className='mb-2'>Personalized recommendations</li>
                          <li className='mb-2'>Company-specific preparation</li>
                          <li className='mb-2'>Dedicated career advisor</li>
                          <li className='mb-2'>Resume builder with templates</li>
                          <li className='mb-2'>Access to exclusive workshops</li>
                          <li className='mb-2'>Monthly placement trends</li>
                        </ul>
                        <div className="container text-center">
                          <button type="button" class="btn btn-dark px-5 py-2 choose_plan_button">Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4"> 
                <div className="card text-white bg-dark h-100">
                    <div className="card-body pricing_box">
                    <h1 className="card-title" style={{fontSize: '35px'}}>Enterprise</h1>
                        <h5 className="card-title" style={{fontSize: '15px'}}>₹200 per user</h5>
                        <ul class="my-4 mx-3 list-group">
                          <li className='mb-2'>Tailored Business Solutions</li>
                          <li className='mb-2'>Advanced team management</li>
                          <li className='mb-2'>Dedicated account manager</li>
                          <li className='mb-2'>API integrations</li>
                          <li className='mb-2'>Bulk resume screening</li>
                          <li className='mb-2'>Access to alumni network</li>
                          <li className='mb-2'>Onboarding and training</li>
                          <li className='mb-2'>Hiring Manager Collaboration</li>
                        </ul>
                        <div className="container text-center">
                          <button type="button" class="btn btn-primary px-5 py-2 choose_plan_button">Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
