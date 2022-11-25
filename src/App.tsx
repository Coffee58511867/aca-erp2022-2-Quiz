import React, { useState } from "react";
import QuestionBank from "./components/QuestionBank";
import CorrectAnswers from "./components/CorrectAnswers";
import "./App.css";
import { Button, useToast, Box, Flex, Heading , Card} from "@chakra-ui/react";

function App() {
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [score, SetScore] = useState(0);
  let [showScore, setShowScore] = useState(false);
  let [disable, setDisable] = useState(false);
  let [disable2, setDisable2] = useState(true);

  const toast = useToast();

  const submit = (isCorrect: boolean) => {
    setDisable(true);
    setDisable2(false);
    if (isCorrect) {
      SetScore(score + 1);
    }
  };

  const next = () => {
    setDisable(false);
    setDisable2(true);
    if (currentQuestion < QuestionBank.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
      if (score >= 25) {
        toast({
          title: "Exam Passed.",
          description:
            "Congradulations you have passed exam",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Exam failed",
          description:
            "Exam failed Please try again later.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };
  const backbtn = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  const retake = () => {
    SetScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };
  const next2 = () => {
    if (currentQuestion < CorrectAnswers.length + 1 && currentQuestion !== 49) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  const backbtn2 = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  return (
    <Flex bg="whiteAlpha.300">
      <Box className="app-wrapper" mt={20}>
        <Card p={8} bg="whatsapp.100">
        {showScore ? (
          <Box>
            <Box className="completed">You have Completed Quiz</Box>
            <Box className="score">
              Your Score: {score}/{QuestionBank.length}
            </Box>
            <Box className="Per">
              Results: {(score / QuestionBank.length) * 100}%
            </Box>

            <Heading className="sm">Summary Below</Heading>
            <div className="question-section">
              <div className="question-count">
                Question {currentQuestion + 1} / {CorrectAnswers.length}
              </div>
              <div className="questions">
                {CorrectAnswers[currentQuestion].question}
              </div>
            </div>

            <div className="answer-section">
              {CorrectAnswers[currentQuestion].answerBank.map((userAnswer) => (
                <li className="answerList">
                  <button
                    className="answerbtn"
                    disabled={disable}
                    key={userAnswer.answer}
                  >
                    {userAnswer.answer}
                  </button>
                </li>
              ))}
            </div>

            <Box className="summary">
              {CorrectAnswers[currentQuestion].answerBank.map((summa) => (
                <p className="Reasons">{summa.summary}</p>
              ))}
            </Box>
            <Box className="buttons">
              <Button className="back" colorScheme='teal' variant='outline' onClick={backbtn2}>
                Back
              </Button>
              <Button className="next-question" colorScheme='teal' variant='outline' onClick={next2}>
                Next Question
              </Button>
            </Box>

            <Box className="StartTest">
              <Button className="StartTest" colorScheme='danger' variant='outline' onClick={retake}>
                Retake
              </Button>
            </Box>
            <Box className="summary">
              <p className="me">Made by Hlalele Maroba.</p>
            </Box>
          </Box>
        ) : (
          <Box>
            <div className="question-section">
              <Heading size="md" className="head2">QUIZ APPICATION</Heading>
              <div className="question-count">
                Question {currentQuestion + 1} / {QuestionBank.length}
              </div>
              <div className="questions">
                {QuestionBank[currentQuestion].question}
              </div>
            </div>
            <div className="answer-section">
              {QuestionBank[currentQuestion].answerBank.map((userAnswer) => (
                <li className="answerList">
                  <button
                    className="answerbtn"
                    disabled={disable}
                    key={userAnswer.answer}
                    onClick={() => submit(userAnswer.isCorrect)}
                  >
                    {userAnswer.answer}
                  </button>
                </li>
              ))}
            </div>

            <div className="buttons">
              <Button className="back" colorScheme='teal' variant='outline' onClick={backbtn}>
                Back
              </Button>
              <Button
                disabled={disable2}
                className="next-question"
                onClick={next}
                colorScheme='teal' variant='outline'
              >
                Next Question
              </Button>
            </div>
          </Box>
        )}
        </Card>
      </Box>
    </Flex>
  );
}

export default App;
