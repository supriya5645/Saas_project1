import React from "react";
import ReactPlayer from "react-player";
import "./Header.css";

function Header() {
  const randomVideoUrl =
    "https://www.icloud.com/system/icloud.com/2323Project171/fpo@1x.mp4";

  return (
    <div className="header-container">
     

      <div className="video-wrapper">
        <div className="video-container ">
          <ReactPlayer
            url={randomVideoUrl}
            width="70%"
          
            playing={true}
            muted={true}
            className="video-player"
          />
     
        </div>
       
      </div>
      

    

      <div className="content">
        <h2 className="animated-text1">
          Discover the World of Cloud Computing
        </h2>
        <p className="animated-text2">
          Explore the endless possibilities of cloud computing. Harness the
          power of the cloud to transform your business, streamline operations,
          and scale with ease.
        </p>
        <button className="animated-button">Learn More</button>
      </div>
    </div>
  );
}

export default Header;
