import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentIndex } from "../../store/musicPlayerSlice";
import QueueMusic from "@mui/icons-material/QueueMusic";
import Close from "@mui/icons-material/Close";
import PlayListItem from "./PlayListItem";
import classNames from "classnames";
import "./PlayList.scss";
import SortableList from "@thdud/sortable-list";

const PlayList = ({ showPlayList, setShowPlayList }) => {
  const dispatch = useDispatch();
  const playList = useSelector((state) => state.musicPlayer.playList);

  const renderItem = useCallback(
    (item, index) => <PlayListItem item={item} index={index} />,
    []
  );

  const onClickClosePlayList = () => {
    setShowPlayList(false);
  };

  const onClickItem = (index) => {
    dispatch(setCurrentIndex(index));
  };

  return (
    <div className={classNames("play-list", { show: showPlayList })}>
      <div className="header">
        <div className="row">
          <QueueMusic className="list" />
          <span>Play list</span>
        </div>
        <Close
          sx={{ fontSize: 22, cursor: "pointer" }}
          onClick={onClickClosePlayList}
        />
      </div>
      <SortableList
        data={playList}
        renderItem={renderItem}
        onClickItem={onClickItem}
      />
      {/* <ul>
        {MusicList.map((item, index) => (
          <li key={index}>
            <PlayListItem item={item} index={index} />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default PlayList;
