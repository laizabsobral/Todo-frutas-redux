import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import InputButton from "../../components/InputButton";
import List from "../../components/List";

import * as S from "./styles";

const Home = () => {
  const storage = useSelector((state) => state);
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(storage.todos.items);
  }, [storage]);

  const handleAddClickButton = (item, price) => {
    dispatch({type: "ADD_TODO", payload: {
        id: uuidv4(),
        title: item,
        price: price
    }})
  } 

  const handleRemoveClick = (item) => {
    dispatch({type: "REMOVE_TODO", payload: item})
  }

  const handleCheckClick = (item) => {
    dispatch({type: "CHECK_TODO", payload: item})
  }

  return (
    <S.Content>
      <S.Container>
        <InputButton handleClick={handleAddClickButton}/>
      </S.Container>
      <S.Container>
        <List items={items} handleCheckClick={handleCheckClick} handleRemoveClick={handleRemoveClick} />
      </S.Container>
    </S.Content>
  );
};

export default Home;
