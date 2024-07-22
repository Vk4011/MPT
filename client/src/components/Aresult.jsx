import React from "react";
import { Link, useLocation } from "react-router-dom";
import { level1Data } from '../A'; // Adjust the import path as needed

const Aresult = () => {
  const { state } = useLocation();
  const { results = [], score = 0 } = state || {};

  // Map of questions to their correct answers
  const questionAnswers = level1Data.flatMap(section => 
    section.questions.map(question => ({
      question: question.question || question.divisor,
      answer: question.answer || `${question.quotient} ${question.remainder}`,
      type: section.type,
    }))
  );

  const totalQuestions = results.reduce((acc, section) => acc + section.questions.length, 0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-[#252d4a] p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Arithmetic Test Results</h1>
        <p className="text-lg mb-4">Your Score: {score} / {totalQuestions}</p>
        <div className="space-y-4 mt-4">
          {results.flatMap(section => section.questions).map((item, index) => {
            // Find the corresponding correct answer from the JSON data
            const correctData = questionAnswers.find(q => q.question === item.question || (q.type === 'table' && q.question === item.divisor));
            if (!correctData) return null;

            return (
              <div key={index} className="border border-gray-600 p-4 rounded-md">
                <p className="font-semibold mb-2">
                  {correctData.type === 'table' ? `Divisor: ${item.divisor}` : `Question: ${item.question}`}
                </p>
                {correctData.type === 'table' ? (
                  <>
                    <p className={`text-${item.userQuotient === correctData.answer.split(' ')[0] ? 'green' : 'red'}-400`}>
                      Your Quotient: {item.userQuotient}
                    </p>
                    <p className={`text-${item.userRemainder === correctData.answer.split(' ')[1] ? 'green' : 'red'}-400`}>
                      Your Remainder: {item.userRemainder}
                    </p>
                    <p className={`text-${item.userQuotient === correctData.answer.split(' ')[0] ? 'green' : 'red'}-400`}>
                      Correct Quotient: {correctData.answer.split(' ')[0]}
                    </p>
                    <p className={`text-${item.userRemainder === correctData.answer.split(' ')[1] ? 'green' : 'red'}-400`}>
                      Correct Remainder: {correctData.answer.split(' ')[1]}
                    </p>
                  </>
                ) : (
                  <>
                    <p className={`text-${item.userAnswer === correctData.answer ? 'green' : 'red'}-400`}>
                      Your Answer: {item.userAnswer}
                    </p>
                    <p className={`text-${item.userAnswer === correctData.answer ? 'green' : 'red'}-400`}>
                      Correct Answer: {correctData.answer}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <Link to="/" className="mt-6">
          <button className="bg-purple-800 text-white py-2 px-4 rounded-md font-light tracking-wide">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Aresult;
