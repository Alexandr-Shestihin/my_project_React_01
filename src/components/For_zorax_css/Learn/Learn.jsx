import React from 'react';
import s from "./Learn.module.scss";

const Learn = (obj) => {
   let sum;
   let minus;

   let result = React.createRef();

   let addOne = () => { result.current.value += 1 };
   let addTwo = () => { result.current.value += 2 };
   let addThree = () => { result.current.value += 3 };
   let addFour = () => { result.current.value += 4 };
   let addFive = () => { result.current.value += 5 };
   let addSix = () => { result.current.value += 6 };
   let addSeven = () => { result.current.value += 7 };
   let addEight = () => { result.current.value += 8 };
   let addNine = () => { result.current.value += 9 };
   let addZero = () => { result.current.value += 0 };

   let summarize = () => {
      sum = +result.current.value;
      result.current.value = '';
   };
   let subtract = () => {
      minus = +result.current.value;
      result.current.value = "";
   }
   let showResult = () => {
      let totalКesult = +result.current.value;
      if (sum) {
         result.current.value = totalКesult + sum;
         sum = 0;
      } else result.current.value = minus - totalКesult;
      minus = 0;
   }
   let clean = () => {
      result.current.value = "";
      sum = 0;
      minus = 0;
   };
   return (
      <div className={s.value}>
         <input ref={result} type="text" /><br />
         <button onClick={addOne}>1</button>
         <button onClick={addTwo}>2</button>
         <button onClick={addThree}>3</button>
         <button onClick={summarize}>+</button><br />
         <button onClick={addFour}>4</button>
         <button onClick={addFive}>5</button>
         <button onClick={addSix}>6</button>
         <button onClick={subtract}>-</button><br />
         <button onClick={addSeven}>7</button>
         <button onClick={addEight}>8</button>
         <button onClick={addNine}>9</button>
         <button onClick={showResult}>=</button><br />
         <button onClick={addZero}>0</button>
         <button onClick={clean}>Сброс</button>
      </div >
   )
}
export default Learn;