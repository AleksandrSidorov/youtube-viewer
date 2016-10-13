import React from 'react';
import './VideoListItem.css';

const VideoListItem = ({video, onVideoSelect}) => {
  const imgURL = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item video-item">
      <div className="video-list media">
        <div className="media-left">
          <img alt="Video thumbnail" role="presentation" className="media-object video-item__img" src={imgURL} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
