import React, { useState } from "react";
import { Container, Grid, Box, Typography, TextField, ToggleButtonGroup, ToggleButton, Button, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../images/carosel1.png";
import image2 from "../images/carosel2.png";
import image3 from "../images/carosel3.png";
import image4 from "../images/carosel4.png";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useRef } from "react";

const StyledDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    borderRadius: 10,
    padding: "20px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    width: "100%",
  },
  "& .MuiDialogTitle-root": {
    fontSize: "1.2rem",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const OTPInput = styled(TextField)({
  width: "60px",
  marginRight: "10px",
  "& input": {
    textAlign: "center",
    fontSize: "1.5rem",
    padding: "10px",
  },
});

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: "#5c1f45",
    color: "#fff",
  },
  "&.MuiToggleButton-root": {
    borderRadius: "50px 0 0 50px",
    padding: "10px 30px",
    fontSize: "16px",
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "45%",
      fontSize: "14px",
    },
  },
}));

const StyledToggleButtonNonKgid = styled(ToggleButton)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: "#5c1f45",
    color: "#fff",
  },
  "&.MuiToggleButton-root": {
    borderRadius: "0 50px 50px 0",
    padding: "10px 30px",
    fontSize: "16px",
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "45%",
      fontSize: "14px",
    },
  },
}));

const CandidateRegistartion = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("KGID");
  const [kgidNumber, setKgidNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    if (e.key === "ArrowRight" && index < 3) {
      inputRefs.current[index + 1].focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSelection = (event, newValue) => {
    if (newValue !== null) {
      setActiveTab(newValue);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (activeTab === "KGID") {
      console.log("Submitting KGID form with:", { kgidNumber, phoneNumber });
    } else {
      console.log("Submitting Non-KGID form");
    }
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const carouselImages = [
    { image: image4, header: "REGISTER YOURSELF" },
    { image: image2, header: "FILL YOUR DETAILS" },
    { image: image1, header: "BOOK YOUR SLOT" },
    { image: image3, header: "PRINT ADMIT CARD" },
  ];

  return (
    <>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ minHeight: "100vh", px: { xs: 2, sm: 3 } }}>
          <Grid item xs={12} md={6} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "2rem" }}>
            <Carousel showThumbs={false} autoPlay infiniteLoop interval={2000} showStatus={false}>
              {carouselImages.map((item, index) => (
                <Box key={index} display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                  <Typography variant="h5" sx={{ mb: 2, color: "#4A2B3A", fontSize: "1.5rem", fontWeight: "bold" }}>
                    {item.header}
                  </Typography>
                  <img src={item.image} alt={`Slide ${index}`} style={{ width: "100%", borderRadius: "8px", marginRight: "10px" }} />
                </Box>
              ))}
            </Carousel>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ padding: { xs: 2, md: 4 }, border: "1px solid #e0e0e0", borderRadius: 2, boxShadow: 2, backgroundColor: "#fff" }}>
              <ToggleButtonGroup value={activeTab} exclusive onChange={handleSelection} aria-label="KGID selector" fullWidth
                sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
                <StyledToggleButton value="KGID" aria-label="KGID">
                  KGID
                </StyledToggleButton>
                <StyledToggleButtonNonKgid value="NON-KGID" aria-label="Non-KGID">
                  Non-KGID
                </StyledToggleButtonNonKgid>
              </ToggleButtonGroup>

              {/* KGID Form */}
              {activeTab === "KGID" && (
                <form onSubmit={handleSubmit}>
                  <Typography variant="h5" align="center" sx={{ mb: 4, fontWeight: "bold", color: "#4A2B3A" }}>
                    APPLICANT REGISTRATION
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: "#4A2B3A" }}>KGID NUMBER</Typography>
                  <TextField fullWidth placeholder="Please Enter KGID Number" margin="normal" variant="outlined"
                    value={kgidNumber} onChange={(e) => setKgidNumber(e.target.value)} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: "#4A2B3A" }}>PHONE NUMBER</Typography>
                  <TextField fullWidth placeholder="Please Enter Phone Number" margin="normal" variant="outlined"
                    value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                  <Box display="flex" justifyContent="space-between" sx={{ mt: 4, flexDirection: { xs: 'column', md: 'row' } }}>
                    <Button variant="contained" sx={{ backgroundColor: "#4A2B3A", mb: { xs: 2, md: 0 } }} type="submit">
                      Send OTP
                    </Button>
                    <Button variant="outlined" sx={{ borderColor: "#4A2B3A", color: "#4A2B3A" }} type="reset">
                      Reset
                    </Button>
                  </Box>
                </form>
              )}

              {/* Non-KGID Form */}
              {activeTab === "NON-KGID" && (
                <form onSubmit={handleSubmit}>
                  <Typography variant="h5" align="center" sx={{ mb: 4, fontWeight: "bold", color: "#4A2B3A" }}>
                    APPLICANT REGISTRATION
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: "#4A2B3A" }}>PHONE NUMBER</Typography>
                  <TextField fullWidth placeholder="Please Enter Phone Number" margin="normal" variant="outlined"
                    value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                  <Box display="flex" justifyContent="space-between" sx={{ mt: 4, flexDirection: { xs: 'column', md: 'row' } }}>
                    <Button variant="contained" sx={{ backgroundColor: "#4A2B3A", mb: { xs: 2, md: 0 } }} type="submit">
                      Send OTP
                    </Button>
                    <Button variant="outlined" sx={{ borderColor: "#4A2B3A", color: "#4A2B3A" }} type="reset">
                      Reset
                    </Button>
                  </Box>
                </form>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* OTP Modal */}
      <StyledDialog open={openModal} onClose={handleModalClose}>
        <DialogTitle>
          PLEASE VERIFY YOUR PHONE NUMBER
          <IconButton aria-label="close" onClick={handleModalClose}
            sx={{ position: "absolute", right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" align="center" sx={{ mb: 2, color: "#4A2B3A" }}
          >
            Your One-Time Password (OTP) has been sent to your registered phone number
          </Typography>
          <Box display="flex" justifyContent="center" mb={2}>
            {/* OTP inputs */}
            {otp.map((data, index) => (
              <OTPInput key={index} variant="outlined" value={otp[index]} inputProps={{ maxLength: 1 }}
                onChange={(e) => handleChange(e, index)} onKeyDown={(e) => handleKeyDown(e, index)}
                inputRef={(el) => (inputRefs.current[index] = el)} />
            ))}
          </Box>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" href="/CandidateUpdateDetails" color="primary" sx={{ backgroundColor: "#5c1f45" }}>
                CONTINUE
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" sx={{ color: "#5c1f45", borderColor: "#5c1f45" }}>
                RESEND
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </StyledDialog>
    </>
  );
};

export default CandidateRegistartion;
