import './quiz.css';
import { useState } from 'react';
export function Quiz(){
  
  const [result,setResult]=useState(false);
  const [current,setCurrent]=useState(0);
  const [score,setScore]=useState(0);
  const questions=[
    {
      text:"1. What is the correct way to declare a variable in JavaScript?",
      options:[
        {id:0,text:"a) var x = 5;",isCorrect:false},
        {id:0,text:"b) variable x = 5;",isCorrect:false},
        {id:0,text:"c) let x = 5;",isCorrect:true},
        {id:0,text:"d) const x = 5;",isCorrect:false},
      ]
    },
    {
      text:"2. Which of the following is not a primitive data type in JavaScript?",
      options:[
        {id:0,text:"a) String",isCorrect:false},
        {id:0,text:"b) Number",isCorrect:false},
        {id:0,text:"c) Object",isCorrect:true},
        {id:0,text:"d) Boolean",isCorrect:false},
      ]
    },
    {
      text:"3. How do you check the type of a variable in JavaScript?",
      options:[
        {id:0,text:"a) typeof x;",isCorrect:true},
        {id:0,text:"b) typeOf x;",isCorrect:false},
        {id:0,text:"c) x.type;",isCorrect:false},
        {id:0,text:"d) checkType(x);",isCorrect:false},
      ]
    },
    {
      text:"4. What is the purpose of the === operator in JavaScript?",
      options:[
        {id:0,text:"a) Assignment",isCorrect:false},
        {id:0,text:"b) Equality (value and type)",isCorrect:true},
        {id:0,text:"c) Inequality",isCorrect:false},
        {id:0,text:"d) Logical AND",isCorrect:false},
      ]
    },
    {
      text:"5. Which function is used to display a dialog box with a specified message and an OK button in JavaScript?",
      options:[
        {id:0,text:"a) alert()",isCorrect:true},
        {id:0,text:"b) confirm()",isCorrect:false},
        {id:0,text:"c) prompt()",isCorrect:false},
        {id:0,text:"d) display()",isCorrect:false},
      ]
    }
  ]
  const optionClicked=(isCorrect)=>{
    if(isCorrect){
      setScore(score+1);
    }
    if(current+1<questions.length){
      setCurrent(current+1);
    }else{
      setResult(true);
    }
  }
  const restart=()=>{
    setScore(0);
    setCurrent(0);
    setResult(false);
  }
  return(
        <div className="quiz">
          <div className="container">
        {result?(
      <div className="result">
        <h1>Final Results</h1>
        <h2>
          {score} out of {questions.length} correct-(
            {(score/questions.length)*100}%
          )
        </h2>
        <div className="correct">
          <h1>Correct Result : </h1>
          <p>1) let x = 5;</p>
          <p>2) Object</p>
          <p>3) typeof x;</p>
          <p>4) Equality (value and type);</p>
          <p>5) alert();</p>
          
        </div>
        <button className='result' onClick={()=>restart()}>Restart Quiz</button>
      </div>
      ):(
          <div>
            <div className="question">
              <h1>{questions[current].text}</h1>
            </div>
            <div className="options">
            <ul>
                {questions[current].options.map((option)=>{
                  return(
                    <li key={option.id} onClick={()=>optionClicked(option.isCorrect)}>
                      {option.text}
                    </li>
                  )
                })}
              </ul>
            </div>
            <button className="back" onClick={()=>setCurrent(current-1)}>back</button>
            <button className="next" onClick={()=>setCurrent(current+1)}>next</button>
        </div>
            )  }
            </div>
        </div>)}