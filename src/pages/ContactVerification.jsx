import React, { useState } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Grid,
  Grid2,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import captureImage from "../images/captureImage.png";
import uploadImage from "../images/uploadImage.png";
import uploadSignature from "../images/uploadSignature.png";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import CustomNavbar from '../components/CustomNavbar';

function ContactVerification() {
  const navigate = useNavigate();
  const [captchaValue, setCaptchaValue] = useState(null);

  // Replace with your actual site key
  const siteKey = "YOUR_RECAPTCHA_SITE_KEY";

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value); // Store the captcha response
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the CAPTCHA");
      return;
    }

    // Proceed with form submission (e.g., send data to backend)
    console.log("Captcha value:", captchaValue);
  };

  const SubmitVerification = () => {
    navigate("/CandidateDetails");
  };

  return (
    <>
  <CustomNavbar />
      <Box
        className='d-flex align-items-center'
        sx={{ marginLeft: { xs: '20px', sm: '50px', md: '100px' }, marginTop: '30px' }}
      >
        <Link to="/PreferedExamLocation" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box display="flex" alignItems="center">
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 15 }} />
            <Typography sx={{ marginLeft: '5px' }}>Back</Typography>
          </Box>
        </Link>
      </Box>

      <Typography variant="h6" sx={{ marginTop: '30px', marginLeft: { xs: '20px', sm: '50px', md: '100px' }, marginBottom: '10px', fontWeight: 'bold' }}>
        CONTACT VERIFICATION
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
            {/* Mobile Number Field and Verify Button */}
            <Grid item xs={12} sm={6} md={4} container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Mobile Number</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  placeholder="Please Enter Mobile Number"
                  InputProps={{ style: { fontWeight: "bold" } }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    height: 40,
                    width: "100%",
                    backgroundColor: "#4A2B3A",
                  }}
                >
                  Verify
                </Button>
              </Grid>
            </Grid>

            {/* Email Field and Verify Button */}
            <Grid item xs={12} sm={6} md={4} container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Email</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  placeholder="Please Enter Email"
                  InputProps={{ style: { fontWeight: "bold" } }}
                />
              </Grid>
              <Grid item xs={4} sm={2}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    height: 40,
                    width: "100%",
                    backgroundColor: "#4A2B3A",
                  }}
                >
                  Verify
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card
        sx={{
          width: "90%",
          margin: "30px auto",
          borderRadius: "15px",
          boxShadow: `0 -4px 10px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2)`,
          borderLeft: "15px solid #4A2B3A",
        }}
      >
        <CardContent style={{ marginTop: "30px" }}>
          <Grid2 container spacing={10}>
            <Grid2 item xs={12} sm={4}>
              <Card
                sx={{
                  width: {
                    xs: "100%",
                    sm: "90%",
                    md: "300px",
                  },
                  height: "auto",
                  margin: "0 auto",
                  borderRadius: "15px",
                  boxShadow: `0 -4px 10px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2)`,
                }}
              >
                <CardContent>
                  <Typography variant="subtitle1">Capture Picture</Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      border: "1px solid rgba(0, 0, 0, 0.23)",
                      borderRadius: "4px",
                      padding: "10px",
                      cursor: "pointer",
                      marginTop: "5px",
                      width: "100%",
                      height: "50px",
                    }}
                    onClick={() =>
                      document.getElementById("capture-image").click()
                    } // Opens camera for capture
                  >
                    <span style={{ flexGrow: 1, color: "rgba(0, 0, 0, 0.6)" }}>
                      Capture Picture
                    </span>
                    <IconButton
                      edge="end"
                      component="span"
                      onClick={() =>
                        document.getElementById("capture-image").click()
                      }
                    >
                      <img
                        src={captureImage}
                        alt="Capture"
                        style={{
                          width: "40px",
                          height: "40px",
                        }}
                      />
                    </IconButton>
                  </div>
                  <input
                    accept="image/*"
                    capture="user"
                    id="capture-image"
                    style={{ display: "none" }}
                    onChange={(e) => handleFileUpload(e, "capture")}
                  />

                  <Typography
                    variant="subtitle1"
                    align="center"
                    sx={{ color: "#f57c00", marginTop: "10px" }}
                  >
                    (or)
                  </Typography>

                  <Typography variant="subtitle1">Upload Picture</Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      border: "1px solid rgba(0, 0, 0, 0.23)",
                      borderRadius: "4px",
                      padding: "10px",
                      cursor: "pointer",
                      marginTop: "5px",
                      width: "100%",
                      height: "50px",
                    }}
                    onClick={() =>
                      document.getElementById("upload-picture").click()
                    }
                  >
                    <span style={{ flexGrow: 1, color: "rgba(0, 0, 0, 0.6)" }}>
                      Upload Picture
                    </span>
                    <IconButton
                      edge="end"
                      component="span"
                      onClick={() =>
                        document.getElementById("upload-picture").click()
                      }
                    >
                      <img
                        src={uploadImage}
                        alt="Upload"
                        style={{
                          width: "40px",
                          height: "40px",
                        }}
                      />
                    </IconButton>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    id="upload-picture"
                    style={{ display: "none" }}
                    onChange={(e) => handleFileUpload(e, "upload")}
                  />
                </CardContent>
              </Card>
            </Grid2>

            <Grid2 item xs={12} sm={4}>
              <Typography variant="subtitle1">Upload Signature</Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid rgba(0, 0, 0, 0.23)",
                  borderRadius: "4px",
                  padding: "10px",
                  cursor: "pointer",
                  marginTop: "5px",
                  width: "100%",
                  height: "50px",
                }}
                onClick={() =>
                  document.getElementById("upload-signature").click()
                }
              >
                <span style={{ flexGrow: 1, color: "rgba(0, 0, 0, 0.6)" }}>
                  Upload Signature
                </span>
                <IconButton
                  edge="end"
                  component="span"
                  onClick={() =>
                    document.getElementById("upload-signature").click()
                  }
                >
                  <img
                    src={uploadSignature}
                    alt="Signature"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  />
                </IconButton>
              </div>
              <input
                type="file"
                accept="image/*"
                id="upload-signature"
                style={{ display: "none" }}
                onChange={(e) => handleFileUpload(e, "signature")}
              />
              <Typography
                sx={{ color: "#f57c00", fontSize: "12px", marginTop: "10px" }}
              >
                File size should be within 20kb (JPEG/JPG files only)
              </Typography>
            </Grid2>

            <Grid2 item xs={12} sm={4}>
              <Typography variant="subtitle1">Enter Captcha</Typography>
              <TextField
                fullWidth
                variant="outlined"
                sx={{
                  marginTop: "5px",
                  marginBottom: "10px",
                }}
              />
              <ReCAPTCHA sitekey={siteKey} onChange={handleCaptchaChange} />
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
            style={{ background: "#4A2B3A", width: "200px", height: "40px" }}
            onClick={SubmitVerification}
          >
            Save & Preview
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="#4A2B3A"
            style={{ width: "150px", height: "40px" }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactVerification;