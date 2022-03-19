// import logo from './logo.svg';
// import './App.css';
// import { Router, Route, Switch } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { Icon } from "@iconify/react";
import axios from 'axios';
import VideoDisplay from "./components/videoDisplay";

function App() {
  const [videoData, setVideoData] = useState([]);
  const [inputValue, setInputValue] = useState('babyshark');

  const callYTAPI = useCallback(async() => { 
    let channelId = [];
    let videoId = [];

    let res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${inputValue}&key=AIzaSyDP-lkwkmmSAoOHCXzjDaRtTTDe47xv2qE&type=video&maxResults=4`)


  //   let res = {
  //     "kind": "youtube#searchListResponse",
  //     "etag": "revFF8Tdha3Z7ofly0WG6qH_0Og",
  //     "nextPageToken": "CAQQAA",
  //     "regionCode": "TW",
  //     "pageInfo": {
  //         "totalResults": 785606,
  //         "resultsPerPage": 4
  //     },
  //     "items": [
  //         {
  //             "kind": "youtube#searchResult",
  //             "etag": "FhhBwCbisYaCCPc0DLkstputl5s",
  //             "id": {
  //                 "kind": "youtube#video",
  //                 "videoId": "zt6SyZ6z804"
  //             },
  //             "snippet": {
  //                 "publishedAt": "2022-02-10T13:39:53Z",
  //                 "channelId": "UCCQvP4hsRW9emj0meGk15jg",
  //                 "title": "【2022北京冬奧】花式滑冰 男子長曲 羽生結弦",
  //                 "description": "滿滿感動       謝謝#羽生結弦你的堅毅和努力為花滑史上寫下重要的一頁！ - 雖然4A未能如期發揮但你不斷挑戰的精神超越並推升了 ...",
  //                 "thumbnails": {
  //                     "default": {
  //                         "url": "https://i.ytimg.com/vi/zt6SyZ6z804/default.jpg",
  //                         "width": 120,
  //                         "height": 90
  //                     },
  //                     "medium": {
  //                         "url": "https://i.ytimg.com/vi/zt6SyZ6z804/mqdefault.jpg",
  //                         "width": 320,
  //                         "height": 180
  //                     },
  //                     "high": {
  //                         "url": "https://i.ytimg.com/vi/zt6SyZ6z804/hqdefault.jpg",
  //                         "width": 480,
  //                         "height": 360
  //                     }
  //                 },
  //                 "channelTitle": "愛爾達體育家族 ELTA Sports",
  //                 "liveBroadcastContent": "none",
  //                 "publishTime": "2022-02-10T13:39:53Z"
  //             }
  //         },
  //         {
  //             "kind": "youtube#searchResult",
  //             "etag": "invMac7zxW06PLn7Qi36sIzMmNI",
  //             "id": {
  //                 "kind": "youtube#video",
  //                 "videoId": "2K2FpR-JwG0"
  //             },
  //             "snippet": {
  //                 "publishedAt": "2022-02-20T15:20:37Z",
  //                 "channelId": "UCCQvP4hsRW9emj0meGk15jg",
  //                 "title": "【2022北京冬奧 閉幕典禮】聖火熄滅 + 慶祝煙火升起",
  //                 "description": "隨著小朋友們的歌聲聖火熄滅+ 慶祝煙火升起2022北京冬奧正式畫下句點。",
  //                 "thumbnails": {
  //                     "default": {
  //                         "url": "https://i.ytimg.com/vi/2K2FpR-JwG0/default.jpg",
  //                         "width": 120,
  //                         "height": 90
  //                     },
  //                     "medium": {
  //                         "url": "https://i.ytimg.com/vi/2K2FpR-JwG0/mqdefault.jpg",
  //                         "width": 320,
  //                         "height": 180
  //                     },
  //                     "high": {
  //                         "url": "https://i.ytimg.com/vi/2K2FpR-JwG0/hqdefault.jpg",
  //                         "width": 480,
  //                         "height": 360
  //                     }
  //                 },
  //                 "channelTitle": "愛爾達體育家族 ELTA Sports",
  //                 "liveBroadcastContent": "none",
  //                 "publishTime": "2022-02-20T15:20:37Z"
  //             }
  //         },
  //         {
  //             "kind": "youtube#searchResult",
  //             "etag": "PZrag5xdRvUrAsxZKg0bIFDHIhg",
  //             "id": {
  //                 "kind": "youtube#video",
  //                 "videoId": "_vd4c5-gRJ0"
  //             },
  //             "snippet": {
  //                 "publishedAt": "2022-02-20T08:34:27Z",
  //                 "channelId": "UCCQvP4hsRW9emj0meGk15jg",
  //                 "title": "北京冬奧花滑表演 羽生結弦成最大焦點/愛爾達電視20220220",
  //                 "description": "2022北京冬奧最後一天花式滑冰進行優勝者表演日本花滑王子羽生結弦帶來動人又投入的演出成為場上最受矚目的焦點另外義大利 ...",
  //                 "thumbnails": {
  //                     "default": {
  //                         "url": "https://i.ytimg.com/vi/_vd4c5-gRJ0/default.jpg",
  //                         "width": 120,
  //                         "height": 90
  //                     },
  //                     "medium": {
  //                         "url": "https://i.ytimg.com/vi/_vd4c5-gRJ0/mqdefault.jpg",
  //                         "width": 320,
  //                         "height": 180
  //                     },
  //                     "high": {
  //                         "url": "https://i.ytimg.com/vi/_vd4c5-gRJ0/hqdefault.jpg",
  //                         "width": 480,
  //                         "height": 360
  //                     }
  //                 },
  //                 "channelTitle": "愛爾達體育家族 ELTA Sports",
  //                 "liveBroadcastContent": "none",
  //                 "publishTime": "2022-02-20T08:34:27Z"
  //             }
  //         },
  //         {
  //             "kind": "youtube#searchResult",
  //             "etag": "mrCeKB77AByOJTSE3H9k5RomBB4",
  //             "id": {
  //                 "kind": "youtube#video",
  //                 "videoId": "j5UYa6_a6uY"
  //             },
  //             "snippet": {
  //                 "publishedAt": "2018-02-17T06:46:48Z",
  //                 "channelId": "UCCQvP4hsRW9emj0meGk15jg",
  //                 "title": "2018平昌冬奧│2/17 花式滑冰 男單長曲 羽生結弦(日本)-金牌",
  //                 "description": "日本滑冰王子羽生結弦在平昌冬季奧運寫下歷史紀錄，今天在男子花式滑冰長曲項目拿下206.17的高分，以總和317.85分，成為66年來 ...",
  //                 "thumbnails": {
  //                     "default": {
  //                         "url": "https://i.ytimg.com/vi/j5UYa6_a6uY/default.jpg",
  //                         "width": 120,
  //                         "height": 90
  //                     },
  //                     "medium": {
  //                         "url": "https://i.ytimg.com/vi/j5UYa6_a6uY/mqdefault.jpg",
  //                         "width": 320,
  //                         "height": 180
  //                     },
  //                     "high": {
  //                         "url": "https://i.ytimg.com/vi/j5UYa6_a6uY/hqdefault.jpg",
  //                         "width": 480,
  //                         "height": 360
  //                     }
  //                 },
  //                 "channelTitle": "愛爾達體育家族 ELTA Sports",
  //                 "liveBroadcastContent": "none",
  //                 "publishTime": "2018-02-17T06:46:48Z"
  //             }
  //         }
  //     ]
  // }
  //測試用
   
    // console.log(res.data.items);
    
    let items = res.data.items;
    let newVideoData = [];
    function timeDifference(current, previous) {

      var msPerMinute = 60 * 1000;
      var msPerHour = msPerMinute * 60;
      var msPerDay = msPerHour * 24;
      var msPerMonth = msPerDay * 30;
      var msPerYear = msPerDay * 365;
  
      var elapsed = current.getTime() - previous.getTime();
  
      if (elapsed < msPerMinute) {
           return Math.round(elapsed/1000) + ' seconds ago';   
      }
  
      else if (elapsed < msPerHour) {
           return Math.round(elapsed/msPerMinute) + ' minutes ago';   
      }
  
      else if (elapsed < msPerDay ) {
           return Math.round(elapsed/msPerHour ) + ' hours ago';   
      }
  
      else if (elapsed < msPerMonth) {
          return Math.round(elapsed/msPerDay) + ' days ago';   
      }
  
      else if (elapsed < msPerYear) {
          return Math.round(elapsed/msPerMonth) + ' months ago';   
      }
  
      else {
          return Math.round(elapsed/msPerYear ) + ' years ago';   
      }
  }

    

    for (let i = 0; i < items.length; i++){
      let date = new Date(items[i]["snippet"]["publishedAt"]);
      let now = new Date();
      console.log(timeDifference(now, date));
      let publishedAt = timeDifference(now, date);
     
      

      newVideoData.push({
        imgUrl: items[i]["snippet"]["thumbnails"]["high"]["url"],
        title: items[i]["snippet"]["title"],
        channelTitle: items[i]["snippet"]["channelTitle"],
        publishedAt: publishedAt,
        description: items[i]["snippet"]["description"],
        chnlImgUrl : "",
        chnlViewCounts : "",
      });
      channelId.push(items[i]["snippet"]["channelId"]);
      videoId.push(items[i]["id"]["videoId"]);
    }
    
    for (let i = 0; i < channelId.length; i++){
      let chnlRes = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId[i]}&fields=items(id%2Csnippet%2Fthumbnails)&key=
      AIzaSyDP-lkwkmmSAoOHCXzjDaRtTTDe47xv2qE`);
      
      let chnlItems = chnlRes.data.items;
      //console.log(chnlItems);
      newVideoData[i]['chnlImgUrl'] = chnlItems[0]["snippet"]["thumbnails"]["default"]["url"];
    }
    for (let i = 0; i < videoId.length; i++){
      let chnlViewRes = await axios.get(` https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoId[i]}&key=
      AIzaSyDP-lkwkmmSAoOHCXzjDaRtTTDe47xv2qE`);
      
      let chnlItems = chnlViewRes.data.items;
      // console.log(chnlItems);
      newVideoData[i]['chnlViewCounts'] = chnlItems[0]["statistics"]["viewCount"];
      console.log('number'+chnlItems[0]["statistics"]["viewCount"]);
    }
    setVideoData(newVideoData);
    // console.log(newVideoData);     
  });
 
  useEffect(() => {
    callYTAPI();
  }, [])
  return (
    <div className="App">
      <div className="search">
        <div className="search__box">
          <input type="text" value={inputValue} onChange={(event) => { setInputValue(event.target.value) } }/>
        </div>
        <div className="search__icon" onClick={(e) => {
          console.log(inputValue);
          callYTAPI();

        }}>
          <Icon icon="akar-icons:search" />
        </div>
      </div>
      {videoData.map(({ imgUrl, title, publishedAt, channelTitle, description, chnlImgUrl, chnlViewCounts }, index) => {
        return (
          <VideoDisplay
            imgUrl={imgUrl}
            title={title}
            index={index}
            key={index}
            chnlViewCounts={chnlViewCounts}
            publishedAt={publishedAt}
            channelTitle={channelTitle}
            description={description}
            chnlImgUrl = {chnlImgUrl}
            tag={"新影片"}
          />
        );
      })}
    </div>
  );
}

export default App;
