import React from 'react';
import EqualIcon from "../../Assets/Images/Frame 1000009100.png"
import LinkIcon from "../../Assets/Images/LinkIcon.png"
import "./AssessmentCard.css";
import CandidateIcon from "../../Assets/Images/CandidateIcon.png"
import SocialLink from "../../Assets/Images/SocialLink.png"
import Divider from '@mui/material/Divider';

const AssessmentCard = () => {
  return (
    <div>
      <div className='card'>
           <div className='row card-body'>
                <div className='col-md-4 col-sm-12 p-2'>
                    <div className='d-flex justify-content-around'>
                    <div className=''>
                        <div className='total-assessment'>
                            <h5 className='h3-size'>Total Assessment</h5>
                            <div className='d-flex'>
                            <img src={EqualIcon} alt="" className='small-icon'/>
                            <h3 className='ms-3'>32</h3>
                            </div> 
                        </div>
                    </div>
                     <Divider orientation="vertical" variant="middle" flexItem style={{height:"50px"}}/>
                    <div className=''>
                    <div className='total-assessment'>
                            <h5 className='h3-size'>Total Purpose</h5>
                            <div className='d-flex'>
                            <img src={LinkIcon} alt="" className='small-icon'/>
                            <h3 className='ms-3'>11</h3>
                            </div>
                           
                        </div>
                    </div>
                    <Divider orientation="vertical" variant="middle" flexItem style={{height:"50px"}}/>
                    </div>
                </div>
                <div className='col-md-4 p-2 col-sm-12'>
                <div className='total-assessment'>
                            <h5 className='h3-size'>Candidates</h5>
                            <div className='d-flex justify-content-around'>
                            <div className='d-flex'>
                            <img src={CandidateIcon} alt="" className='small-icon'/>
                            <div>
                            <h3 className='ms-3 total-candidate-size'>11,145 <span className='green-additional'>+89</span></h3>
                            <h6 className='candidate-size ms-2'>Total Candidate</h6>
                            </div>
                           
                            </div>
                            <Divider orientation="vertical" variant="middle" flexItem style={{height:"30px"}}/>
                            <div className='d-flex'>
                            <div>
                            <div>
                            <h3 className='ms-3 total-candidate-size'>1,14 <span className='green-additional'>+89</span></h3>
                            <h6 className='candidate-size ms-2'>Who Attempted</h6>
                            </div>
                            </div>
                           
                            </div>
                            <Divider orientation="vertical" variant="middle" flexItem style={{height:"30px"}}/>
                            
                            </div>
                            
                        </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                <div className='total-assessment p-2'>
                            <h5 className='h3-size'>Candidates Source</h5>
                            <div className='d-flex justify-content-around'>
                            <div className='d-flex'>
                            <img src={SocialLink} alt="" className='small-icon'/>
                            <div>
                            <h3 className='ms-3 total-candidate-size'>11,000 <span className='green-additional'>+89</span></h3>
                            <h6 className='candidate-size ms-2'>E-mail</h6>
                            </div>
                          
                            </div>
                            <Divider orientation="vertical" variant="middle" flexItem style={{height:"30px"}}/>
                            <div className='d-flex'>
                            <div>
                            <div>
                            <h3 className='ms-3 total-candidate-size'>11,000 <span className='green-additional'>+89</span></h3>
                            <h6 className='candidate-size ms-2'>Social Share</h6>
                            </div>
                            </div>
                            
                            </div>
                            <Divider orientation="vertical" variant="middle" flexItem style={{height:"30px"}}/>
                             <div className='d-flex'>
                            <div>
                            <div>
                            <h3 className='ms-3 total-candidate-size'>11,000 <span className='green-additional'>+89</span></h3>
                            <h6 className='candidate-size ms-2'>Unique Link</h6>
                            </div>
                            </div>
                            
                            </div>
                            </div>
                        </div>
                </div>
           </div>
           </div>
    </div>
  )
}

export default AssessmentCard
