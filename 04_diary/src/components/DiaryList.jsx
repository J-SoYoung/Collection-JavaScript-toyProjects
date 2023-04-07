import React, { useState } from "react";
// import ControlMemu from "./element/ControlMemu";
import MyButton from "./element/MyButton";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DiaryItem from "./DiaryItem";

const optionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];
const emotionList = [
  { value: "all", name: "전체 감정" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "나쁜 감정만" },
];

function ControlMemu({ value, onChange, optionList }) {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
}

function DiaryList({ diaryList }) {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState("latest");
  const [emotionType, setEmotionType] = useState("all");

  const sortDiaryList = () => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const emotionFilter = (item) => {
      if (emotionType === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    const copyDiary = JSON.parse(JSON.stringify(diaryList));
    const emotionFilterList =
      emotionType === "all"
        ? copyDiary
        : copyDiary.filter((d) => emotionFilter(d));

    const sortedList = emotionFilterList.sort(compare);
    return sortedList;
  };
  return (
    <>
      <ControlBar>
        <div>
          <ControlMemu
            value={sortType}
            onChange={setSortType}
            optionList={optionList}
          />
          <ControlMemu
            value={emotionType}
            onChange={setEmotionType}
            optionList={emotionList}
          />
        </div>
        <MyButton
          text="새 일기쓰기"
          btnType="positive"
          onClick={() => {
            navigate("/new");
          }}
        />
      </ControlBar>
      <div>
        {sortDiaryList().map((diary, idx) => {
          return <DiaryItem diary={diary} key={idx} />;
        })}
      </div>
    </>
  );
}
const ControlBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  div {
    flex: 1;
    select {
      margin-right: 10px;
    }
  }
  button {
    flex: 1;
  }
`;

export default DiaryList;
