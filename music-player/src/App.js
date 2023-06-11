import React, { useRef, useState } from "react";
import "./App.scss";
import Controls from "./components/Controls/Controls";
import PlayList from "./components/PlayList/PlayList";
import ProgressArea from "./components/ProgressArea/ProgressArea";
import SongDetail from "./components/SongDetail/SongDetail";

function App() {
  // ProgressArea를 forwardRef로 감싸뒀기 때문에
  // ProgressArea에 있는 audio와 관련된 메서드를 부.컴인 App에서 Ref를 통해 접근할 수 있게 됨.
  // App컴포넌트는 ref에서 참조한 audio관련 메서드를 Controls에 props로 넘겨 사용할 수 있게 됨.
  const audioRef = useRef();
  const [showPlayList, setShowPlayList] = useState(false);

  const onPlay = () => {
    audioRef.current.play();
  };
  const onPause = () => {
    audioRef.current.pause();
  };
  const changeVolume = (volume) => {
    audioRef.current.changeVolume(volume);
  };
  const resetDuration = () => {
    audioRef.current.resetDuration();
  };
  return (
    <div className="App">
      <div className="container">
        <SongDetail />
        <ProgressArea ref={audioRef} />
        <Controls
          setShowPlayList={setShowPlayList}
          play={onPlay}
          pause={onPause}
          changeVolume={changeVolume}
          resetDuration={resetDuration}
        />
        <PlayList
          setShowPlayList={setShowPlayList}
          showPlayList={showPlayList}
        />
      </div>
    </div>
  );
}

export default App;
