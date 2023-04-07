import React from "react";
import styled from "styled-components";
import MyButton from "./element/MyButton";
import { useNavigate, useParams } from "react-router-dom";

function DiaryItem({ diary }) {
  const navigate = useNavigate();
  const day = new Date(diary.date).toISOString().split("T")[0];

  return (
    <DiaryItemBox>
      <div
        onClick={() => {
          navigate(`/detail/${diary.id}`);
        }}
      >
        <DiaryImg src={`/img/emotion${diary.emotion}.png`} />
        <DiaryContent>
          <DiaryText>{diary.content}</DiaryText>
          <DiaryDate>
            <span>{day}</span>
          </DiaryDate>
        </DiaryContent>
      </div>
      <MyButton
        text="수정하기"
        onClick={() => {
          navigate(`/edit/${diary.id}`);
        }}
      />
    </DiaryItemBox>
  );
}

const DiaryItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  & > div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: centert;
    cursor: pointer;
  }
`;
const DiaryImg = styled.img`
  width: 50px;
  height: 50px;
`;
const DiaryDate = styled.div`
  font-size: 12px;
  color: gray;
`;
const DiaryContent = styled.div`
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
`;
const DiaryText = styled.div``;

export default DiaryItem;
