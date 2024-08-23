import { useState } from "react";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

const INVESTMENT_DATA = {
  initialInvestment: 15000,
  annualInvestment: 900,
  expectedReturn: 6,
  duration: 10
}

function isNumber(value) {
  return typeof value === 'number';
}

function isDataValid(data){
  return isNumber(data.initialInvestment)
    && isNumber(data.annualInvestment)
    && isNumber(data.expectedReturn)
    && isNumber(data.duration)
    && data.initialInvestment > 0
    && data.annualInvestment > 0
    && data.expectedReturn > 0
    && data.duration > 0;
}

function App() {

  const [investmentData, setInvestmentData] = useState(INVESTMENT_DATA);

  function handlePropertyChange(name, value){
    console.log(name + ':' + value);
    setInvestmentData(prevData => {
      return {
        ...prevData,
        [name]: Number(value)
      }
    });
  }
    
  return (
    <>
      <UserInput data={investmentData} onPropertyChange={handlePropertyChange} />
      {isDataValid(investmentData) ? <Result data={investmentData} /> : <div className="center"><p>Please enter valid data!</p></div> }
    </>
  )
}

export default App
