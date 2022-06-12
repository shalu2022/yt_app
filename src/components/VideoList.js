import React from "react";
import VideoItem from "./VideoItem";


const VideoList = ({videos, onVideoSelect}) => {
    const renderList = videos.map((video, index) =>{
        return <VideoItem key={index} onVideoSelect={onVideoSelect} video={video}/>;
    });

    return (
    <div>{renderList}</div>
    )
};


export default VideoList
