import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Box = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: linear-gradient(
    ${(props) => props.$angle}deg,
    ${(props) => props.$color1},
    ${(props) => props.$color2}
  );
  cursor: pointer;
`;

const gradients = [
  { angle: 45, color1: "#FF9A9E", color2: "#FAD0C4" },
  { angle: 90, color1: "#A18CD1", color2: "#FBC2EB" },
  { angle: 135, color1: "#FAD0C4", color2: "#FFD1FF" },
  { angle: 180, color1: "#FFDEE9", color2: "#B5FFFC" },
  { angle: 225, color1: "#C6FFDD", color2: "#FBD786" },
  { angle: 270, color1: "#FC5C7D", color2: "#6A82FB" },
  { angle: 315, color1: "#92FE9D", color2: "#00C9FF" },
  { angle: 360, color1: "#FF9966", color2: "#FF5E62" },
  { angle: 30, color1: "#00F260", color2: "#0575E6" },
  { angle: 60, color1: "#74EBD5", color2: "#ACB6E5" },
  { angle: 120, color1: "#E0C3FC", color2: "#8EC5FC" },
  { angle: 150, color1: "#D299C2", color2: "#F5E6CA" },
  { angle: 210, color1: "#FDCB82", color2: "#FCB69F" },
  { angle: 240, color1: "#A1C4FD", color2: "#C2E9FB" },
  { angle: 300, color1: "#84FAB0", color2: "#8FD3F4" },
  { angle: 330, color1: "#C471ED", color2: "#F64F59" },
  { angle: 45, color1: "#43E97B", color2: "#38F9D7" },
  { angle: 90, color1: "#FDCB82", color2: "#FCE38A" },
  { angle: 135, color1: "#FDB99B", color2: "#CF8BF3" },
  { angle: 180, color1: "#A6C0FE", color2: "#F68084" },
  { angle: 45, color1: "#FF6B6B", color2: "#556270" },
  { angle: 90, color1: "#00C9FF", color2: "#92FE9D" },
  { angle: 135, color1: "#FDBB2D", color2: "#22C1C3" },
  { angle: 180, color1: "#FF758C", color2: "#FF7EB3" },
];

const ColorBox = ({ onClick }) => {
  return (
    <Wrapper>
      {gradients.map((gradient, index) => (
        <Box
          key={index}
          $angle={gradient.angle}
          $color1={gradient.color1}
          $color2={gradient.color2}
          onClick={() => onClick(`linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2})`)}
        />
      ))}
    </Wrapper>
  );
};

export default ColorBox;
