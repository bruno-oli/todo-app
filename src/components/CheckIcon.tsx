import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

//image
import iconCheck from "../assets/iconCheck.svg";

const Wrapper = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.colors.checkIconBorderColor};
  cursor: pointer;
  background-position: center;
  background-size: cover;
  &.active {
    border: none;
    background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
  }
`;

interface Props {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

const CheckIcon = ({ isChecked, setIsChecked }: Props) => {
  return (
    <Wrapper
      className={`${isChecked && "active"}`}
      onClick={() => setIsChecked(!isChecked)}
    >
      {isChecked && <img src={iconCheck} alt="" />}
    </Wrapper>
  );
};

export default CheckIcon;
