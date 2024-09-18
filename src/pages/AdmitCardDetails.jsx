import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import candidatePic from "../images/candidate-pic.png";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import CustomNavbar from "../components/CustomNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useNavigate } from "react-router-dom";

const AdmitCardDetails = () => {
  const navigate = useNavigate();
  const [admitCardNumber, setAdmitCardNumber] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const handleEnterClick = () => {
   setShowDetails(true);
  };

  return (
    <>
      <CustomNavbar />
      <Box
        className="d-flex align-items-center"
        sx={{
          marginLeft: { xs: "20px", sm: "50px", md: "100px" },
          marginTop: "30px",
        }}
      >
        <Link
          to="/ContactVerification"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Box display="flex" alignItems="center">
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 15 }} />
            <Typography sx={{ marginLeft: "5px" }}>Back</Typography>
          </Box>
        </Link>
      </Box>

      <Typography
        variant="h6"
        sx={{
          marginTop: "30px",
          marginLeft: { xs: "20px", sm: "50px", md: "100px" },
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        PLEASE ENTER THE ADMIT CARD NUMBER
      </Typography>

      <Card
        sx={{
          width: "90%",
          height: "auto",
          margin: "0 auto",
          borderRadius: "15px",
          boxShadow: `0 -4px 10px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2)`,
          borderLeft: "15px solid #4A2B3A",
        }}
      >
        <CardContent sx={{ marginTop: "30px" }}>
          <Grid container spacing={2} rowSpacing={3}>
          <Grid item xs={12} sm={6} md={4} container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  Enter Admit Card Number
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  placeholder="958426856"
                  InputProps={{ style: { fontWeight: "bold" } }}
                  label="Enter Admit Card Number"
                  value={admitCardNumber}
                  onChange={(e) => setAdmitCardNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleEnterClick}
                  style={{ backgroundColor: "#4A2B3A" }}
                >
                  Enter
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {showDetails && (
        <>
          <Typography
            variant="h6"
            sx={{
              marginTop: "30px",
              marginLeft: { xs: "20px", sm: "50px", md: "100px" },
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            ADMIT CARD DETAILS
          </Typography>

          <Card
            sx={{
              width: "90%",
              height: "auto",
              margin: "0 auto",
              borderRadius: "15px",
              boxShadow: `0 -4px 10px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2)`,
              borderLeft: "15px solid #4A2B3A",
            }}
          >
            <CardContent sx={{ marginTop: "30px" }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={10} lg={10.5}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4} lg={3}>
                      <p color="textSecondary">
                        Employee ID/KGID NO/Phone Number
                      </p>
                      <Typography style={{fontSize:"15px", fontWeight:"bold"}}>659976465</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                      <p variant="h6" color="textSecondary">
                        First Name
                      </p>
                      <Typography style={{fontSize:"15px", fontWeight:"bold"}}>Ramkumar</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                      <p variant="subtitle1" color="textSecondary">
                        Payment
                      </p>
                      <Typography style={{fontSize:"15px", fontWeight:"bold"}}>1</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                      <p variant="subtitle1" color="textSecondary">
                        Attempt
                      </p>
                      <Typography style={{fontSize:"15px", fontWeight:"bold"}}>1</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                      <p variant="subtitle1" color="textSecondary">
                        Centre Code
                      </p>
                      <Typography style={{fontSize:"15px", fontWeight:"bold"}}>577006D</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                      <p variant="subtitle1" color="textSecondary">
                        Centre Name
                      </p>
                      <Typography style={{fontSize:"15px", fontWeight:"bold"}}>
                        Centre for Smart Governance
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                      <p variant="subtitle1" color="textSecondary">
                        Exam Date
                      </p>
                      <Typography style={{fontSize:"15px", fontWeight:"bold"}}>19-10-2023</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                      <p variant="subtitle1" color="textSecondary">
                        Exam Time
                      </p>
                      <Typography style={{fontSize:"15px", fontWeight:"bold"}}>11:30:00</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={2} lg={1.5}>
                  <img style={{ width: "150px" }} src={candidatePic} alt="" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {/* <Button
            variant="contained"
            href="/candidateImageCapture"
            color="primary"
            style={{
              marginLeft: "650px",
              width: "120px",
              marginTop: "40px",
              marginBottom: "20px",
              backgroundColor: "#4A2B3A",
              
            }}
          >
            Next
          </Button> */}
          <Button
            variant="contained"
             href="/candidateImageCapture"
            color="primary"
            style={{
              display: "block",
              width: "120px",
              margin: "40px auto 20px auto", // button in center
              backgroundColor: "#4A2B3A",
            }}
          >
            Next
          </Button>
        </>
      )}
    </>
  );
};

export default AdmitCardDetails;
