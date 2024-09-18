import React from "react";
import { useState } from "react";
import {
    Container,
    Grid,
    CardContent,
    Card,
    TextField,
    Typography,
    Button,
    Divider,
    IconButton,
    MenuItem,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {
    CreditCard,
    AccountBalance,
    Wallet,
    AccountBalanceWallet,
    AccountCircle,
} from "@mui/icons-material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import upi from "../images/upi1.png"
import "../index.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import CustomNavbar from '../components/CustomNavbar';
 
const PaymentForm = () => {
    const [selectedMethod, setSelectedMethod] = useState("debitCard"); // Default is Debit Card
 
    const handleMethodChange = (method) => {
        setSelectedMethod(method);
    };
 
    const navigate = useNavigate();
    const SubmitVerification = () => {
        navigate('/CandidatePayDetails')
    }
    return (
        <>
            <CustomNavbar />
            <Box
                className='d-flex align-items-center'
                sx={{ marginLeft: { xs: '20px', sm: '50px', md: '100px' }, marginTop: '30px' }}
            >
                <Link to="/CandidateDetails" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Box display="flex" alignItems="center">
                        <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 15 }} />
                        <Typography sx={{ marginLeft: '5px' }}>Back</Typography>
                    </Box>
                </Link>
            </Box>
 
            <Card style={{ width: "75%", margin: "0 auto", height: "auto",marginTop:'40px', marginBottom:"50px", boxShadow: ` 0 -1px 5px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2)  ` }}>
                <Container>
                    <Grid container spacing={1} sx={{ marginTop: "4px" }}>
                        {/* Payment Methods */}
                        <Grid item xs={12} md={12} lg={3} >
                            <Card style={{ padding: "10px", height: "auto%", marginBottom: "10px", boxShadow: ` 0 -1px 5px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2)  ` }}>
                                <List component="nav" aria-label="payment methods">
                                    <ListItem
                                        button
                                        onClick={() => handleMethodChange("debitCard")}
                                    >
                                        <ListItemIcon>
                                            <CreditCard />
                                        </ListItemIcon>
                                        <ListItemText primary="Debit Card" />
                                    </ListItem>
                                    <ListItem
                                        button
                                        onClick={() => handleMethodChange("creditCard")}
                                    >
                                        <ListItemIcon>
                                            <CreditCard />
                                        </ListItemIcon>
                                        <ListItemText primary="Credit Card" />
                                    </ListItem>
                                    <ListItem
                                        button
                                        onClick={() => handleMethodChange("internetBanking")}
                                    >
                                        <ListItemIcon>
                                            <AccountBalance />
                                        </ListItemIcon>
                                        <ListItemText primary="Internet Banking" />
                                    </ListItem>
                                    <ListItem button onClick={() => handleMethodChange("wallet")}>
                                        <ListItemIcon>
                                            <AccountBalanceWallet />
                                        </ListItemIcon>
                                        <ListItemText primary="Wallet / Cash Cards" />
                                    </ListItem>
                                    <ListItem button onClick={() => handleMethodChange("upi")}>
                                        <ListItemIcon>
                                            <img
                                                src={upi}
                                                alt="UPI"
                                                style={{ width: 24, height: 24 }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="UPI" />
                                    </ListItem>
                                </List>
                            </Card>
                        </Grid>
 
                        {/* Payment Form */}
                        <Grid item xs={12} md={12} lg={6}>
                            <Card style={{ padding: "20px", height: "auto", marginBottom: "10px", boxShadow: ` 0 -1px 5px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2)  ` }}>
                                {selectedMethod === "debitCard" && (
                                    <>
                                        <Typography variant="h6" gutterBottom>
                                            Pay by Debit Card
                                        </Typography>
                                        <Divider />
                                        <TextField
                                            fullWidth
                                            label="Debit Card Number"
                                            variant="outlined"
                                            style={{ marginTop: "10px" }}
                                        />
                                        <Grid container spacing={2} style={{ marginTop: "10px" }}>
                                            <Grid item xs={12} md={6} lg={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Expire Month"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Expire Year"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                        <TextField
                                            fullWidth
                                            label="CVV/CVC"
                                            variant="outlined"
                                            style={{ marginTop: "10px" }}
                                        />
                                        <TextField
                                            fullWidth
                                            label="Card Holder Name"
                                            variant="outlined"
                                            style={{ marginTop: "10px" }}
                                        />
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            style={{ marginTop: "20px", background: "#4A2B3A" }}
                                            onClick={SubmitVerification}
                                        >
                                            Make Payment
                                        </Button>
                                    </>
                                )}
 
                                {selectedMethod === "creditCard" && (
                                    <>
                                        <Typography variant="h6" gutterBottom>
                                            Pay by Credit Card
                                        </Typography>
                                        <Divider />
                                        <TextField
                                            fullWidth
                                            label="Credit Card Number"
                                            variant="outlined"
                                            style={{ marginTop: "10px" }}
                                        />
                                        <Grid container spacing={2} style={{ marginTop: "10px" }}>
                                            <Grid item xs={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Expiration Date (Month)"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Expiration Date (Year)"
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                        <TextField
                                            fullWidth
                                            label="CVV/CVC"
                                            variant="outlined"
                                            style={{ marginTop: "10px" }}
                                        />
                                        <TextField
                                            fullWidth
                                            label="Card Holder Name"
                                            variant="outlined"
                                            style={{ marginTop: "10px" }}
                                        />
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            style={{ marginTop: "20px", background: "#4A2B3A" }}
                                            onClick={SubmitVerification}
                                        >
                                            Make Payment
                                        </Button>
                                    </>
                                )}
 
                                {selectedMethod === "internetBanking" && (
                                    <>
                                        <Typography variant="h6" gutterBottom>
                                            Pay by Internet Banking
                                        </Typography>
                                        <Divider />
                                        <TextField
                                            select
                                            fullWidth
                                            label="Select Bank"
                                            variant="outlined"
                                            style={{ marginTop: "10px" }}
                                        >
                                            <MenuItem value="SBI">State Bank of India</MenuItem>
                                            <MenuItem value="HDFC">HDFC Bank</MenuItem>
                                            <MenuItem value="ICICI">ICICI Bank</MenuItem>
                                        </TextField>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            style={{ marginTop: "20px", background: "#4A2B3A" }}
                                            onClick={SubmitVerification}
                                        >
                                            Make Payment
                                        </Button>
                                    </>
                                )}
 
                                {selectedMethod === "wallet" && (
                                    <>
                                        <Typography variant="h6" gutterBottom>
                                            Pay by Wallet / Cash Cards
                                        </Typography>
                                        <Divider />
                                        <TextField
                                            select
                                            fullWidth
                                            label="Select Wallet"
                                            variant="outlined"
                                            style={{ marginTop: "10px" }}
                                        >
                                            <MenuItem value="Paytm">Paytm</MenuItem>
                                            <MenuItem value="PhonePe">PhonePe</MenuItem>
                                            <MenuItem value="Mobikwik">Mobikwik</MenuItem>
                                        </TextField>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            style={{ marginTop: "20px", background: "#4A2B3A" }}
                                            onClick={SubmitVerification}
                                        >
                                            Make Payment
                                        </Button>
                                    </>
                                )}
 
                                {selectedMethod === "upi" && (
                                    <>
                                        <Typography variant="h6" gutterBottom>
                                            Pay by UPI
                                        </Typography>
                                        <Divider />
                                        <TextField
                                            fullWidth
                                            label="UPI ID"
                                            variant="outlined"
                                            style={{ marginTop: "10px" }}
                                        />
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            style={{ marginTop: "20px", background: "#4A2B3A" }}
                                            onClick={SubmitVerification}
                                        >
                                            Make Payment
                                        </Button>
                                    </>
                                )}
                            </Card>
                        </Grid>
 
                        {/* Merchant Info Card */}
                        <Grid item xs={12} md={12} lg={3}>
                            <Card
                                style={{
                                    border: "1px solid #90CAF9",
                                    padding: "20px",
                                    height: "fit-content",
 
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="subtitle1"
                                        style={{ fontWeight: "bold", color: "#1976D2" }}
                                    >
                                        Merchant Name
                                    </Typography>
                                    <Divider style={{ margin: "10px 0" }} />
                                    <Typography variant="body1">
                                        COMPUTER LITERACY
                                        <br />
                                        TEST PORTAL
                                    </Typography>
                                    <Divider style={{ margin: "10px 0" }} />
                                    <Typography
                                        variant="body2"
                                        style={{
                                            backgroundColor: "#E3F2FD",
                                            padding: "8px",
                                            textAlign: "center",
                                        }}
                                    >
                                        Payment Amount:{" "}
                                        <strong style={{ fontSize: "18px" }}>₹ 615.00</strong>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Card>
        </>
    );
};
 
export default PaymentForm;
 