import React, { useState } from "react";
import { Container, Grid, Box, Typography, TextField, Button, Dialog, DialogContent } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import image1 from "../images/carosel1.png";
import image2 from "../images/carosel2.png";
import image3 from "../images/carosel3.png";
import image4 from "../images/carosel4.png";
import { styled } from "@mui/material/styles";

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

const carouselImages = [
    { image: image4, header: "REGISTER YOURSELF" },
    { image: image2, header: "FILL YOUR DETAILS" },
    { image: image1, header: "BOOK YOUR SLOT" },
    { image: image3, header: "PRINT ADMIT CARD" },
];

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

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

                    {/* Login Form */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ padding: { xs: 2, md: 4 }, border: "1px solid #e0e0e0", borderRadius: 2, boxShadow: 2, backgroundColor: "#fff" }}>
                            <form onSubmit={handleSubmit}>
                                <Typography variant="h5" align="center" sx={{ mb: 4, fontWeight: "bold", color: "#4A2B3A" }}>
                                    ADMIN LOGIN
                                </Typography>
                                <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "#4A2B3A" }}>EMAIL</Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Please Enter Email"
                                    margin="normal"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "#4A2B3A" }}>PASSWORD</Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Please Enter Password"
                                    margin="normal"
                                    variant="outlined"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Box display="flex" justifyContent="space-between" sx={{ mt: 4, flexDirection: { xs: "column", md: "row" } }}>
                                    <Button variant="contained" href="/Home" sx={{ backgroundColor: "#4A2B3A", mb: { xs: 2, md: 0 } }} type="submit">
                                        Submit
                                    </Button>
                                    <Button variant="outlined" sx={{ borderColor: "#4A2B3A", color: "#4A2B3A" }} type="reset">
                                        Reset
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>



        </>
    );
}

export default AdminLogin;
