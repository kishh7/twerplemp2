import React, { useState } from "react";
import { CNavbar, CContainer, CNavbarBrand,  CNavbarToggler,  CCollapse, CNavbarNav, CNavItem,
CNavLink, CForm, CFormInput,CButton, CDropdown,  CDropdownToggle, CDropdownMenu, CDropdownItem, } from '@coreui/react';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import './Navigation.css';
import { Link } from "react-router-dom";

const Navigation = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
        <CNavbar expand="lg" colorScheme="dark" className="navbar">
          <CContainer fluid>
            <CNavbarBrand href="/Feed" className="logo">Twer<span>p/e</span></CNavbarBrand>
            <CNavbarToggler
              aria-label="Toggle navigation"
              aria-expanded={visible}
              onClick={() => setVisible(!visible)}
            />
            <CCollapse className="navbar-collapse" visible={visible}>
              <CNavbarNav className="me-auto mb-2 mb-lg-0">
                <CNavItem>
                  <CNavLink href="/about">About</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="/Channel">My Channel</CNavLink>
                </CNavItem>

                <CDropdown inNav>
                <CDropdownToggle caret color="violet">
                  <NotificationsIcon />
                </CDropdownToggle>

                <CDropdownMenu className="violet-dropdown">
                  <CDropdownItem href="/notifications">Gela share your live </CDropdownItem>
                  <CDropdownItem href="/notifications">Drea share your live</CDropdownItem>
                  <CDropdownItem href="/notifications">Vincente share your live</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>

              </CNavbarNav>
              <CForm className="d-flex align-items-center">
             <div className="d-flex align-items-center me-3">
            <CFormInput type="search" placeholder="Search" />
                <CButton type="submit" color="light"
                 variant="outline" className="ms-2"> Search </CButton>
                  <div className="login" style={{marginLeft: "5px"}}>
    <Link to="/"><LogoutIcon style={{marginLeft:"5px", fontSize:"35px", color:"purple"}}/></Link>
             </div>
         </div>
       
        </CForm>
            </CCollapse>
          </CContainer>
        </CNavbar>
      </>
  );
};

export default Navigation;