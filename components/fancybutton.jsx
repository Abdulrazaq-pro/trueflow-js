"use client";

import React from "react";
import styled from "styled-components";

const Button = ({
  hoverText = "Hello!",
  defaultText = "Hover me",
  gradientColors = ["#1B5E20", "#7CB342"],
  width = "250px",
  height = "60px",
  size = "md",
  className,
  onClick,
  children,
  fullWidth = false,
  ...props
}) => {
  const sizeConfig = {
    sm: { width: "120px", height: "40px", fontSize: "14px", padding: "0 16px" },
    md: { width: "150px", height: "60px", fontSize: "17px", padding: "0 20px" },
    lg: { width: "200px", height: "80px", fontSize: "18px", padding: "0 32px" }
  };

  const currentSize = sizeConfig[size];
  const buttonWidth = fullWidth ? "100%" : (width || currentSize.width);
  const buttonHeight = height || currentSize.height;

  return (
    <StyledWrapper
      $gradientStart={gradientColors[0]}
      $gradientEnd={gradientColors[1]}
      $width={buttonWidth}
      $height={buttonHeight}
      $fontSize={currentSize.fontSize}
      $padding={currentSize.padding}
      $fullWidth={fullWidth}
    >
      <button
        className={`button ${className || ""}`}
        onClick={onClick}
        {...props}
      >
        {children ? (
          <>
            <div className="default-text">{children}</div>
            <div className="hover-text">{children}</div>
          </>
        ) : (
          <>
            <div className="default-text">{defaultText}</div>
            <div className="hover-text">{hoverText}</div>
          </>
        )}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  width: ${props => props.$fullWidth ? "100%" : "auto"};
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${props => props.$gradientStart},
      ${props => props.$gradientEnd}
    );
    border-radius: 10px;
    z-index: -1;
  }
  .button {
    position: relative;
    background-color: transparent;
    color: #e8e8e8;
    font-size: 17px;
    font-weight: 600;
    border-radius: 10px;
    width: ${props => props.$width};
    height: ${props => props.$height};
    transform: translate(0%, 90%);
    transform: translate(0%, -10%);
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(51, 51, 51, 0.2);
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .default-text,
    .hover-text {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      left: 0;
      top: 0;
    }

    .default-text {
      background-color: #333;
      transform: translateY(0%);
    }

    .hover-text {
      background: linear-gradient(
        135deg,
        ${props => props.$gradientStart},
        ${props => props.$gradientEnd}
      );
      transform: translateY(100%);
    }

    &:hover {
      .default-text {
        transform: translateY(-100%);
      }

      .hover-text {
        transform: translateY(0%);
      }
    }

    &:focus {
      outline: none;
    }

    &:active {
      scale: 0.95;
    }
  }
`;

export default Button;