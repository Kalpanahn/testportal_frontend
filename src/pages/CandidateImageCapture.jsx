import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Webcam from "react-webcam";
import LoginNavbar from "../components/LoginNavbar";
import candidatePic from "../images/candidate-pic.png";
import Success from '../images/SuccessIcon.png';

function CandidateImageCapture() {
  const [imageSrc, setImageSrc] = useState(null);
  const [systemNumber, setSystemNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);  
  const webcamRef = React.useRef(null);

  const captureImage = () => {
    const image = webcamRef.current.getScreenshot();
    setImageSrc(image);
  };

  const handleSave = () => {
    // Save image logic here
  };

  const handleRecapture = () => {
    setImageSrc(null);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false); 
  };

  return (
    <>
      <LoginNavbar />
      {/* Success Dialog */}
      <Dialog open={isSubmitted} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: "center" }}>
            <img src={Success} alt="Success" style={{ marginBottom: '10px', width: '80px' }} />
            <Typography variant="h4" fontWeight="bold">301</Typography>
            <Typography variant="body1" fontWeight="bold">
              The system number mentioned above has been assigned for your examination.
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>

      <Container>
        <Box>
          <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }}>
            <Grid item xs={12} md={6}>
              <Box display="flex" justifyContent="center" alignItems="center" height="400px" bgcolor="#e0e0e0">
                {imageSrc ? (
                  <img src={imageSrc} alt="Captured" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                ) : (
                  <Webcam
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width="100%"
                    height="100%"
                    videoConstraints={{ facingMode: "user" }}
                  />
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h6">IMAGE PREVIEW</Typography>
                {candidatePic ? (
                  <img src={candidatePic} alt="Preview" style={{ width: "100%", height: "auto", border: "1px solid #ccc" }} />
                ) : (
                  <Box width="100%" height="300px" bgcolor="#e0e0e0" display="flex" justifyContent="center" alignItems="center">
                    <Typography>Preview Image Here</Typography>
                  </Box>
                )}
                <Box mt={2} display="flex" justifyContent="space-between" width="100%">
                  <Button variant="contained" sx={{ backgroundColor: '#4A2B3A' }} onClick={handleSave}>
                    Save & Continue
                  </Button>
                  <Button variant="outlined" color="primary" onClick={handleRecapture}>
                    Recapture
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Typography
              variant="h6"
              sx={{
                marginTop: "30px",
                // marginLeft: { xs: "20px", sm: "50px", md: "100px" },
                marginRight:"728px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              PROVIDE A SYSTEM NUMBER
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
                   Please select a number

                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        size="small"
                        InputProps={{ style: { fontWeight: "bold" } }}
                  placeholder="659976465"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{ backgroundColor: "#4A2B3A" }}
                        onClick={handleSubmit} // Call submit function
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default CandidateImageCapture;
