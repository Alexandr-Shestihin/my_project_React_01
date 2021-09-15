import React from 'react';
import s from './formControls.module.scss';

const Element = Element => ({ field, ...props }) => {
   return (
      <span>
         <Element className={props.errors && s.errorInput} {...field} {...props} />
         {props.touched && props.errors && <p className={s.errorMassage} >{props.errors}</p>}
      </span>
   )
}

export default Element;