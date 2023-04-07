import React, { useContext, useEffect, useState } from "react";
import MyHeader from "../components/element/MyHeader";
import MyButton from "../components/element/MyButton";
import DiaryList from "../components/DiaryList";
import { DiaryStateContext } from "../App";

const HomePage = () => {
  const diaryList = useContext(DiaryStateContext);
  const [curDiaryList, setCurDiaryList] = useState([]);

  const [curDate, setcurDate] = useState(new Date());
  const centerText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    if (diaryList.length > 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();
      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();

      setCurDiaryList(
        diaryList.filter((d) => firstDay <= d.date && d.date <= lastDay)
      );
    }
  }, [curDate, diaryList]);

  const decreaseMonth = () => {
    setcurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1),
      curDate.getDate()
    );
  };
  const increaseMonth = () => {
    setcurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1),
      curDate.getDate()
    );
  };

  return (
    <div>
      <MyHeader
        leftChild={<MyButton text="<" onClick={decreaseMonth} />}
        rightChild={<MyButton text=">" onClick={increaseMonth} />}
        centerText={centerText}
      />
      <DiaryList diaryList={curDiaryList} />
    </div>
  );
};

export default HomePage;
