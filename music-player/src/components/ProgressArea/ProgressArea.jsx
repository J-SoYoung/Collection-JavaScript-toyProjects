import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  useState,
  useCallback,
} from "react";
import "./ProgressArea.scss";
import { useDispatch, useSelector } from "react-redux";
import { nextMusic, playMusic, stopMusic } from "../../store/musicPlayerSlice";

function ProgressArea(props, ref) {
  // ref: audio메서드가 참조된 ref
  // console.log(ref);
  const audio = useRef();
  const progressBar = useRef();

  // dispatch, useSelector
  const dispatch = useDispatch();
  const { playList, currentIndex, repeat } = useSelector(
    (state) => state.musicPlayer
  );

  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");

  // useImperativeHandle은 ref를 사용하여 자식 컴포넌트의
  // 특정 메서드/속성을 부모 컴포넌트로 노출시키는 데 사용된다.
  useImperativeHandle(ref, () => ({
    play: () => {
      audio.current.play();
    },
    pause: () => {
      audio.current.pause();
    },
    changeVolume: (volume) => {
      audio.current.volume = volume;
    },
    resetDuration: () => {
      audio.current.currentTime = 0;
    },
  }));

  const onPlay = () => {
    dispatch(playMusic());
  };

  const onPause = () => {
    dispatch(stopMusic());
  };

  const onEnded = useCallback(() => {
    if (repeat === "ONE") {
      audio.current.currentTime = 0;
      audio.current.play();
    } else {
      dispatch(nextMusic());
    }
  }, [repeat, dispatch]);

  const getTime = (time) => {
    const minute = `0${parseInt(time / 60, 10)}`;
    const seconds = `0${parseInt(time % 60)}`;
    return `${minute}:${seconds.slice(-2)}`;
  };

  const onTimeUpdate = (e) => {
    if (e.target.readyState === 0) return;
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const progressBarWidth = (currentTime / duration) * 100;
    progressBar.current.style.width = `${progressBarWidth}%`;
    setCurrentTime(getTime(currentTime));
    setDuration(getTime(duration));
  };
  // (전체위치 / 찍힌 지점의 위치) * duration
  const onClickProgress = (e) => {
    const progressBarWidth = e.currentTarget.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const duration = audio.current.duration;
    audio.current.currentTime = (offset / progressBarWidth) * duration;
  };

  return (
    <div className="progress-area" onMouseDown={onClickProgress}>
      <div className="progress-bar" ref={progressBar}>
        <audio
          autoPlay
          ref={audio}
          src={playList[currentIndex].src}
          onEnded={onEnded}
          onPlay={onPlay}
          onPause={onPause}
          onTimeUpdate={onTimeUpdate}
        ></audio>
      </div>
      <div className="music-timer">
        <span>{currentTime}</span>
        <span>{duration}</span>
      </div>
    </div>
  );
}

// forwardRef : ref를 직접 전달할 수 있도록 하는 hook이다.
// 부모 컴포넌트에서 ref를 사용하여 자식 컴포넌트의 메서드에 접근할 수 있다.
export default forwardRef(ProgressArea);
