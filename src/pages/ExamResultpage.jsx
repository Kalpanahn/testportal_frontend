import React, { useState, useEffect } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Attempt from "../images/Attempt-pic.png";
import Pass from "../images/Pass-pic.png";
import Fail from "../images/Fail-pic.png";
import LoginNavbar from "../components/LoginNavbar";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const data = [
  {
    slno: 1,
    applicationNo: 1223,
    dateOfExam: "10-06-2024",
    paymentStatus: "Exempted",
    status: "Attempted",
    action: "View",
  },
  {
    slno: 2,
    applicationNo: 9862,
    dateOfExam: "11-08-2024",
    paymentStatus: "Pending",
    status: "Absent",
    action: "View",
  },
];

const StatusBadge = ({ status }) => {
  return (
    <Typography
      variant="body2"
      sx={{
        display: "inline-block",
        padding: "8px 16px",
        width: "100px",
        borderRadius: "20px",
        fontWeight: "bolder",
        color: status === "Attempted" ? "green" : "red",
        backgroundColor: status === "Attempted" ? "#E6F4EA" : "#FDEDEA",
        textAlign: "center",
      }}
    >
      {status}
    </Typography>
  );
};

function ExamResultPage() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [open]);

  return (
    <>
      <LoginNavbar />
      {/* <Box
        className="d-flex align-items-center"
        sx={{
          marginLeft: { xs: '16px', sm: '32px', md: '64px' },
          marginTop: '24px',
        }}
      >
        <Link to="/ExamResult" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box display="flex" alignItems="center">
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 16 }} />
            <Typography sx={{ marginLeft: '5px' }}>Back</Typography>
          </Box>
        </Link>
      </Box> */}

      <Card
        sx={{
          width: "90%",
          height: "auto",
          margin: "0 auto",
          marginTop: "30px",
          borderRadius: "15px",
          boxShadow: `0 -4px 10px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2)`,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#4A2B3A",
            width: "100%",
            height: "45px",
            color: "white",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
          }}
        >
          <Typography variant="h6" sx={{ textAlign: "left", width: "100%" }}>
            EXAM RESULT
          </Typography>
        </Box>

        <Grid
          container
          spacing={2}
          sx={{
            padding: "20px",
            justifyContent: "space-between",
          }}
        >
          {[
            { image: Attempt, label: "Attempts", count: 0 },
            { image: Pass, label: "Passed", count: 0 },
            { image: Fail, label: "Failed", count: 0 },
          ].map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  height: "130px",
                  width: "100%", // card take full width within the Grid item
                  maxWidth: "300px", // max-width to control the size of each card
                  borderRadius: "10px",
                  border: "1px solid #D3D3D3",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CardContent sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    style={{
                      width: "80px",
                      height: "80px",
                      marginRight: "18px",
                    }}
                    src={item.image}
                    alt={item.label}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      className="text-muted"
                      sx={{ marginTop: "15px" }}
                    >
                      {item.label}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {item.count}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>

      {/* Table with Exam Results */}
      <Card
        sx={{
          width: "90%",
          margin: "20px auto",
          marginTop: "20px",
          borderRadius: "15px",
          boxShadow: `0 -4px 10px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.2)`,
        }}
      >
        <TableContainer component={Paper} style={{ padding: "45px" }}>
          <Table>
            <TableHead>
              <TableRow>
                {[
                  "Sl.No",
                  "Application Number",
                  "Exam Date",
                  "Payment Status",
                  "Exam Status",
                  "Action",
                ].map((head) => (
                  <TableCell key={head} align="center">
                    <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
                      {head}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                    {row.slno}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                    {row.applicationNo}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                    {row.dateOfExam}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                    {row.paymentStatus}
                  </TableCell>
                  <TableCell align="center">
                    <StatusBadge status={row.status} />
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                    <Button
                      variant="text"
                      color="primary"
                      onClick={
                        row.status === "Attempted" ? handleClickOpen : undefined
                      }
                      disabled={row.status !== "Attempted"}
                      sx={{ fontWeight: "bolder" }}
                    >
                      {row.action}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Modal */}
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: "80vw",
              maxWidth: "1200px",
              borderRadius: '15px'
            },
          }}
        >
          <DialogTitle>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >

              <Button onClick={handleClose}>
                <CloseIcon sx={{ color: "black" }} />
              </Button>
            </Box>
          </DialogTitle>
          <DialogContent>
            <Box sx={{ overflowX: "auto" }}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {[
                        "Attempts",
                        "Date Of Exam",
                        "Score",
                        "Grade",
                        "Passed/Failed",
                        "Score Card",
                        "Action",
                      ].map((head) => (
                        <TableCell key={head} align="center" sx={{ fontWeight: "bolder", fontSize: "17px" }}>
                          {head}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">1</TableCell>
                      <TableCell align="center">16-03-2023</TableCell>
                      <TableCell align="center">30</TableCell>
                      <TableCell align="center">E</TableCell>
                      <TableCell align="center">
                        <Typography
                          sx={{
                            display: 'inline-block',
                            textAlign: 'center',
                            width: '100px',
                            borderRadius: "15px",
                            backgroundColor: "#FDEDEA",
                            color: "red",
                            fontWeight: "bold",
                          }}
                        >
                          Failed
                        </Typography>
                      </TableCell>
                      <TableCell align="center">NA</TableCell>
                      <TableCell align="center">NA</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </DialogContent>

        </Dialog>
      </Card>

      {/* CSS for Blurring Background */}
      <style>
        {`
          .modal-open {
            overflow: hidden;
          }
 
          .modal-open .MuiDialog-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(5px);
          }
        `}
      </style>
    </>
  );
}

export default ExamResultPage;