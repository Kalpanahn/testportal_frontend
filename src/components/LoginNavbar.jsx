import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import '../App.css';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function LoginNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <Navbar className="custom-navbar" variant="dark" expand="lg">
        <Container className="d-flex justify-content-between" > {/* Added padding on large devices */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation Links */}
            <Nav className="align-items-center d-flex flex-grow-1" style={{ gap: '15px' }}>
              <Nav.Link href="Home">HOME</Nav.Link>
              <Nav.Link href="examResults">EXAM RESULTS</Nav.Link>
              <Nav.Link href="#centre-details">CENTRE DETAILS</Nav.Link>
              <NavDropdown title="DOWNLOAD" id="download-dropdown">
                <NavDropdown.Item href="DownloadAdmitCard">Admit Card</NavDropdown.Item>
                <NavDropdown.Item href="PrintExamResult">Score Card/Digital Certificate</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#how-to-apply">HOW TO APPLY</Nav.Link>
              <Nav.Link href="#faqs">FAQs</Nav.Link>
              <Nav.Link href="#certification-manual">CERTIFICATION MANUAL</Nav.Link>
              <Nav.Link href="#contact-us">CONTACT US</Nav.Link>
              <Nav.Link href="#practice-test">PRACTICE TEST</Nav.Link>
            </Nav>

            {/* Logout Button */}
            <div className="ms-lg-auto d-flex justify-content-lg-end justify-content-center mt-3 mt-lg-0">
              <Button
                sx={{ backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: 'gray' } }}
                onClick={handleLogout}
              >
                <LogoutIcon sx={{ color: 'black', marginRight: '5px' }} /> Logout
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default LoginNavbar;
