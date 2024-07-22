import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { level1Data } from '../A';  // Adjust the import path as needed

const Arithmetic = () => {
  const [answers, setAnswers] = useState({});
  const [timeLimit, setTimeLimit] = useState(0);
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Get time limit from the location state
  useEffect(() => {
    const { time } = location.state || {};
    setTimeLimit(time || 0);
    setTimer(time || 0);
  }, [location.state]);

  // Timer countdown logic
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  // Handles input changes and updates state
  const handleChange = (sectionIndex, questionIndex, field, value) => {
    setAnswers(prev => ({
      ...prev,
      [`${sectionIndex}-${questionIndex}-${field}`]: value
    }));
  };

  // Calculates results and navigates to results page
  const handleSubmit = () => {
    const results = level1Data.map((section, sectionIndex) => ({
      title: section.title,
      type: section.type,
      questions: section.questions.map((item, questionIndex) => {
        const userAnswer = answers[`${sectionIndex}-${questionIndex}`] || "";
        const userQuotient = parseFloat(answers[`${sectionIndex}-${questionIndex}-quotient`] || "NaN");
        const userRemainder = parseFloat(answers[`${sectionIndex}-${questionIndex}-remainder`] || "NaN");

        // Determine correctness based on question type
        let isCorrect = false;
        if (section.type === 'list') {
          isCorrect = userAnswer.trim() === item.answer;
        } else if (section.type === 'table') {
          const correctQuotient = item.quotient || "";
          const correctRemainder = item.remainder || "";

          isCorrect = (
            !isNaN(userQuotient) && 
            !isNaN(userRemainder) &&
            userQuotient === correctQuotient &&
            userRemainder === correctRemainder
          );
        }

        return {
          ...item,
          userAnswer,
          userQuotient,
          userRemainder,
          isCorrect
        };
      })
    }));

    // Calculate the score based on the number of correct answers
    const score = results.reduce((total, section) => {
      return total + section.questions.filter(q => q.isCorrect).length;
    }, 0);

    // Navigate to the results page with computed results
    navigate('/level1result', { state: { results, score } });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Level 1 Arithmetic Operations Exam</h1>
        <p className="text-lg mb-4 text-center">Time Limit: {timeLimit} seconds</p>
        <p className="text-lg mb-4 text-center">Time Remaining: {timer} seconds</p>

        {level1Data.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            {section.type === 'list' ? (
              <ol className="list-decimal list-inside space-y-2">
                {section.questions.map((item, questionIndex) => (
                  <li key={questionIndex} className="flex flex-col md:flex-row md:items-center">
                    {item.question}
                    <input 
                      type="text" 
                      onChange={(e) => handleChange(sectionIndex, questionIndex, '', e.target.value)} 
                      className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto"
                    />
                  </li>
                ))}
              </ol>
            ) : (
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="border px-2 py-1">Divisor</th>
                    <th className="border px-2 py-1">Quotient</th>
                    <th className="border px-2 py-1">Remainder</th>
                  </tr>
                </thead>
                <tbody>
                  {section.questions.map((item, questionIndex) => (
                    <tr key={questionIndex}>
                      <td className="border px-2 py-1 text-center">{item.divisor}</td>
                      <td className="border px-2 py-1">
                        <input 
                          type="number" 
                          step="any" 
                          onChange={(e) => handleChange(sectionIndex, questionIndex, 'quotient', e.target.value)} 
                          className="w-full border rounded px-2 py-1" 
                        />
                      </td>
                      <td className="border px-2 py-1">
                        <input 
                          type="number" 
                          step="any" 
                          onChange={(e) => handleChange(sectionIndex, questionIndex, 'remainder', e.target.value)} 
                          className="w-full border rounded px-2 py-1" 
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
        <button 
          onClick={handleSubmit} 
          className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Arithmetic;
