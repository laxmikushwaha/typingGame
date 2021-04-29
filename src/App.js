import React,{ useState, useEffect }from 'react';
import './App.css';
import Words from './Components/Words'; 
import Container from './Components/Container';
import TypeRacer from './Components/Typeracer';
import Result from './Components/Result';
const App= () => {

  const [word, setWord] = useState(Words);
  const [newWord, setNewWord]= useState(word[0]);
  const [disabled, setDisabled] = useState(true);
  const [correctResults, setCorrectResults] = useState([]);
  const [wrongResult, setwrongResult] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const[time, setTime]= useState(30);
  const[inputValue, setInputValue]= useState('');
  const[animation, setAnimation]= useState(null);

  console.log(word.length);
  let randomWord = Math.floor(Math.random() * word.length);

const checkAnswer =() =>{
  if(inputValue.trim() === newWord){
    setCorrectResults(prevCorrect => [...prevCorrect, newWord]);
    setCountCorrect(prevCorrect => prevCorrect + 1);
    return;
  }
  setwrongResult(prevWrong => [...prevWrong, inputValue]);
};

const handleInput = e => {
  if(e.charCode === 13 && inputValue.trim() !== ''){
    checkAnswer();
    setNewWord(word[randomWord]);
    setInputValue('');
  }

};

const handleStart = () => {
  setWord(Words)
  setDisabled(!disabled);
  setCorrectResults([]);
  setwrongResult([]);
  setCountCorrect(0);
  setInputValue("");
}
useEffect(() => {
  if (time <= 30 && time !== 0 && disabled === false){
    setTimeout(() => setTime(prevTime => prevTime - 1), 1000);
  } else if(disabled){
    setTime(30);
    setAnimation(null);
  } else if(time === 0){
    setDisabled(true);
  }

  if(time <= 10){
    setAnimation("scaleNumber 2s infinite");
  }

}, [disabled, time])

useEffect(() => {
  setNewWord(word[randomWord]);
}, []);

  return (
    <div className="App">
    
        <Container>
         <TypeRacer
         newWord={newWord}
         inputValue={inputValue}
         setInputValue={setInputValue}
         disabled={disabled}
         time={time}
         animation={animation}
         handleInput={handleInput}
         handleStart={handleStart}
         />
         </Container>

         <Result
         correctResults={correctResults}
         wrongResult={wrongResult}
         countCorrect={countCorrect}
         />
        

         
        
    </div>
  );
}

export default App;
