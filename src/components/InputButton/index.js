import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import * as S from "./styles";
// import { useFormik } from 'formik';
// import * as yup from 'yup';

export default function InputButton({ handleClick }) {
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");

  const handleOnChangeText = (evt) => {
    setText(evt.target.value);
  };
  const handleOnChangePrice = (evt) => {
    setPrice(evt.target.value);
  };
  const buttonHandleClick = (evt) => {
    evt.preventDefault();
    handleClick(text, price);
    setText("");
    setPrice("");
  };

 
  //verificação de campos





  return (
    <S.Container >
     <S.Input type="input" name="fruta" 
       onChange={handleOnChangeText} 
       value={text}
        placeholder="Nome da fruta"
       
      />

      <S.Input name="preco"  onChange={handleOnChangePrice} value={price} placeholder="Preço da fruta"/>
      
      <S.Button type="submit" color="#86B049" onClick={buttonHandleClick}>
        <FaPlus size={19} />
      </S.Button>
      
    </S.Container>
  );
}
