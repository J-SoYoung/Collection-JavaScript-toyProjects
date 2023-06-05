import React, { useImperativeHandle, useRef, forwardRef } from "react";
import "./ProgressArea.scss";
import { useDispatch } from "react-redux";
import music1 from "../../music/music-1.mp3";
import { playMusic, stopMusic } from "../../store/musicPlayerSlice";

function ProgressArea(props, ref) {
  console.log(ref);
  const audio = useRef();
  const dispatch = useDispatch();

  // useImperativeHandle은 ref를 사용하여 자식 컴포넌트의 
  // 특정 메서드/속성을 부모 컴포넌트로 노출시키는 데 사용된다. 
  useImperativeHandle(ref, () => ({
    play: () => {
      audio.current.play();
    },
    pause: () => {
      audio.current.pause();
    },
  }));

  const onPlay = () => {
    dispatch(playMusic());
  };
  const onPause = () => {
    dispatch(stopMusic());
  };
  return (
    <div className="progress-area">
      <div className="progress-bar">
        <audio
          autoPlay
          ref={audio}
          src={music1}
          onPlay={onPlay}
          onPause={onPause}
        ></audio>
      </div>
      <div className="music-timer">
        <span>00:00</span>
        <span>00:00</span>
      </div>
    </div>
  );
}

// forwardRef : ref를 직접 전달할 수 있도록 하는 hook이다. 
// 부모 컴포넌트에서 ref를 사용하여 자식 컴포넌트의 메서드에 접근할 수 있다.
export default forwardRef(ProgressArea);
