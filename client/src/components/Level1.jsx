import React from 'react';

const Level1 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Level 1 Arithmetic Operations Exam</h1>
        
        <h2 className="text-xl font-semibold mb-2">Addition</h2>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li className="flex flex-col md:flex-row md:items-center">967 + 2458 + 15536 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">45968 + 20345 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">8957 + 30125 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
        </ol>
        
        <h2 className="text-xl font-semibold mb-2">Subtraction</h2>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li className="flex flex-col md:flex-row md:items-center">4004 - 3458 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">6985 - 2786 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">11111 - 2222 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">60905 - 57896 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
        </ol>
        
        <h2 className="text-xl font-semibold mb-2">Multiplication</h2>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li className="flex flex-col md:flex-row md:items-center">145 × 36 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">258 × 125 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
        </ol>
        
        <h2 className="text-xl font-semibold mb-2">Decimals</h2>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li className="flex flex-col md:flex-row md:items-center">721 ÷ 61 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">296 ÷ 12 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">864 ÷ 21 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">4085 ÷ 35 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">9856 ÷ 40 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">375 ÷ 27 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
        </ol>
        
        <h2 className="text-xl font-semibold mb-2">Divisibility Check for 80462</h2>
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="border px-2 py-1">Divisor</th>
              <th className="border px-2 py-1">Quotient</th>
              <th className="border px-2 py-1">Remainder</th>
            </tr>
          </thead>
          <tbody>
            {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(divisor => (
              <tr key={divisor}>
                <td className="border px-2 py-1 text-center">{divisor}</td>
                <td className="border px-2 py-1"><input type="text" className="w-full border rounded px-2 py-1" /></td>
                <td className="border px-2 py-1"><input type="text" className="w-full border rounded px-2 py-1" /></td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <h2 className="text-xl font-semibold mb-2">Fractions</h2>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li className="flex flex-col md:flex-row md:items-center">10/12 + 6/16 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">7/15 + 6/30 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">20/6 + 6/1 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">4/9 + 4/11 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">12/7 - 7/12 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">12 - 23/12 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">75/9 - 4 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">8/5 - 10/15 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">48/45 × 60/64 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">77/42 × 63/98 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">60/1200 × 1000/40 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">65/75 × 150/117 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">72/15 ÷ 12/1 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">14/16 ÷ 196/256 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">9/13 ÷ 13/9 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">75/90 ÷ 125/100 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
        </ol>
        
        <h2 className="text-xl font-semibold mb-2">Decimals Continued</h2>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li className="flex flex-col md:flex-row md:items-center">46.28 + 18.09 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">786.2 + 78.62 + 7.862 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">114.06 - 89.27 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">4.004 - 3.95 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">36 - 16.24 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">2.4 × 3.21 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">36 × 2.54 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">12 × 20.5 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">4.80 ÷ 1.6 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">7.5 ÷ 0.225 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">6 ÷ 0.24 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">4.5 ÷ 0.036 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
        </ol>
        
        <h2 className="text-xl font-semibold mb-2">Variable Operations</h2>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li className="flex flex-col md:flex-row md:items-center">46x - 9 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">-26x - 13 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">-4(-37) = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">-(-464) = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">18(-19) = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">-24(24) = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">(-400) + 256 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">-(123) + 321 = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
          <li className="flex flex-col md:flex-row md:items-center">-(75) + (-121) = <input type="text" className="mt-2 md:mt-0 md:ml-2 border rounded px-2 py-1 w-full md:w-auto" /></li>
   
          <li>-(62) + 26 = <input type="text" className="ml-2 border rounded px-2 py-1" /></li>
          <li>-(-74) - (+74) = <input type="text" className="ml-2 border rounded px-2 py-1" /></li>
        </ol>
      </div>
    </div>
  );
};

export default Level1;
