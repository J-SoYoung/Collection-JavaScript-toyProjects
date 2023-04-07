import React, { useContext, useEffect, useState } from "react";
import NewPage from "./NewPage";
import { DiaryStateContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const diaryList = useContext(DiaryStateContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [editOriginData, setEditOriginData] = useState("");

  useEffect(() => {
    if (diaryList.length > 1) {
      const targetDiary = diaryList.find(
        (diary) => parseInt(diary.id) === parseInt(id)
      );
      if (targetDiary) {
        setEditOriginData(targetDiary);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [diaryList, id]);

  return (
    <div>
      <NewPage isEdit={true} editOriginData={editOriginData} />
    </div>
  );
};

export default EditPage;
