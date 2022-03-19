import { React, useEffect } from "react";
import './videoDisplay.css'

function VideoDisplay({ imgUrl, title, publishedAt, channelTitle, description, chnlImgUrl, chnlViewCounts }) {
  useEffect(() => {
    // console.log(chnlViewCounts);
    
  });


  return (
    <div className="videoDisplay">
      <div className="videoDisplay__img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="videoDisplay__context">
        <h3>{title}</h3>
        <div className="videoDisplay__context__detail">
          <div className="videoDisplay__context__detail__review">
            觀看次數：{chnlViewCounts}次
          </div>
          <div className="videoDisplay__context__detail__time">{publishedAt}小時前</div>
        </div>
        <div className="videoDisplay__channel">
          <div className="videoDisplay__channel__img">
            <img src={chnlImgUrl} alt=""/>
          </div>
          <div className="videoDisplay__channel__name">{channelTitle}</div>
        </div>
        <div className="videoDisplay__context__description">
          <p>{description}</p>
        </div>
        <div className="videoDisplay__context__tag">
          <p>new tag</p>
        </div>
      </div>
    </div>
  );
}

export default VideoDisplay;
