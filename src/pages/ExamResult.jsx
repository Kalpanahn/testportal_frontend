import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CustomNavbar from '../components/CustomNavbar';
 
 
function ExamResult() {
 
    const headingStyle={
        textAlign: "center",
        fontWeight:'bold'
    }
  const cellStyle = {
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
   
    border:'1px solid gray'
  };
  const combinedStyle = { ...cellStyle, ...headingStyle };
  return (
    <>
 <CustomNavbar/>
      <Typography sx={{ fontSize: "2rem", margin:'80px 0 0 80px' }} >
        Exam Result
      </Typography>
      <Card
        sx={{
          width: "90%",
          maxHeight: { xs: 500, ms: 600 },
          margin: "0 auto",
          borderRadius: "15px",
          boxShadow: ` 0 -4px 10px rgba(0, 0, 0, 0.2),  /* Top shadow */0 2px 10px rgba(0, 0, 0, 0.2)    /* Bottom shadow */`,
          borderLeft: "15px solid #4A2B3A",
          overflow: "auto",
        }}
      >
        <CardContent style={{ marginTop: "30px" }}>
          <Typography
            sx={{ fontSize: "1rem", fontWeight: "bold", textAlign: "center" }}
          >
            Congratulations on Completing Computer Literacy Test,Ramkumar
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            We're pleased to inform you that you've successfully completed the
            Computer Literacy Test.
          </Typography>
 
          <TableContainer component={Paper} sx={{ marginTop: "30px",border:'1px solid gray' }}>
            <Table sx={{ minWidth: 650 }} >
              <TableHead>
                <TableRow>
                  <TableCell style={combinedStyle} rowSpan={2}>
                    SN No
                  </TableCell>
                  <TableCell style={combinedStyle} rowSpan={2}>
                    Employee Id
                  </TableCell>
                  <TableCell style={combinedStyle} rowSpan={2}>
                    Exam Date
                  </TableCell>
                  <TableCell style={combinedStyle} colSpan={2}>
                    Part A
                  </TableCell>
                  <TableCell style={combinedStyle} colSpan={2}>
                    Part B
                  </TableCell>
                  <TableCell style={combinedStyle} colSpan={2}>
                    Part C
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={combinedStyle}>No.Of questions</TableCell>
                  <TableCell style={combinedStyle}>
                    No.of question attended
                  </TableCell>
 
                  <TableCell style={combinedStyle}>No.Of questions</TableCell>
                  <TableCell style={combinedStyle}>
                    No.of question attended
                  </TableCell>
 
                  <TableCell style={combinedStyle}>No.Of questions</TableCell>
                  <TableCell style={combinedStyle}>
                    No.of question attended
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={cellStyle} scope="row">
                    1
                  </TableCell>
                  <TableCell style={cellStyle}>12345</TableCell>
                  <TableCell style={cellStyle}>15-04-24</TableCell>
                  <TableCell style={cellStyle}>30</TableCell>
                  <TableCell style={cellStyle}>30</TableCell>
                  <TableCell style={cellStyle}>30</TableCell>
                  <TableCell style={cellStyle}>30</TableCell>
                  <TableCell style={cellStyle}>30</TableCell>
                  <TableCell style={cellStyle}>30</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      <Typography sx={{ textAlign: 'center', marginTop: '20px', fontWeight:'bold'}}>
        Download your score card and digital certificate from your profile.
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom:'50px' }}>
        <Button variant="outlined" href="ExamResultPage" sx={{ color: 'purple', borderColor: 'purple' }}>
          Close
        </Button>
      </div>
    </>
  );
}
 
export default ExamResult;