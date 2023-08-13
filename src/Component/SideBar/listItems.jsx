import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminIcon from "../../Assets/Images/AdminIcon.png"
import Admin_meds from "../../Assets/Images/admin_meds.png"
import note_edit from "../../Assets/Images/note_alt.png";
import QuizIcon from "../../Assets/Images/quiz.png"



export const mainListItems = (
  <React.Fragment >
    <div className='text-center mb-3 dashboard-style'>
    <DashboardIcon />
      <ListItemText primary="Dashboard" />
    </div>
    <div className="p-3 dashboard-style">
    <div className='text-center mb-3 border border-primary'>
       
        <img src={note_edit} alt="" className='dashboard-icon'/>
      <ListItemText primary="Assessment" className='text-primary'/>
    </div></div>
    <div className='text-center mb-5 dashboard-style'>
    <img src={QuizIcon} alt="" className='dashboard-icon'/>
      <ListItemText primary="My Library" />
    </div>
   
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
  <div className='text-center mb-3'>
  <img src={AdminIcon} alt="" style={{width:"60px"}}/>
  </div>
   
     <div className='text-center dashboard-style'>
     <img src={Admin_meds} alt="" className='dashboard-icon'/>
      <ListItemText primary="Round Status" />
    </div>
  </React.Fragment>
);