import React, { useState } from "react";
import { CNavbar, CContainer, CNavbarBrand, CNavbarToggler, CCollapse } from '@coreui/react';
import LoginIcon from '@mui/icons-material/LoginRounded';
import { Link } from "react-router-dom";
import './Head.css';

const Navigation = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
    
      <CNavbar expand="lg" colorScheme="dark" className="navbar">
        <CContainer fluid style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
          <CNavbarBrand className="logo">Twer<span>p/e</span></CNavbarBrand>
           <Link to="/Login" className="loginIconLink" ><LoginIcon/></Link>
        </CContainer>
      </CNavbar>
    </>
  );
};

export default Navigation;
