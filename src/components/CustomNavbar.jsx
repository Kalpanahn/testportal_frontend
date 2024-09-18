import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import '../App.css';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function CustomNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <Navbar className="custom-navbar" variant="dark" expand="lg">
        <Container className="d-flex justify-content-between">
          {/* Navbar Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar Collapse */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="align-items-center flex-grow-1" style={{ gap: '15px' }}>
              <NavDropdown title="DOWNLOAD" id="download-dropdown">
                <NavDropdown.Item href="DownloadAdmitCard">Admit Card</NavDropdown.Item>
                <NavDropdown.Item href="#download-guidelines">Score Card/Digital Certificate</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#centre-details">CENTRE DETAILS</Nav.Link>
              <Nav.Link href="#how-to-apply">HOW TO APPLY</Nav.Link>
              <Nav.Link href="#faqs">FAQs</Nav.Link>
              <Nav.Link href="#certification-manual">CERTIFICATION MANUAL</Nav.Link>
              <Nav.Link href="#contact-us">CONTACT US</Nav.Link>
              {/* Center the Logout Button in Mobile View */}
              <Nav.Item className="d-lg-none mt-3">
                <div className="d-flex justify-content-center">
                  <Button
                    sx={{ backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: 'gray' } }}
                    onClick={handleLogout}
                  >
                    <LogoutIcon sx={{ color: 'black', marginRight: '5px' }} /> Logout
                  </Button>
                </div>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          {/* Logout Button for Large Screens */}
          <div className="d-none d-lg-flex align-items-center">
            <Button
              sx={{ backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: 'gray' } }}
              onClick={handleLogout}
            >
              <LogoutIcon sx={{ color: 'black', marginRight: '5px' }} /> Logout
            </Button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
