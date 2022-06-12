import React from "react";


const VideoItem = ({video, onVideoSelect}) => {
  return ( 
  <div className="container ">
        <div onClick={()=>{onVideoSelect(video)}} className="card mb-3" style={{maxWidth:"540px",overflow:"hidden", height:"150px",cursor:"pointer"}}>
            <div className="row g-0 ">
            <div className="col-md-4 ">
            <img style={{height:"150px"}} src={video.snippet.thumbnails.medium.url} className="img-fluid rounded-start" alt=""/>
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{video.snippet.title}</h5>
                <p className="card-text">{video.snippet.description}</p>
            </div>
        </div>
    </div>
    </div>
      </div>
)};


export default VideoItem;