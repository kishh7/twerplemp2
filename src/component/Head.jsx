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
        <CContainer fluid>
          <CNavbarBrand className="logo">Twer<span>p/e</span></CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <Link to="/Login" className="loginIconLink" ><LoginIcon/></Link>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};

export default Navigation;
