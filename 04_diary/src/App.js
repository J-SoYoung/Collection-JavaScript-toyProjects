import React, { useReducer, useRef, useState } from "react";
import "./App.css";
import AppRoute from "./AppRoute";

const dummy = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의 일기1",
    date: 1679658758353,
  },
  {
    id: 2,
    emotion: 2,
    content: "오늘의 일기2",
    date: 1679658758356,
  },
  {
    id: 3,
    emotion: 3,
    content: "오늘의 일기3",
    date: 1679658758358,
  },
  {
    id: 4,
    emotion: 4,
    content: "오늘의 일기4",
    date: 1680432365124,
  },
  {
    id: 5,
    emotion: 5,
    content: "오늘의 일기5",
    date: 1680432365128,
  },
  {
    id: 6,
    emotion: 1,
    content: "오늘의 일기6",
    date: 1682899200000,
  },
  {
    id: 7,
    emotion: 3,
    content: "오늘의 일기7",
    date: 1682899200004,
  },
];

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    case "EDIT": {
      newState = state.map((s) =>
        s.id === action.data.id ? { ...action.data } : s
      );
      break;
    }
    case "REMOVE": {
      newState = state.filter((s) => s.id !== action.targetId);
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, dummy);
  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  // EIDT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <div className="App">
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onEdit,
            onRemove,
          }}
        >
          <AppRoute />
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </div>
  );
}

export default App;
