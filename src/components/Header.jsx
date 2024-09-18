import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import kaLogo from '../images/karnataka-logo.png';
import cegLogo from '../images/ceg-logo.png';
import KAlan from "../images/kannadaTest.png";

const Header = () => {
  return (
    <header>
      <Container fluid className="py-3 bg-light">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} sm={4} md={2} className="text-center mb-3 mb-md-0">
            <img src={kaLogo} alt="Government of Karnataka" className="img-fluid" style={{ maxWidth: "150px" }}/>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <div>
              <p className="mb-1 text-primary" style={{ fontWeight: 'bolder' }}>ಕರ್ನಾಟಕ ಸರ್ಕಾರ</p>
              <h4 className="mb-1 text-danger" style={{ fontWeight: 'bolder' }}>ಕಂಪ್ಯೂಟರ್ ಸಾಕ್ಷರತಾ ಪರೀಕ್ಷೆ</h4>
              <p className="mb-1 text-primary" style={{ fontWeight: 'bolder' }}>ಸಾರ್ವಜನಿಕ ಉದ್ದಿಮೆಗಳ ಸಿಬ್ಬಂದಿಗಳಿಗೆ (ನಿಗಮ ಮಂಡಳಿ ನೌಕರರಿಗೆ)</p>
              <h4 className="mb-1 text-success" style={{ fontWeight: 'bolder' }}>COMPUTER LITERACY TEST</h4>
              <small className="text-primary" style={{ fontWeight: 'bolder' }}>For Karnataka Public Enterprise (Board Corporation Employees)</small>
            </div>
          </Col>
          <Col xs={12} sm={4} md={2} className="text-center mb-3 mb-md-0">
            <img src={cegLogo} alt="CEG" className="img-fluid" style={{ maxWidth: "150px" }}/>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;