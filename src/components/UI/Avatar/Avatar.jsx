import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as CameraIcon } from "../../../assets/icons/camera.svg";
import { ReactComponent as SwapIcon } from "../../../assets/icons/swap.svg";

const Wrapper = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  border-radius: ${(props) => (props.$isSquare ? "10px" : "50%")};
  background-color: #bfbfbf;
  transition: border-radius 0.3s ease-in-out;
  cursor: pointer;

  input {
    display: none;
  }
  label,
  label div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    transition: border-radius 0.3s ease-in-out;
    border-radius: ${(props) => (props.$isSquare ? "10px" : "50%")};
  }
  .swapButton {
    display: inline-block;
    transition: 0.1s all ease;
    opacity: 0 !important;
  }
  &:hover .swapButton {
    opacity: 1 !important;
  }
`;

const SwapButton = styled(SwapIcon)`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.1s ease;

  ${Wrapper}:hover & {
    opacity: 1;
  }
`;

const Avatar = ({ $isSquare = false, isShowButton = false }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isSquare, setIsSquare] = useState($isSquare);

  useEffect(() => {
    const objectUrl = selectedFile && URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleSwapClick = () => {
    setIsSquare((prev) => !prev);
  };

  return (
    <Wrapper $isSquare={isSquare}>
      <input
        id="Avatar"
        type="file"
        value=""
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
      <label htmlFor="Avatar">
        {preview ? (
          <div
            style={{
              backgroundImage: `url(${preview})`,
              backgroundSize: "cover",
            }}
          />
        ) : (
          <CameraIcon />
        )}
      </label>
      {isShowButton && (
        <SwapButton
          className="ui-button isLink swapButton"
          onClick={handleSwapClick}
        />
      )}
    </Wrapper>
  );
};

Avatar.propTypes = {
  $isSquare: PropTypes.bool,
  isShowButton: PropTypes.bool,
};

export default Avatar;
