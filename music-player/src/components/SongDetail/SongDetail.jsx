import React from "react";
import "./SongDetail.scss";
import img1 from "../../images/music-1.jpg";
import { useSelector } from "react-redux";

function SongDetail() {
  const { playing, playList, currentIndex } = useSelector(
    (state) => state.musicPlayer
  );

  return (
    <>
      <div className="header">
        <span>{playing ? "Now Playing" : "Not Playing"}</span>
      </div>
      <div className="img-area">
        <img
          src={playList[currentIndex].img}
          alt={playList[currentIndex].name}
        />
      </div>
      <div className="music-info">
        <p className="song">{playList[currentIndex].name}</p>
        <p className="artist">{playList[currentIndex].artist}</p>
      </div>
    </>
  );
}

export default SongDetail;
