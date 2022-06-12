import React,{useState, useEffect} from "react";
import SearchBar from './SearchBar';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../Hooks/useVideos";

const App = ()=>{
    const [selectedVideo, setSelectedVideo] =useState(null)
    const [videos, search] = useVideos("building");

    useEffect(()=>{
        setSelectedVideo(videos[0])
    },[videos]);

        return  ( 
            <div>
            <SearchBar  onTermFetch ={search} />
            <div className="container">
                <div className="row">
                    <div className="col">
                     <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="col">
                    <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
                    </div>
                </div>        
            </div> 
            </div>
            );

}

// class App extends React.Component{
    // state = {videos : [], selectedVideo : null};

    // onTermSubmit = async term => {
    // const response = await youtube.get('/search', {
    //      params: {
    //          q: term
    //      }
    //  });

    // this.setState({videos: response.data.items});

    //  };

    // onVideoSelect=(video)=> {
    //  this.setState({selectedVideo: video});
    // }

    // render(){
    //     return ( 
    //     <div>
    //     <SearchBar  onTermFetch ={this.onTermSubmit} />
    //     <div class="container">
    //         <div class="row">
    //             <div class="col">
    //              <VideoDetail video={this.state.selectedVideo} />
    //             </div>
    //             <div class="col">
    //             <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
    //             </div>
    //         </div>        
    //     </div> 
    //     </div>
    //     );
    // }
// }
export default App;