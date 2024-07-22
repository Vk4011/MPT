import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Landingpage from "./screens/Landingpage";
import Course from "./screens/Course";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Arithmetic from "./components/Arthematic";
import { level1Data } from './A';
import Aresult from './components/Aresult';

const App = () => {
  const [quizState, setQuizState] = useState({
    activeQuestion: 0,
    answers: [],
    time: 60,
  });
  const [examData, setExamData] = useState([]);

  useEffect(() => {
    // Set the exam data directly from the imported data
    setExamData(level1Data);
  }, []);
  return (
    <>
  
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course" element={<Course />} />
        <Route path="/start" element={<Start setQuizState={setQuizState} />} />
        <Route
          path="/quiz"
          element={<Quiz quizState={quizState} setQuizState={setQuizState} />}
        />
        <Route path="/result" element={<Result quizState={quizState} />} />
        <Route path="/arithmetic" element={<Arithmetic questions={examData} />} />
        <Route path="/level1result" element={<Aresult />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;

