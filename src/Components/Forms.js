import React from "react";
import { Link } from "react-router-dom";

function Forms(){
    return (
        <div>
        <h1>Check the Status of Your Tax Return:</h1>
       <div style={{color:'blue', fontSize:'1.2rem', padding:'1rem', marginTop:'1rem'}}>
       <Link to="https://sa.www4.irs.gov/irfof/lang/en/irfofgetstatus.jsp"
        style={{
            color:'blue',
             fontSize:'1.2rem',
             
            }} >Check the status of your federal return</Link>
       </div>

        <div style={{padding:'1rem', marginBottom:'1rem'}}>
        <Link to="https://webapp.ftb.ca.gov/refund/login?Submit=Check+refund&Lang=en-us"
         style={{
            color:'blue',
             fontSize:'1.2rem', 
            
            }}>Check the status of your state tax return</Link>
        </div>
        
        </div>
    )
};

export default Forms