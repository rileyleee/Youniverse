import React, { FC, ChangeEvent, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import {
  ADDITIONAL_INFO_NICKNAME,
  ADDITIONAL_INFO_NICKNAME_PLACEHOLDER,
  ADDITIONAL_INFO_GENDER,
  ADDITIONAL_INFO_GENDER_F,
  ADDITIONAL_INFO_GENDER_M,
  ADDITIONAL_INFO_AGE,
  ADDITIONAL_INFO_AGE_PLACEHOLDER,
  ADDITIONAL_INFO_INTRODUCE,
  ADDITIONAL_INFO_INTRODUCE_PLACEHOLDER,
  SAVE,
} from "../../commons/constants/String";
import {
  FlexCenter,
  FlexColBetween,
  FlexRowBetween,
} from "../../commons/style/SharedStyle";
import Wrapper from "../atoms/Wrapper";
import InputBox from "../atoms/InputBox";
import Btn from "../atoms/Btn";

const AdditionalForm: FC = () => {
  const [nickName, setNickName] = useState<string>("");
  const [age, setAge] = useState<number>();
  const [gender, setGender] = useState<string>("");
  const [introduction, setIntroduction] = useState<string>("");

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(event.target.value);
    };

  const handleGenderClick = (genderValue: string) => {
    setGender((prev) => (prev === genderValue ? "" : genderValue));
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.post("api 주소", {
        nickName,
        age,
        gender,
        introduction,
      });
      console.log("Response:", response.data);
      // 요청이 성공하면 사용자에게 성공 메시지 표시?
    } catch (error) {
      console.error("Error:", error);
      // 요청이 실패하면 사용자에게 오류 메시지 표시?
    }
  };

  return (
    <div>
      <StyledStandardWhiteGhostWrapper
        size={"Standard"}
        color={"WhiteGhost"}
        padding={"Medium"}
      >
        <StyledContainerBetweenCol>
          <StyledContainerRowBetween>
            <StyledLabelContainer>
              {ADDITIONAL_INFO_NICKNAME}
            </StyledLabelContainer>
            <StyledInputContainer>
              <StyledClearInput
                type="text"
                placeholder={ADDITIONAL_INFO_NICKNAME_PLACEHOLDER}
                value={nickName}
                onChange={handleChange(setNickName)}
              />
            </StyledInputContainer>
          </StyledContainerRowBetween>
          <StyledContainerRowBetween>
            <StyledLabelContainer>
              {ADDITIONAL_INFO_GENDER}
            </StyledLabelContainer>
            <StyledInputContainer>
              <StyledFemaleContainer>
                <Btn
                  size="Medium"
                  color={
                    gender === ADDITIONAL_INFO_GENDER_F ? "Black" : "White"
                  }
                  onClick={() => handleGenderClick(ADDITIONAL_INFO_GENDER_F)}
                >
                  {ADDITIONAL_INFO_GENDER_F}
                </Btn>
              </StyledFemaleContainer>
              <StyledMaleContainer>
                <Btn
                  size="Medium"
                  color={
                    gender === ADDITIONAL_INFO_GENDER_M ? "Black" : "White"
                  }
                  onClick={() => handleGenderClick(ADDITIONAL_INFO_GENDER_M)}
                >
                  {ADDITIONAL_INFO_GENDER_M}
                </Btn>
              </StyledMaleContainer>
            </StyledInputContainer>
          </StyledContainerRowBetween>
          <StyledContainerRowBetween>
            <StyledLabelContainer>{ADDITIONAL_INFO_AGE}</StyledLabelContainer>
            <StyledInputContainer>
              <StyledClearInput
                type="number"
                placeholder={ADDITIONAL_INFO_AGE_PLACEHOLDER}
                value={age}
                onChange={(e) => setAge(e.target.valueAsNumber)}
              />
            </StyledInputContainer>
          </StyledContainerRowBetween>
          <StyledContainerRowBetween>
            <StyledLabelContainer>
              {ADDITIONAL_INFO_INTRODUCE}
            </StyledLabelContainer>
            <StyledInputContainer>
              <StyledTextArea
                id="introduction"
                value={introduction}
                placeholder={ADDITIONAL_INFO_INTRODUCE_PLACEHOLDER}
                onChange={handleChange(setIntroduction)}
                maxLength={30}
              ></StyledTextArea>
            </StyledInputContainer>
          </StyledContainerRowBetween>
          <StyledContainerCenter>
            <StyledSaveButton
              size={"Medium"}
              color={"Black"}
              onClick={handleSaveClick}
            >
              {SAVE}
            </StyledSaveButton>
          </StyledContainerCenter>
        </StyledContainerBetweenCol>
      </StyledStandardWhiteGhostWrapper>
    </div>
  );
};

export default AdditionalForm;

const StyledStandardWhiteGhostWrapper = styled(Wrapper)`
  ${FlexCenter}
  width: 60%;
  margin: 0 auto;
`;

const StyledContainerCenter = styled.div`
  ${FlexCenter}
`;

const StyledContainerBetweenCol = styled.div`
  ${FlexColBetween}
  height:500px;
  width: 70%;
`;

const StyledContainerRowBetween = styled.div`
  ${FlexRowBetween}
  width:100%;
`;

const StyledFemaleContainer = styled.div`
  width: 48%;
`;

const StyledMaleContainer = styled.div`
  width: 48%;
`;

const StyledLabelContainer = styled.div`
  width: 25%;
`;

const StyledInputContainer = styled.div`
  ${FlexRowBetween}
  width: 70%;
`;

const StyledClearInput = styled(InputBox)`
  padding: 5px 10px;
`;

const StyledSaveButton = styled(Btn)`
  width: 200px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 52px;
  font-size: 16px;
  font-family: "YESGothic-Regular";
  border-radius: 12px;
  border: none;
  resize: none;
  padding: 5px 10px;
  box-sizing: border-box;
`;
