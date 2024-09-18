import React from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Typography, Button, Grid2 } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import CustomNavbar from "../components/CustomNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import candidatePic from "../images/candidate-pic.png";

function CandidateDetails() {
  const navigate = useNavigate();
  const SubmitVerification = () => {
    navigate("/PaymentForm");
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
        PREVIEW CANDIDATE DETAILS
      </Typography>

      <Card
        sx={{
          width: { xs: "90%", sm: "90%" },
          height: "auto",
          margin: "0 auto",
          borderRadius: "15px",
          boxShadow: `0 -4px 10px rgba(0, 0, 0, 0.2), /* Top shadow */0 2px 10px rgba(0, 0, 0, 0.2) /* Bottom shadow */`,
          borderLeft: "15px solid #4A2B3A",
          padding: { xs: "10px", sm: "20px" }, // Adjust padding for smaller screens
        }}
      >
        <CardContent sx={{ padding: { xs: "10px", sm: "20px" } }}>
          <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
            {/* User Photo Section */}
            <Grid
              item
              xs={12}
              sm={3}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <img
                src={candidatePic} // Replace with the actual user photo URL
                alt="User"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Grid>
            {/* KGID Number Section */}
            <Grid item xs={12} sm={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.secondary", fontWeight: "bold" }}
                  >
                    Employee ID/KGID NO/Phone Number
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    21798319
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.secondary", fontWeight: "bold" }}
                  >
                    KGID
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    21798319
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.secondary", fontWeight: "bold" }}
              >
                First Name
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                Ramkumar
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.secondary", fontWeight: "bold" }}
              >
                Middle Name
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                Not Available
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.secondary", fontWeight: "bold" }}
              >
                Last Name
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                Not Available
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.secondary", fontWeight: "bold" }}
              >
                Date Of Birth
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                1976-03-03
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.secondary", fontWeight: "bold" }}
              >
                Date Of Joining
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                1982-03-03
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.secondary", fontWeight: "bold" }}
              >
                Designation
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                PRIMARY SCHOOL ASSISTANT MASTER
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.secondary", fontWeight: "bold" }}
              >
                Address
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                Gyrahalli, Mathagadur Post
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.secondary", fontWeight: "bold" }}
              >
                Address 1
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                Holalkere Taluk
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.secondary", fontWeight: "bold" }}
              >
                Pincode
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                560078
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Typography
        variant="h6"
        sx={{
          marginTop: "30px",
          marginLeft: { xs: "20px", sm: "50px", md: "100px" },
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        PREFERED EXAM LOCATION/DATE
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
        <CardContent style={{ marginTop: "30px" }}>
          <div className="container">
            {/* First Location Preference */}
            <div className="row align-items-center mb-4">
              <div className="col-12 col-sm-12 col-md-3">
                <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Location Preference 1
                </h6>
              </div>

              <div className="col-12 col-sm-4 col-md-3">
                <p className="text-secondary fw-bold">
                  Preferred Exam Location
                </p>
                <p className="fw-bold">Bangalore</p>
              </div>

              <div className="col-12 col-sm-4 col-md-3">
                <p className="text-secondary fw-bold">Preferred Exam Date</p>
                <p className="fw-bold">12-12-2024</p>
              </div>

              <div className="col-12 col-sm-4 col-md-3">
                <p className="text-secondary fw-bold">Preferred Exam Time</p>
                <p className="fw-bold">10AM-11AM</p>
              </div>
            </div>

            {/* Second Location Preference */}
            <div className="row align-items-center mb-4">
              <div className="col-12 col-sm-12 col-md-3">
                <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Location Preference 2
                </h6>
              </div>

              <div className="col-12 col-sm-4 col-md-3">
                <p className="text-secondary fw-bold">
                  Preferred Exam Location
                </p>
                <p className="fw-bold">Bangalore</p>
              </div>

              <div className="col-12 col-sm-4 col-md-3">
                <p className="text-secondary fw-bold">Preferred Exam Date</p>
                <p className="fw-bold">13-12-2024</p>
              </div>

              <div className="col-12 col-sm-4 col-md-3">
                <p className="text-secondary fw-bold">Preferred Exam Time</p>
                <p className="fw-bold">11AM-12PM</p>
              </div>
            </div>

            {/* Third Location Preference */}
            <div className="row align-items-center mb-4">
              <div className="col-12 col-sm-12 col-md-3">
                <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Location Preference 3
                </h6>
              </div>

              <div className="col-12 col-sm-4 col-md-3">
                <p className="text-secondary fw-bold">
                  Preferred Exam Location
                </p>
                <p className="fw-bold">Bangalore</p>
              </div>

              <div className="col-12 col-sm-4 col-md-3">
                <p className="text-secondary fw-bold">Preferred Exam Date</p>
                <p className="fw-bold">14-12-2024</p>
              </div>

              <div className="col-12 col-sm-4 col-md-3">
                <p className="text-secondary fw-bold">Preferred Exam Time</p>
                <p className="fw-bold">12PM-01PM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Typography
        variant="h6"
        sx={{
          marginTop: "30px",
          marginLeft: { xs: "20px", sm: "50px", md: "100px" },
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        CONTACT INFORMATION
      </Typography>

      <Card
        sx={{
          width: "90%",
          height: "auto",
          margin: "0 auto",
          borderRadius: "15px",
          boxShadow: ` 0 -4px 10px rgba(0, 0, 0, 0.2),  /* Top shadow */0 2px 10px rgba(0, 0, 0, 0.2)    /* Bottom shadow */`,
          borderLeft: "15px solid #4A2B3A",
        }}
      >
        <CardContent style={{ marginTop: "20px", marginLeft: "50px" }}>
          <Grid2 container spacing={10}>
            <Grid2
              container
              alignItems="center"
              marginTop={2}
              spacing={20}
              rowSpacing={4}
            >
              <Grid2>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "text.secondary",
                    fontWeight: "bold",
                  }}
                >
                  Phone Number
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  8431914084
                </Typography>
              </Grid2>

              <Grid2>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "text.secondary", fontWeight: "bold" }}
                >
                  Email
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  vinithavinim@gmail.com
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>

      <Grid
        style={{ marginTop: "50px", marginBottom: "100px" }}
        container
        spacing={2}
        justifyContent="center"
      >
        <Grid item>
          <Button
            variant="contained"
            style={{ background: "#4A2B3A", width: "250px", height: "50px" }}
            onClick={SubmitVerification}
          >
            Proceed To Payment
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="#4A2B3A"
            style={{ width: "250px", height: "50px" }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CandidateDetails;