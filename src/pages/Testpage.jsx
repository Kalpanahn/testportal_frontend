import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Box } from '@mui/material';
import {
    Card, CardContent, Grid, Radio, RadioGroup, FormControlLabel,
    Avatar
} from '@mui/material';
import clock from "../images/clock-img.png";
import candidatePic from "../images/candidate-pic.png";
 
function InstructionsModal({ open, handleClose }) {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
                backdropFilter: 'blur(5px)',
                '& .MuiDialog-paper': {
                    width: '600px',
                    maxWidth: '100%',
                    padding: '20px',
                    boxShadow: 'none',
                    borderRadius: '10px',
                }
            }}
        >
            <DialogTitle id="alert-dialog-title" sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Box
                    sx={{
                        width: '8px',
                        height: '40px',
                        bgcolor: '#0079BC',
                        borderRadius: "5px"
                    }}
                />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Instructions
                </Typography>
            </DialogTitle>
 
            <DialogContent>
                <Typography
                    id="alert-dialog-description"
                    variant="body1"
                    component="div"
                    sx={{ whiteSpace: 'pre-wrap', textAlign: 'left', fontSize: '18px' }}
                >
                    • Part A       • Part B       • Part C
                    {"\n"} Each section has 30 questions.
                    {"\n"} Total hours to complete this test is 60 Minutes.
                </Typography>
            </DialogContent>
 
 
            <DialogActions sx={{ justifyContent: 'center' }}>
                <Button variant="contained" onClick={handleClose} sx={{ backgroundColor: '#4A2B3A', color: 'white', width: '40%' }}>
                    Start Assessment
                </Button>
                <Button onClick={handleClose} color="primary" variant="outlined" sx={{ width: '40%' }}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}
 
function ConfirmationModal({ open, handleClose }) {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="confirmation-dialog-title"
            aria-describedby="confirmation-dialog-description"
 
        >
 
            <div style={{padding:'25px'}}>
                <DialogTitle id="confirmation-dialog-title" sx={{ fontWeight: 'bold', whiteSpace: 'pre-line', textAlign: 'center' }}>Confirm Submission</DialogTitle>
                <DialogContent>
                    <Typography id="confirmation-dialog-description" sx={{ fontSize: '18px', whiteSpace: 'pre-line', textAlign: 'center' }}>
                        Make sure all the questions are attended and {"\n"}
                        proceed to the next part.
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center' }}>
                    <Button variant="contained" href='ExamResult' onClick={handleClose} sx={{ backgroundColor: '#4A2B3A', color: 'white', width: '50%' }}>
                        Save & Continue
                    </Button>
                    <Button onClick={handleClose} color="primary" variant="outlined" sx={{ width: '35%' }}>
                        Go Back
                    </Button>
                </DialogActions>
            </div>
        </Dialog>
    );
}
 
