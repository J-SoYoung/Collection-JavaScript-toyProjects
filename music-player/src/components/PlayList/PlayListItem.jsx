import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

function PlayListItem({ item, index }) {
  const [duration, setDuration] = useState("00:00");
  const currentIndex = useSelector((state) => state.musicPlayer.currentIndex);
  const getDuration = (src) => {
    return new Promise((resolve) => {
      const audio = new Audio();
      audio.onloadedmetadata = () => {
        const minutes = `0${parseInt(audio.duration / 60, 10)}`;
        const seconds = `0${parseInt(audio.duration % 60)}`;
        resolve(`${minutes}:${seconds.slice(-2)}`);
      };
      audio.src = src;
    });
  };

  useEffect(() => {
    async function getTime() {
      const durationTime = await getDuration(item.src);
      setDuration(durationTime);
    }
    getTime();
  }, [item.src]);
  return (
    <>
      <div className={classNames("row", { playing: currentIndex === index })}>
        <span>{item.name}</span>
        <p>{item.artist}</p>
      </div>
      <span
        className={classNames("music-duration", {
          playing: currentIndex === index,
        })}
      >
        {duration}
      </span>
    </>
  );
}

export default PlayListItem;
