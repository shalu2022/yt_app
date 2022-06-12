import React from "react";

const VideoDetail = ({video}) => {

    if(!video){
      return  <div>Loading......</div>;        
    }

    const source = `https://www.youtube.com/embed/${video.id.videoId}`

return  <div className="card">
                        <div className="ratio ratio-21x9">
                            <iframe src={source} title="YouTube video" allowFullScreen></iframe>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{video.snippet.title}</h5>
                            <p className="card-text">{video.snippet.description}</p>
                        </div>         
        </div>
};

export default VideoDetail;