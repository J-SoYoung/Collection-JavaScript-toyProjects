import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import MyHeader from "../components/element/MyHeader";
import MyButton from "../components/element/MyButton";
import EmotionItem from "../components/element/EmotionItem";
import { emotionList } from "../util/emotion";
import { getStringDate } from "../util/date";
import { DiaryDispatchContext } from "../App";

const NewPage = ({ isEdit, editOriginData }) => {
  const navigate = useNavigate();
  const textareaRef = useRef();

  const [today, setToday] = useState(getStringDate(new Date()));
  const [textarea, setTextarea] = useState("");
  const [emotion, setEmotion] = useState("3");

  useEffect(() => {
    if (isEdit) {
      setToday(
        editOriginData?.date &&
          new Date(editOriginData?.date).toISOString().slice(0, 10)
      );
      setTextarea(editOriginData?.content);
      setEmotion(editOriginData?.emotion);
    }
  }, [isEdit, editOriginData]);

  const handleEmotion = (emotion_id) => {
    setEmotion(emotion_id);
  };

  const { onCreate, onEdit } = useContext(DiaryDispatchContext);

  const handleSubmit = () => {
    if (textarea < 1) {
      textareaRef.current.focus();
      return;
    }
    if (!isEdit) {
      onCreate(today, textarea, emotion);
      // onCreate(today, textarea, emotion);
      console.log("일기추가", today, textarea, emotion);
      navigate(-1, { replace: true });
    } else {
      onEdit(editOriginData?.id, today, textarea, emotion);
      console.log("일기수정", editOriginData?.id, today, textarea, emotion);
      navigate(-1, { replace: true });
    }
  };

  return (
    <>
      <MyHeader
        leftChild={
          <MyButton
            text="< 뒤로가기"
            onClick={() => {
              navigate(-1);
            }}
          />
        }
        centerText={isEdit ? "일기 수정하기" : "새로운 일기쓰기"}
      />
      <Box>
        <h2>오늘은 언제인가요?</h2>
        <input
          type="date"
          value={today || ""}
          // value={today || ""}
          onChange={(e) => setToday(e.target.value)}
        />
      </Box>
      <Box>
        <h2>오늘의 감정</h2>
        <EmotionBox>
          {emotionList.map((it) => (
            <EmotionItem
              key={it.emotion_id}
              {...it}
              onClick={handleEmotion}
              isSelect={it.emotion_id === emotion}
            />
          ))}
        </EmotionBox>
      </Box>
      <Box>
        <h2>오늘의 일기</h2>
        <textarea
          ref={textareaRef}
          placeholder="일기를 작성해주세요"
          value={textarea || ""}
          onChange={(e) => setTextarea(e.target.value)}
        />
      </Box>
      <ButtonBox>
        <MyButton
          text="취소하기"
          onClick={() => {
            navigate(-1);
          }}
        />
        <MyButton
          text={isEdit ? "수정완료" : "작성완료"}
          btnType="positive"
          onClick={handleSubmit}
        />
      </ButtonBox>
    </>
  );
};

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Box = styled.section`
  margin-bottom: 20px;
  input {
    width: 200px;
    height: 45px;
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 20px;
  }
  textarea {
    width: 100%;
    height: 180px;
    padding: 16px;
    box-sizing: border-box;
    border-radius: 8px;
    resize: none;
    font-size: 20px;
  }
`;

const EmotionBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 2%;
  img {
    margin-bottom: 16px;
  }
`;
export default NewPage;
