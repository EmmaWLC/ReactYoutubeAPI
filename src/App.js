// import logo from './logo.svg';
// import './App.css';
// import { Router, Route, Switch } from 'react-router-dom'
// import { useState, useEffect } from 'react'
import { Icon } from "@iconify/react";

function App() {
  return (
    <div className="App">
      <div className="search">
        <div className="search__box">
          <input type="text" />
        </div>
        <div className="search__icon">
          <Icon icon="akar-icons:search" />
        </div>
      </div>
      <div className="videoDisplay">
        <div className="videoDisplay__img"></div>
        <div className="videoDisplay__context">
          <h1>Title</h1>
          <div className="videoDisplay__context__detail">
            <div className="videoDisplay__context__detail__review">觀看次數：</div>
            <div className="videoDisplay__context__detail__time">小時前</div>
          </div>
          <div className="videoDisplay__channel">
            <div className="videoDisplay__channel__img">img</div>
            <div className="videoDisplay__channel__name">TVBS</div>
          </div>
          <div className="videoDisplay__context__description">
            <p>jiji</p>
          </div>
          <div className="videoDisplay__context__tag">
            <p>新影片</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
