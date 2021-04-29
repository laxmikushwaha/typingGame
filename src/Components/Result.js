import React from 'react';

const Result = ({correctResults,wrongResult,countCorrect}) => {

    return (

      
        <div className="Result">
          <div className="Title">
           <p>Correct answer : {countCorrect}</p>
        </div>
        <div className="ResultsContainer">
           <div className="CorrectResults">
             {correctResults.map((correctWord, index) =>(
               <div  key={index} className="row">
               <p>{correctWord}</p>
               </div>
             ))}
           </div>
           <div className="worngResults">
           {wrongResult.map((wrongWord, index) =>(
             <div key={index} className="row">
             <p>{wrongWord}</p>
             </div>
           ))}
           </div>
        </div>
        </div>
        
    )
}
export default Result;