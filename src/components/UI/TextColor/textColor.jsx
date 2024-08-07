import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Box = styled.div`
  width: 110px;
  height: 40px;
  border-radius: 10px;
  background: ${(props) => props.$color};
  cursor: pointer;
  border: 1px solid #ccc;
`;

const colors = [
  {color: "#FFF"},
  {color: "#4a4a4a"},
  {color: "#000"},
];

const TextColor = ({ onClick }) => {
  return (
    <Wrapper>
      {colors.map((item, index) => (
        <Box
          key={index}
          $color={item.color}
          onClick={() => onClick(item.color)}
        />
      ))}
    </Wrapper>
  );
};

export default TextColor;
