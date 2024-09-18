import React, { useState, useEffect } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import {
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import {
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
import { useNavigate } from "react-router-dom";

 
const data = [
  {
    slno: 1,
    applicationNo: 1223,
    dateOfExam: "10-06-2024",
    score: 30,
    grade: "E",
    status: "Failed",
    scoreCard: "Generated",
    action: "Download",
  },
  {
    slno: 2,
    applicationNo: 9862,
    dateOfExam: "11-08-2024",
    score: 40,
    grade: "D",
    status: "Passed",
    scoreCard: "Generated",
    action: "Download",
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
        color: status === "Passed" ? "green" : "red",
        backgroundColor: status === "Passed" ? "#E6F4EA" : "#FDEDEA",
        textAlign: "center",
      }}
    >
      {status}
    </Typography>
  );
};
 
function CandidatesExamResult() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleDownload = () => {
    navigate('/PrintExamResult'); // Navigate to the download page with the application number
  };
 
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
          marginLeft: { xs: "20px", sm: "50px", md: "100px" },
          marginTop: "30px",
        }}
      >
        <Link
          to="/ExamResult"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Box display="flex" alignItems="center">
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 15 }} />
            <Typography sx={{ marginLeft: "5px" }}>Back</Typography>
          </Box>
        </Link>
      </Box> */}
 
      {/* Cards for Attempt, Pass, Fail */}
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
      <div
        style={{
          width: "90%",
          margin: "20px auto",
          marginTop: "20px",
        }}
      >
        <TableContainer component={Paper} style={{ padding: "45px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <h5 style={{ fontWeight: "bolder" }}>Sl.No</h5>
                </TableCell>
                <TableCell align="center">
                  <h5 style={{ fontWeight: "bolder" }}>Application Number</h5>
                </TableCell>
                <TableCell align="center">
                  <h5 style={{ fontWeight: "bolder" }}>Date of Exam</h5>
                </TableCell>
                <TableCell align="center">
                  <h5 style={{ fontWeight: "bolder" }}>Score</h5>
                </TableCell>
                <TableCell align="center">
                  <h5 style={{ fontWeight: "bolder" }}>Grade</h5>
                </TableCell>
                <TableCell align="center">
                  <h5 style={{ fontWeight: "bolder" }}>Exam Status</h5>
                </TableCell>
                <TableCell align="center">
                  <h5 style={{ fontWeight: "bolder" }}>Score Card</h5>
                </TableCell>
                <TableCell align="center">
                  <h5 style={{ fontWeight: "bolder" }}>Action</h5>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center" style={{ fontWeight: "bolder" }}>
                    {row.slno}
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bolder" }}>
                    {row.applicationNo}
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bolder" }}>
                    {row.dateOfExam}
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bolder" }}>
                    {row.score}
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bolder" }}>
                    {row.grade}
                  </TableCell>
                  <TableCell align="center">
                    <StatusBadge status={row.status} />
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bolder" }}>
                    {row.scoreCard}
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bolder" }}>
                    {row.status === "Passed" ? (
                      <Button
                        align="center"
                        style={{ fontWeight: "bolder" }}
                        variant="text"
                        color="primary"
                        onClick={handleDownload}
                      >
                        {row.action}
                      </Button>
                    ) : (
                      <Button
                        align="center"
                        style={{ fontWeight: "bolder" }}
                        variant="text"
                        color="primary"
                        disabled
                      >
                        {row.action}
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
 
export default CandidatesExamResult;
 
 