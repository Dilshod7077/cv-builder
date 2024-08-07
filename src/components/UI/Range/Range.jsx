import React, { useState } from "react";
import styled from "styled-components";
import Descr from "../Descr/Descr";
import propTypes from "prop-types";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg";

const Wrapper = styled.div`
  display: inline-block;
  width: 33%;
  margin: 0.4rem 0;
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
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Range = ({ id, onRemove = () => {}, textColor  }) => {
  const [value, setValue] = useState(90);

  return (
    <Wrapper>
      <Row>
        <Descr style={{ color: textColor }}>Name - {value}</Descr>
          <div className="delete" onClick={() => onRemove(id)}>
            <DeleteIcon />
          </div>
      </Row>
      <input
        type="range"
        min={10}
        max={100}
        step={10}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Wrapper>
  );
};

Range.propTypes = {
  id: propTypes.number.isRequired,
  onRemove: propTypes.func,
};
export default Range;
