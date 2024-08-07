import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useReactToPrint } from "react-to-print";
import {
  Header,
  Footer,
  Avatar,
  Range,
  Title,
  Descr,
  ColorBox,
  TextColor,
  FontStyle,
} from "./components";
import { ReactComponent as MailIcon } from "./assets/icons/mail.svg";
import { ReactComponent as PhoneIcon } from "./assets/icons/phone.svg";

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 40px;
  padding: 3rem 2rem;
  background: ${(props) => props.$bgColor || "white"};
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
  @media print {
    background: ${(props) => props.$bgColor || "white"};
    font-family: ${(props) => props.$fontFamily || "Inconsolata"};
    box-shadow: none;
    border: none;
  }
`;

const Wrap = styled.div`
  max-width: 450px;
  max-height: 835px;
  margin: 40px 0px 40px 50px;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
  font-family: ${(props) => props.$fontFamily || "Inconsolata"};
`;

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.$itemCenter ? "center" : "start")};
  margin: 2rem 0;
`;

const Sidebar = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`;

const App = () => {
  const [skills, setSkills] = useState([{ id: 1 }]);
  const [works, setWorks] = useState([{ id: 1, text: "Web-development" }]);
  const [bgColor, setBgcolor] = useState("white");
  const [textColor, setTextColor] = useState("#000");
  const [fontFamily, setFontFamily] = useState("Inconsolata");
  const componentRef = useRef(null);
  const printClick = useReactToPrint({
    content: () => componentRef.current,
  });

  const colorBoxClick = (color) => {
    setBgcolor(color);
  };

  const textColorClick = (color) => {
    setTextColor(color);
  };

  const fontStyleClick = (font) => {
    setFontFamily(font);
  };

  const addSkill = () => {
    const newId = skills.length ? skills[skills.length - 1].id + 1 : 1;
    setSkills([...skills, { id: newId }]);
  };

  const removeSkill = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const addWork = () => {
    const newId = works.length ? works[works.length - 1].id + 1 : 1;
    setWorks([...works, { id: newId, text: "Web-development" }]);
  };

  const removeWork = (id) => {
    setWorks(works.filter((work) => work.id !== id));
  };

  return (
    <div className="ui-wrapper">
      <Header onClick={printClick} />
      <div className="ui-content-wrapper">
        <Container>
          <Wrap>
            <Title isEditable={false}>Background color</Title>
            <ColorBox onClick={colorBoxClick} />
            <Row>
              <Title isEditable={false}>Text color</Title>
              <TextColor onClick={textColorClick} />
            </Row>
            <Row>
              <Title isEditable={false}>Font style</Title>
              <FontStyle onClick={fontStyleClick} />
            </Row>
          </Wrap>
          <Wrapper
            $bgColor={bgColor}
            $fontFamily={fontFamily}
            style={{ fontFamily: fontFamily }}
            ref={componentRef}
          >
            <div className="ui-container">
              <Row $itemCenter>
                <Sidebar>
                  <Avatar isShowButton />
                </Sidebar>
                <Content>
                  <Title style={{ color: textColor }}>Dilshod Jumaev</Title>
                  <Descr style={{ color: textColor }}>
                    Experienced Frontend Developer.
                  </Descr>
                </Content>
              </Row>
              <Row>
                <Sidebar>
                  <Title size="3" isUppercase style={{ color: textColor }}>
                    About me:
                  </Title>
                  <Descr style={{ color: textColor }}>Frontend Developer</Descr>
                  <Descr isSecondary style={{ color: textColor }}>
                    Khujand, Sughd
                  </Descr>
                  <Row>
                    <Descr isPrimary style={{ color: textColor }}>
                      <MailIcon style={{ marginRight: "0.6rem" }} />
                      mail@gmail.com
                    </Descr>
                    <Descr isPrimary style={{ color: textColor }}>
                      <PhoneIcon style={{ marginRight: "0.6rem" }} />
                      +992 92-***-**-**
                    </Descr>
                  </Row>
                </Sidebar>
                <Content>
                  <Title size="3" isUppercase style={{ color: textColor }}>
                    Education:
                  </Title>
                  <Descr style={{ color: textColor }}>
                    Khujand Polytechnic Institute of the Technical University of
                    Tajikistan
                  </Descr>
                  <Title
                    size="3"
                    isUppercase
                    isShowButton
                    onClick={addWork}
                    style={{ marginTop: "3.6rem", color: textColor }}
                  >
                    Work Experience:
                  </Title>
                  {works.map((work, index) => (
                    <Descr
                      key={work.id}
                      style={{ color: textColor }}
                      onRemove={() => removeWork(work.id)}
                      showDeleteIcon
                    >
                      {index + 1}. {work.text}
                    </Descr>
                  ))}

                  <Title
                    size="3"
                    isUppercase
                    isShowButton
                    onClick={addSkill}
                    style={{ marginTop: "3rem", color: textColor }}
                  >
                    Skills:
                  </Title>
                  {skills.map(({ id }) => (
                    <Range
                      key={id}
                      id={id}
                      isShowButton
                      onRemove={removeSkill}
                      textColor={textColor}
                    />
                  ))}
                </Content>
              </Row>
            </div>
          </Wrapper>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default App;
