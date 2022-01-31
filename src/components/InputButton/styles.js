import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: -109px;
`;

export const Input = styled.input`
  font-size: 18px;
  flex: 1;
  color: #444;
  border-radius: 5px;
  border: 1px solid #ccc;
  line-height: 48px;
  padding-left: 10px;
  padding-right: 10px;
  min-width: 300px;
  margin-right: 5px;
`;

export const Button = styled.button`
  border-radius: 5px;
  /* line-height: 32px; */
  padding: 10px 10px;
  color: ${(prop) => (prop.color ? "white" : "#444")};
  border: 1px solid #ccc;
  background: ${(prop) => prop.color || "white"};

  :not(:disabled) {
    cursor: pointer;
  }

  :active {
      background-color: #476930;
  }
`;
