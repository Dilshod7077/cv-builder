import React from "react";
import classNames from "classnames";
import styled from "styled-components";
import propTypes from "prop-types";

const Wrapper = styled.div`
  margin-bottom: 1rem;
  button {
    display: inline-block;
    transition: 0.1s all ease;
    opacity: 0 !important;
  }
  &:hover button {
    opacity: 1 !important;
  }
  p {
    display: inline-block;
    margin-bottom: 0;
  }
`;

const Title = ({
  size = "1",
  isUppercase = false,
  isShowButton = false,
  isEditable = true,
  className = "",
  onClick = () => {},
  children,
  ...attrs
}) => {
  const classes = classNames(`ui-title-${size}`, classNames, { isUppercase });
  return (
    <Wrapper>
      <p
        className={classes}
        contentEditable={isEditable}
        suppressContentEditableWarning
        spellCheck={false}
        {...attrs}
      >
        {children}
      </p>
      {isShowButton && (
        <button className="ui-button isLink" onClick={onClick}>
          +
        </button>
      )}
    </Wrapper>
  );
};

Title.propTypes = {
  size: propTypes.oneOf(["1", "2", "3", "4", "5"]),
  isUppercase: propTypes.bool,
  isShowButton: propTypes.bool,
  isEditable: propTypes.bool,
  className: propTypes.string,
  onClick: propTypes.func,
  children: propTypes.node.isRequired,
};

export default Title;
