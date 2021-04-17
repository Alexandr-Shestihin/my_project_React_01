import React from 'react';
import s from "./Train.module.scss";

const Train = (props) => {
   let data = React.createRef();
   let result = React.createRef();
   let n = 19;
   let go = () => {
      result.current.value = +data.current.value.slice(1);
   }
   return (
      <div className={s.enter}>
         <input className={s.enter__input} type="text" ref={data} placeholder='Значение' />
         <input className={s.enter__input} type="text" ref={result} placeholder='Результат' />
         <button className={s.enter__button} onClick={go}>Кнопка</button>

      </div >
   )
}
export default Train;