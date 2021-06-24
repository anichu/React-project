import React from 'react';

const VideoDetail = ({ video }) => {
  const videoSrc = ``;
  return (
    <div>
      {video ? (
        <>
          <div className="ui embed">
            <iframe
              title="video player"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
            ></iframe>
          </div>
          <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
          </div>
        </>
      ) : (
        'Loading.....'
      )}
    </div>
  );
};

export default VideoDetail;
