import { createSlice } from "@reduxjs/toolkit";
import img1 from "../images/music-1.jpg";
import img2 from "../images/music-2.jpg";
import img3 from "../images/music-3.jpg";
import img4 from "../images/music-4.jpg";
import img5 from "../images/music-5.jpg";
import music1 from "../music/music-1.mp3";
import music2 from "../music/music-2.mp3";
import music3 from "../music/music-3.mp3";
import music4 from "../music/music-4.mp3";
import music5 from "../music/music-5.mp3";

const playList = [
  {
    name: "Relax And Sleep",
    artist: "Anton Vlasov",
    img: img1,
    src: music1,
    id: 1,
  },
  {
    name: "Don't You Think Lose",
    artist: "Anton Vlasov",
    img: img2,
    src: music2,
    id: 2,
  },
  {
    name: "The Cradle of Your Soul",
    artist: "lemonmusicstudio",
    img: img3,
    src: music3,
    id: 3,
  },
  {
    name: "Spirit Blossom",
    artist: "RomanBelov",
    img: img4,
    src: music4,
    id: 4,
  },
  {
    name: "Everything Feels New",
    artist: "EvgenyBardyuzha",
    img: img5,
    src: music5,
    id: 5,
  },
];

const initialState = {
  playList,
  currentMusicId: playList[0].id,
  currentIndex: 0,
  playing: false,
  repeat: "ALL", // ONE SHUFFLE
};

const repeatMode = ["ONE", "ALL", "SHUFFLE"];
const getrandomNumber = (arr, excludeNum) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber] === excludeNum
    ? getrandomNumber(arr, excludeNum)
    : arr[randomNumber];
};

// action-type, action-function, reducer합쳐짐
const musicPlayerSlice = createSlice({
  name: "musicPlayer",
  initialState,
  reducers: {
    playMusic: (state, action) => {
      return { ...state, playing: true };
    },
    stopMusic: (state, action) => {
      return { ...state, playing: false };
    },
    nextMusic: (state, action) => {
      // 마지막 index의 음악이 끝난 경우, if문을 사용하지 않아도 index가 0결과값이 된다
      // => 처음으로 돌아간다
      const nextIndex =
        state.repeat === "SHUFFLE"
          ? // playList.length길이만큼 인덱스 값을 가지고 있는 배열 생성, 제외할 index를 인수로 전달
            getrandomNumber(
              Array.from(Array(playList.length).keys()),
              state.currentIndex
            )
          : (state.currentIndex + 1) % state.playList.length;
      return {
        ...state,
        currentIndex: nextIndex,
        currentMusicId: state.playList[nextIndex].id,
      };
    },
    prevMusic: (state, action) => {
      // 0에서 이전곡으로 가면 마지막 음원이 나와야 하므로 4가 되어야 한다
      const prevIndex =
        state.repeat === "SHUFFLE"
          ? // playList.length길이만큼 인덱스 값을 가지고 있는 배열 생성, 제외할 index를 인수로 전달
            getrandomNumber(
              Array.from(Array(playList.length).keys()),
              state.currentIndex
            )
          : (state.currentIndex - 1 + state.playList.length) %
            state.playList.length;
      return {
        ...state,
        currentIndex: prevIndex,
        currentMusicId: state.playList[prevIndex].id,
      };
    },
    setRepeat: (state, action) => {
      return {
        ...state,
        repeat:
          repeatMode[
            // indexOf: 배열 메서드 중 하나, 특정 키워드를 찾아 index반환
            // 버튼을 클릭하면 repeatMode의 배열을 반복하면서 결과값 반환
            (repeatMode.indexOf(state.repeat) + 1) % repeatMode.length
          ],
      };
    },
    setCurrentIndex: (state, action) => {
      return {
        ...state,
        currentIndex: action.payload,
        currentMusicId: state.playList[action.payload].id,
      };
    },
    updatePlayList: (state, action) => {
      const newPlayList = action.payload;
      return {
        ...state,
        playList: newPlayList,
        currentIndex: newPlayList.findIndex(
          (music) => music.id === state.currentMusicId
        ),
      };
    },
  },
});

export const {
  playMusic,
  stopMusic,
  nextMusic,
  prevMusic,
  setRepeat,
  setCurrentIndex,
  updatePlayList,
} = musicPlayerSlice.actions;
export default musicPlayerSlice.reducer;
