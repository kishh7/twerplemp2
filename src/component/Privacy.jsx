import React from 'react';
import Navigation from './Navigation/Navigation';

function Privacy() {
  return (
    <>
    <Navigation/>
    <div className="container-3">
    <h3 style={{color:"purple", paddingTop:"10px", paddingLeft:"20px",fontWeight:"bold", fontSize:"35px",}}>Twerple.io INC Privacy Statement</h3>
    <p style={{color:"black", fontWeight:"5px", fontSize:"15px", paddingLeft:"20px"}}>EFFECTIVE DATE: DECMEBER 11, 2023</p>

    <h4 style={{color:"black", fontWeight:"10px", fontSize:"25px", paddingLeft:"25px"}}>Introduction</h4>
    <p style={{color:"black", fontWeight:"3px", fontSize:"18px", paddingLeft:"20px"}}> Twerple.io, Inc. is committed to respecting the privacy rights of our customers 
        (“Customers”) and their end users (“End Users”), as well as other users of the Twerple newsfeed and responsive 
        chat services available through our API (collectively, the “Service”) and the Twerple websites,
         including (www.gettwerple.io) and any successor sites (collectively, “Websites” and each individually, a “Website”).</p>
        <br></br>
       <p style={{color:"black", fontWeight:"3px", fontSize:"18px", paddingLeft:"20px"}}>The purpose of this privacy statement (“Privacy Statement”) is to inform you about how we process your personal data
        when you use our Service and our Websites and to and to demonstrate our commitment to fair information practices and the protection of privacy.
        <br></br>
        This Privacy Statement may be changed over time. The most up-to-date Privacy Statement is published on our website. The last modifications to this Privacy Statement were made on December 11th 2023.
        <br></br></p>

        <h3 style={{color:"purple", paddingTop:"10px", paddingLeft:"20px"}}>When does this privacy statement apply?</h3>

        <p style={{color:"black", fontWeight:"3px", fontSize:"18px", paddingLeft:"20px"}}>

        This Privacy Statement is applicable to the processing of personal data for which Twerple acts as a controller. More specifically, to the processing performed by twerple with regards to all personal data
         of its customers, suppliers, business partners, applicants and other individuals. This Privacy Statement does not address the processing of personal data of employees in the context of their employment relationship with Twerple.
          Neither does it address the processing of personal data twerple processes on behalf of our controllers (e.g. other parties or customers), for which twerple acts as a processor.
        <br></br>

        This Privacy Statement indicates what personal data is collected and used (processed) by Twerple and for what purpose, and to which persons or entities the data will or may be provided.

        </p>
    
    </div>
    </>
  )
}

export default Privacy;