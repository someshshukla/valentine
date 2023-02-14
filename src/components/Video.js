import React from "react";
import { useState } from "react";
import ReactPlayer from 'react-player'
import YouTube from "react-youtube";
var getYouTubeID = require("get-youtube-id");



function Video() {

    const [id, setId] = useState("");

    function handleChange(e){
        console.log(e.target.value)
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      return (
        <div className="Video">
            <input type="text" onChange={handleChange} required placeholder="URL..." />
            <YouTube videoId={id} opts={opts} onReady={this._onReady} />
        </div>
      )
    
    
}

export default Video;