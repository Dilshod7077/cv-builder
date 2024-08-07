import React from "react";
import classNames from "classnames";
import styled from "styled-components";
import propTypes from "prop-types";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .delete {
    display: inline-block;
    color: #c20000;
    align-items: center;
    justify-content: center;
    width: 20px;
    transition: 0.1s all ease;
    opacity: 0 !important;
    cursor: pointer;
  }
  &:hover .delete {
    opacity: 1 !important;
  }
`;

const Descr = ({
  id,
  isPrimary = false,
  isSecondary = false,
  className = "",
  onRemove = () => {},
  children,
  showDeleteIcon = false,
  ...attrs
}) => {
  const classes = classNames("ui-text", className, {
    isPrimary,
    isSecondary,
  });

  return (
    <Wrapper>
      <p
        className={classes}
        contentEditable
        suppressContentEditableWarning
        spellCheck={false}
        {...attrs}
      >
        {children}
      </p>
      {showDeleteIcon && (
        <div className="delete" onClick={() => onRemove(id)}>
          <DeleteIcon />
        </div>
      )}
    </Wrapper>
  );
};

Descr.propTypes = {
  id: propTypes.number.isRequired,
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
  onRemove: propTypes.func,
  showDeleteIcon: propTypes.bool,
};

export default Descr;
