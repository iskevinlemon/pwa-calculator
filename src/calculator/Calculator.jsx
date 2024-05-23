import { useState } from "react";
import "./calculator.css";

const Calculator = () => {

  const [textview, setTextView] = useState("");
  const [hasError, setHasError] = useState(false);

  function calculate(){
    try{
      setTextView(eval(textview));
    }
    catch(err){
      // console.error(err);
      setHasError(true);
      setTextView("Syntax error");
    }
  }

  return (
    <>
      <div className="card calculator-main mt-3 fixed-bottom mb-5">
        <div className="card-body p-0">
          <input 
            type="text" 
            className={`form-control form-control-lg ${hasError ? "text-md": ""}`} 
            value={textview}
            disabled
          />
          <button className="btn-grey" onClick={() => {setTextView("");}}>AC</button>
          <button className="btn-grey">+/-</button>
          <button className="btn-grey" onClick={() => {setTextView(textview + "%");}}>%</button>
          <button className="btn-orange" onClick={() => {setTextView(textview + "/");}}><i className="fas fa-divide"></i></button>
          <button className="btn-semigrey" onClick={() => {setTextView(textview + "7");}}>7</button>
          <button className="btn-semigrey" onClick={() => {setTextView(textview + "8");}}>8</button>
          <button className="btn-semigrey" onClick={() => {setTextView(textview + "9");}}>9</button>
          <button className="btn-orange" onClick={() => {setTextView(textview + "*");}}><i className="fas fa-times"></i></button>
          <button className="btn-semigrey" onClick={() => {setTextView(textview + "4");}}>4</button>
          <button className="btn-semigrey" onClick={() => {setTextView(textview + "5");}}>5</button>
          <button className="btn-semigrey" onClick={() => {setTextView(textview + "6");}}>6</button>
          <button className="btn-orange" onClick={() => {setTextView(textview + "-");}}><i className="fas fa-minus"></i></button>
          <button className="btn-semigrey" onClick={() => {setTextView(textview + "1");}}>1</button>
          <button className="btn-semigrey" onClick={() => {setTextView(textview + "2");}}>2</button>
          <button className="btn-semigrey" onClick={() => {setTextView(textview + "3");}}>3</button>
          <button className="btn-orange" onClick={() => {setTextView(textview + "+");}}><i className="fas fa-plus"></i></button>
          <button className="btn-semigrey btn-long" onClick={() => {setTextView(textview + "0");}}>0</button>
          <button className="btn-semigrey" onClick={() => {setTextView(textview + ".");}}>.</button>
          <button className="btn-orange" onClick={calculate}><i className="fas fa-equals"></i></button>
        </div>
      </div>
    </>
  );
}
 
export default Calculator;