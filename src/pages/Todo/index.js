import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import InputButton from "../../components/InputButton";
import List from "../../components/List";

import * as S from "./styles";

const Todo = () => {

  return (
    <S.Content>
      <S.Container>
        <InputButton handleClick={() => {}}/>
      </S.Container>
      <S.Container>
        <List items={[]} handleCheckClick={() =>  {}} handleRemoveClick={() => {}} />
      </S.Container>
    </S.Content>
  );
};

export default Todo;
