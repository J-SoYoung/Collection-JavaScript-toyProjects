import React, { useCallback, useRef, useState } from "react";
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

  // 최적화useCallback, playlist가 업데이트 된다고 해서 함수까지 재렌더링 될 필요는 없다
  const onPlay = useCallback(() => {
    audioRef.current.play();
  }, []);
  const onPause = useCallback(() => {
    audioRef.current.pause();
  }, []);
  const changeVolume = useCallback((volume) => {
    audioRef.current.changeVolume(volume);
  }, []);
  const resetDuration = useCallback(() => {
    audioRef.current.resetDuration();
  }, []);

  return (
    <div className="App">
      <div className="container">
        {/* 최적화useMemo : 자신의 props가 변경되지 않았으면 굳이 재랜더링 할 필요없음 */}
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
