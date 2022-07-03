
import React, {useState} from 'react';
import QuestionBank from './components/QuestionBank';
import CorrectAnswers from './components/CorrectAnswers';
import './App.css';
import {Button} from 'react-bootstrap';


function App() {
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [score,SetScore] = useState(0);
  let [showScore, setShowScore] = useState(false);
  let [disable, setDisable] = useState(false);
  
 
   
  const submit = (isCorrect: boolean) => {
   setDisable(true);
     
   if(isCorrect){
       
       SetScore(score + 1);
        
   }
    }
  
   const next = ()=>{
     
     setDisable(false);
    
     if(currentQuestion < QuestionBank.length - 1){
        setCurrentQuestion(currentQuestion + 1 );

     }
     else{
       setShowScore(true);
       if(score >= 25){
         alert("Congradulations you have Passed");
       }
       else{
         alert("Sorry Try again")
       }
     }
   }
   const backbtn = () =>{
     if(currentQuestion !== 0){
     setCurrentQuestion(currentQuestion - 1 );
     }
    
   }
   const retake = ()=>{
     SetScore(0);
     setCurrentQuestion(0);
     setShowScore(false);
   }
   const next2 = () =>{
     if(currentQuestion < CorrectAnswers.length + 1){
       setCurrentQuestion(currentQuestion - 1 );

    }
   }
   
  
  
 return (
   <>
  
   <div className="app-wrapper">
       
       {showScore ? (
         <div>
         <div className="completed">

          You have Completed Quiz
         </div>
         <div className="score">
           Your Score: {score}/{QuestionBank.length}
           
         </div>
         <div className="Per">
         Results: {(score / QuestionBank.length)* 100}%
         </div>
         
         <h5 className="sm">Summary Below</h5>
         <div className="question-section">
               
               <div className="question-count">
                   Question {currentQuestion + 1 } / {CorrectAnswers.length}   
               </div>
               <div className="questions">
                 {CorrectAnswers[currentQuestion].question}
               </div>
             
        </div>  
     
            
        
            
              <Button  className="next-question" onClick={next2}>Next Question
         </Button>
  
         <div className="StartTest">
         <Button className="StartTest" variant="info" onClick={retake}>Retake</Button>
         </div>
         <div className="summary">
            <p className="me">Made by Hlalele Maroba.</p>
            
         </div>
         </div>
       ) : (
       <div>
         
              <div className="question-section">
               
               <div className="question-count">
                   Question {currentQuestion + 1 } / {QuestionBank.length}   
               </div>
               <div className="questions">
                 {QuestionBank[currentQuestion].question}
               </div>
              </div>
              <div className="answer-section">
               {QuestionBank[currentQuestion].answerBank.map((userAnswer) =>(
                 <li className="answerList">
                   <button className="answerbtn"
                     disabled={disable}
                     key = {userAnswer.answer}
                    onClick={() => submit(userAnswer.isCorrect)}
                    >
                     {userAnswer.answer}
                   </button>
                 </li>

               ))}
              </div>
     
       <div className="buttons">
       <Button className="back" variant="success" onClick={backbtn}>Back
         </Button>
         <Button  className="next-question" onClick={next}>Next Question
         </Button>
         
       </div>
       </div>
       )}
   </div>
   </>
  );
}

export default App;