function TestPage() {
    const [open, setOpen] = useState(true);
    const [confirmationOpen, setConfirmationOpen] = useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleSaveAndSubmit = () => {
        setConfirmationOpen(true);
    };
 
    const handleConfirmationClose = () => {
        setConfirmationOpen(false);
    };
 
 
    const [timeLeft, setTimeLeft] = useState(5400); // 1.5 hours in seconds
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answers, setAnswers] = useState({}); // Store answers in an object
   
    const questions = [
      {
        id: 1,
        question:
          "What is the intersection of a column and a row on a worksheet called?",
        options: ["50%", "62.5%", "72%", "56%"],
      },
      {
        id: 2,
        question: "Which language is primarily used for web development?",
        options: ["Java", "Python", "HTML", "C++"],
      },
      {
        id: 3,
        question: "Which of the following is a database management system?",
        options: ["Oracle", "React", "JavaScript", "CSS"],
      },
      {
        id: 4,
        question: "Which company created the React library?",
        options: ["Google", "Facebook", "Microsoft", "Apple"],
      },
      {
        id: 5,
        question:
          "What is the intersection of a column and a row on a worksheet called?",
        options: ["50%", "62.5%", "72%", "56%"],
      },
      {
        id: 6,
        question: "Which language is primarily used for web development?",
        options: ["Java", "Python", "HTML", "C++"],
      },
      {
        id: 7,
        question: "Which of the following is a database management system?",
        options: ["Oracle", "React", "JavaScript", "CSS"],
      },
      {
        id: 8,
        question: "Which company created the React library?",
        options: ["Google", "Facebook", "Microsoft", "Apple"],
      },
      {
        id: 9,
        question:
          "What is the intersection of a column and a row on a worksheet called?",
        options: ["50%", "62.5%", "72%", "56%"],
      },
      {
        id: 10,
        question: "Which language is primarily used for web development?",
        options: ["Java", "Python", "HTML", "C++"],
      },
      {
        id: 11,
        question: "Which of the following is a database management system?",
        options: ["Oracle", "React", "JavaScript", "CSS"],
      },
      {
        id: 12,
        question: "Which company created the React library?",
        options: ["Google", "Facebook", "Microsoft", "Apple"],
      },
      {
        id: 13,
        question:
          "What is the intersection of a column and a row on a worksheet called?",
        options: ["50%", "62.5%", "72%", "56%"],
      },
      {
        id: 14,
        question: "Which language is primarily used for web development?",
        options: ["Java", "Python", "HTML", "C++"],
      },
      {
        id: 15,
        question: "Which of the following is a database management system?",
        options: ["Oracle", "React", "JavaScript", "CSS"],
      },
      {
        id: 16,
        question: "Which company created the React library?",
        options: ["Google", "Facebook", "Microsoft", "Apple"],
      },
      {
        id: 17,
        question:
          "What is the intersection of a column and a row on a worksheet called?",
        options: ["50%", "62.5%", "72%", "56%"],
      },
      {
        id: 18,
        question: "Which language is primarily used for web development?",
        options: ["Java", "Python", "HTML", "C++"],
      },
      {
        id: 19,
        question: "Which of the following is a database management system?",
        options: ["Oracle", "React", "JavaScript", "CSS"],
      },
      {
        id: 20,
        question: "Which company created the React library?",
        options: ["Google", "Facebook", "Microsoft", "Apple"],
      },
      {
        id: 21,
        question:
          "What is the intersection of a column and a row on a worksheet called?",
        options: ["50%", "62.5%", "72%", "56%"],
      },
      {
        id: 22,
        question: "Which language is primarily used for web development?",
        options: ["Java", "Python", "HTML", "C++"],
      },
      {
        id: 23,
        question: "Which of the following is a database management system?",
        options: ["Oracle", "React", "JavaScript", "CSS"],
      },
      {
        id: 24,
        question: "Which company created the React library?",
        options: ["Google", "Facebook", "Microsoft", "Apple"],
      },
      {
        id: 25,
        question:
          "What is the intersection of a column and a row on a worksheet called?",
        options: ["50%", "62.5%", "72%", "56%"],
      },
      {
        id: 26,
        question: "Which language is primarily used for web development?",
        options: ["Java", "Python", "HTML", "C++"],
      },
      {
        id: 27,
        question: "Which of the following is a database management system?",
        options: ["Oracle", "React", "JavaScript", "CSS"],
      },
      {
        id: 28,
        question: "Which company created the React library?",
        options: ["Google", "Facebook", "Microsoft", "Apple"],
      },
      {
        id: 29,
        question: "Which of the following is a database management system?",
        options: ["Oracle", "React", "JavaScript", "CSS"],
      },
      {
        id: 30,
        question: "Which company created the React library?",
        options: ["Google", "Facebook", "Microsoft", "Apple"],
      },
    ];
   
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
   
      return () => clearInterval(timer);
    }, []);
   
    // Format the time in HH:MM:SS
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      const remainingSeconds = seconds % 60;
   
      return `${String(hours).padStart(2, "0")}:${String(
        remainingMinutes
      ).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    };
   
    // Handle changing the answer
    const handleAnswerChange = (questionId, answer) => {
      setAnswers({ ...answers, [questionId]: answer });
    };
   
    // Handle navigating to a specific question
    const handleQuestionNavigation = (questionId) => {
      setCurrentQuestion(questionId);
    };
   
    const handleNextQuestion = () => {
      if (currentQuestion < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      }
    };
   
    const handlePreviousQuestion = () => {
      if (currentQuestion > 1) {
        setCurrentQuestion(currentQuestion - 1);
      }
    };
 
    return (
        <>
            <InstructionsModal open={open} handleClose={handleClose} />
            <ConfirmationModal open={confirmationOpen} handleClose={handleConfirmationClose} />
 
            {!open && (
                  <Box sx={{ p: 2, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                      <Card sx={{ height: "730px", position: "relative" }}>
                        <CardContent>
                          {/* Timer with clock icon at the top right */}
                          <Box
                            sx={{
                              gap: "5px",
                              position: "absolute",
                              top: 16,
                              right: 16,
                              display: "flex",
                              alignItems: "center",
                              color: "white",
                              backgroundColor: "#4A2B3A",
                              padding: "8px 10px",
                              borderRadius: "28px",
                              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <img
                              src={clock}
                              alt=""
                              style={{ width: "25px", height: "25px" }}
                            />
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                              {formatTime(timeLeft)}
                            </Typography>
                          </Box>
             
                          <Typography variant="h6" sx={{ fontWeight: "bold", ml: 2 }}>
                            PART 1
                          </Typography>
             
                          <h4 style={{ margin: "35px 0 15px 20px" }}>
                            Question {currentQuestion}
                          </h4>
                          <h6 style={{ margin: "15px 0 15px 20px" }}>
                            {questions[currentQuestion - 1].question}
                          </h6>
                          <RadioGroup
                            value={answers[currentQuestion] || ""}
                            onChange={(e) =>
                              handleAnswerChange(currentQuestion, e.target.value)
                            }
                            style={{ marginLeft: "20px" }}
                          >
                            {questions[currentQuestion - 1].options.map((option, index) => (
                              <FormControlLabel
                                key={index}
                                value={option}
                                control={<Radio />}
                                label={option}
                              />
                            ))}
                          </RadioGroup>
             
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            marginTop="20px"
                          >
                            <Button
                              onClick={handlePreviousQuestion}
                              disabled={currentQuestion === 1}
                            >
                              Previous Question
                            </Button>
                            <Button
                              onClick={handleNextQuestion}
                              disabled={currentQuestion === questions.length}
                            >
                              Next Question
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
             
                    {/* Right side - Profile and Navigation */}
                    <Grid item xs={12} md={3}>
                      <Card sx={{ padding: 2, height: "730px" }}>
                        <Card
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 2,
                            padding: 2,
                          }}
                        >
                          <img src={candidatePic} alt="" />
                          <Box sx={{ marginLeft: 2 }}>
                            <Typography variant="h6">Ram Kumar S</Typography>
                            <Typography variant="body2">Associate</Typography>
                            <Typography variant="body2">Centre for e-governance</Typography>
                            <Typography variant="body2">9654862531</Typography>
                            <Typography variant="body2">csgemp2@gmail.com</Typography>
                          </Box>
                        </Card>
             
                        <div className="text-center my-4">
                          <h5 className="d-inline-block position-relative">
                            Questions
                            <span className="underline"></span>
                          </h5>
                        </div>
             
                        <div style={{marginBottom:'25px'}}>
                          <Grid item marginBottom={2}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item>
                                <Box display="flex" alignItems="center">
                                  <Box
                                    sx={{
                                      width: 16,
                                      height: 16,
                                      bgcolor: "primary.main",
                                      borderRadius: 0.5,
                                      marginRight: 1,
                                    }}
                                  />
                                  <Typography variant="body2">Current Question</Typography>
                                </Box>
                              </Grid>
             
                              <Grid item>
                                <Box display="flex" alignItems="center">
                                  <Box
                                    sx={{
                                      width: 16,
                                      height: 16,
                                      bgcolor: "success.main",
                                      borderRadius: 0.5,
                                      marginRight: 1,
                                    }}
                                  />
                                  <Typography variant="body2">Attended Question</Typography>
                                </Box>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Box display="flex" alignItems="center">
                              <Box
                                sx={{
                                  width: 16,
                                  height: 16,
                                  bgcolor: "text.secondary",
                                  borderRadius: 0.5,
                                  marginRight: 1,
                                }}
                              />
                              <Typography variant="body2">Un-attended Question</Typography>
                            </Box>
                          </Grid>
                        </div>
             
                        <Grid container spacing={1}>
                          {[...Array(questions.length).keys()].map((num) => (
                            <Grid item xs={4} sm={2.4} key={num}>
                              <Button
                                variant="outlined"
                                sx={{
                                  width: "50px",
                                  aspectRatio: "1 / 1",
                                  minWidth: "auto",
                                  backgroundColor:
                                    currentQuestion === num + 1
                                      ? "#003F90"
                                      : answers[num + 1]
                                      ? "#28A745"
                                      : "transparent",
                                  color:
                                    currentQuestion === num + 1
                                      ? "#fff"
                                      : answers[num + 1]
                                      ? "#fff"
                                      : "inherit",
                                }}
                                onClick={() => handleQuestionNavigation(num + 1)}
                              >
                                {num + 1}
                              </Button>
                            </Grid>
                          ))}
                        </Grid>
             
                        <Button
                          variant="contained"
                          sx={{
                            marginTop: 2,
                            backgroundColor: "#4A2B3A",
                            marginLeft: "25%",
                          }}
                          onClick={handleSaveAndSubmit}
                        >
                          Save & Submit
                        </Button>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
            )}
        </>
    );
}
 
export default TestPage;