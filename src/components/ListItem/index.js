import React, { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import * as S from "./styles";


import Snackbar from "./Snackbar";
import { useRef } from "react";

const SnackbarType = {
    success: "success",
    fail: "fail",
  };

export default function ListItem({ item, onCheckClick, onRemoveClick }) {
  

  const snackbarRef = useRef(null);
  
  
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(item.checked);
  }, [item]);

  const handleInputChange = () => {
    setIsChecked(!item.checked);
    onCheckClick(item)
  }


  
  return (
    <S.Container>
     
      <div> 
         
        <S.Checkbox
          type="checkbox"
          checked={isChecked || false}
          onChange={handleInputChange}
          onClick={() => {
            snackbarRef.current.show();
          }}
          className="showSnackbarBttn"

        />
        
        <S.Label>Fruta: {item.title}</S.Label>
        <S.Label>Preço: {item.price}</S.Label>
        
      </div>

 
      <S.Button onClick={() => onRemoveClick(item)    }>
        <IoTrashOutline size={22} 
         onClick={() => {
          snackbarRef.current.show();
        }}
         />
      </S.Button>

        
        <Snackbar
        ref={snackbarRef}
        message="Concluido com Sucesso!"
        type={SnackbarType.success}/>


    </S.Container>
  );
}
