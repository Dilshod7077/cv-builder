import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Box = styled.div`
  width: 170px;
  height: 40px;
  border-radius: 10px;
  text-align: center;
  padding: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
`;

const fonts = [
  { font: "Roboto", title: "Roboto" },
  { font: "Open Sans", title: "Open Sans" },
  { font: "Lora", title: "Lora" },
  { font: "Montserrat", title: "Montserrat" },
  { font: "Raleway", title: "Raleway" },
  { font: "Nunito", title: "Nunito" },
  { font: "Inconsolata", title: "Inconsolata" },
  { font: "Poppins", title: "Poppins" },
];

const FontStyle = ({ onClick }) => {
  return (
    <Wrapper>
      {fonts.map((item, index) => (
        <Box
          key={index}
          fontFamily={item.font}
          style={{ fontFamily: item.font }}
          onClick={() => onClick(item.font)}
          
        ><Title isEditable={false} size="5" style={{ fontFamily: item.font }}>{item.title}</Title>
        </Box>
      ))}
    </Wrapper>
  );
};

export default FontStyle;
