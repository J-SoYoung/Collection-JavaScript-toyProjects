import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import MyHeader from "./../components/element/MyHeader";
import MyButton from "../components/element/MyButton";
import { DiaryStateContext } from "../App";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const diaryList = useContext(DiaryStateContext);
  const [data, setData] = useState("");

  useEffect(() => {
    if (diaryList.length > 1) {
      const targetDiary = diaryList.find(
        (diary) => parseInt(diary.id) === parseInt(id)
      );
      if (targetDiary) {
        setData(targetDiary);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [diaryList, id]);

  return (
    <>
      <MyHeader
        leftChild={<MyButton text="< 뒤로가기" onClick={() => navigate(-1)} />}
        centerText={`${
          data?.date && new Date(data?.date).toISOString().slice(0, 10)
        } 의 일기`}
        rightChild={
          <MyButton text="수정하기" onClick={() => navigate(`/edit/${id}`)} />
        }
      />
      <DetailSection>
        <DetailImg>
          <h3>오늘의 감정</h3>
          <img src={`/img/emotion${data.emotion}.png`} />
        </DetailImg>
        <DetailContent>
          <h3>오늘의 일기</h3>
          <div>{data.content}</div>
        </DetailContent>
      </DetailSection>
    </>
  );
}

const DetailSection = styled.div`
  text-align: center;
`;
const DetailImg = styled.div``;
const DetailContent = styled.div`
  div {
    width: 100%;
    height: 180px;
    border-radius: 8px;
    font-size: 20px;
    padding: 16px;
    box-sizing: border-box;
    text-align: left;
    background-color: #ececec;
  }
`;
export default DetailPage;
