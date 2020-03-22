import React from "react";
import ReactPlayer from "react-player"

const AudioPlayer = ({ url }) => (<div>
  <ReactPlayer
    url={url}
    width="400px"
    height="30px"
    controls={true}
  />
</div>)

export default AudioPlayer;
