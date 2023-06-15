import React, { ChangeEvent, useRef, useState } from "react";
import "./App.css";

// ViewItem은 이미지와 텍스트를 포함하는 객체의 타입을 정의
interface ViewItem {
  image: string;
  text: string;
}

function App() {
  const [text, setText] = useState<string>("");
  const [selectImage, setSelectImage] = useState<string>("");

  // initialViewList는 ViewItem 객체의 빈 배열로 초기화됩니다.
  const initialViewList: ViewItem[] = [];
  const [viewList, setViewList] = useState<ViewItem[]>(initialViewList);
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePostAdd = () => {
    const newItem: ViewItem = {
      image: selectImage,
      text: text,
    };
    setViewList((prev) => [...prev, newItem]);
    setText("");
    setSelectImage("");
  };
  // console.log(viewList);
  const handleImageAdd = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSelectImage(reader.result as string);
      };
    }
  };

  return (
    <div className="App">
      <h1>gallary mini pj</h1>
      <div className="input-container">
        <div className="input-text-box">
          <span>오늘의 한 줄 </span>
          <input
            type="text"
            value={text || ""}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </div>
        <div className="input-img-box">
          {!selectImage && (
            <p
              onClick={() => {
                inputRef.current?.click();
              }}
            >
              이미지가 없습니다.
              <br /> 이미지를 추가해주세요.
              <br /> +
            </p>
          )}
          <input type="file" ref={inputRef} onChange={handleImageAdd} />
          {selectImage && <img className="prevImg" src={selectImage} />}
        </div>
        <button
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          이미지변경
        </button>
        <button onClick={handlePostAdd}>추가하기</button>
      </div>
      <div className="post-container">
        {viewList.map((v, idx) => {
          return (
            <div className="post" key={idx}>
              <img src={v.image} />
              <p>{v.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
