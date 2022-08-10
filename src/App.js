import React, { useState } from 'react';
import { userData, userInfo } from './common/consts';
import { getAverageData, getScoreType } from './common/utils';
import './App.css';

function App() {
  const [current, setCurrent] = useState(-1);
  const score = getAverageData(userData);

  const renderBar = (list) => {
    return list.map((listItem, idx) => {
      const liClass = getScoreType(listItem.score);
      const commonAnimationDelay = `${idx * 100}ms`;
      const dayAnimationDelay = `${idx * 100 + 600}ms`;
      return (
        <li
          className={`cnt-list-item ${liClass} ${
            idx === current ? 'active' : ''
          }`}
          onClick={() => setCurrent(idx)}
          key={listItem.day}
        >
          <div
            className="cnt-list-item--bar"
            style={{
              maxHeight: `${(listItem.score * 2.8) / 20 || 4.4}rem`,
              animationDelay: commonAnimationDelay,
            }}
          >
            <p className="cnt-list-item--score">{listItem.score || ''}</p>
            <div
              className="cnt-list-item--icon"
              style={{ animationDelay: commonAnimationDelay }}
            ></div>
          </div>
          <p
            className="cnt-list-item--day"
            style={{ animationDelay: dayAnimationDelay }}
          >
            {listItem.day}
          </p>
        </li>
      );
    });
  };

  return (
    <>
      <header className="hd">
        <div className="hd-return"></div>
        <p className="hd-title">历史心情指数</p>
      </header>
      <main className="cnt">
        <section className="cnt-user">
          <div className="cnt-user-container">
            <img
              className="cnt-user-avatar"
              src={userInfo.avatar}
              alt="Avatar"
            />
            <p className="cnt-user-name">{userInfo.name}</p>
          </div>
          <p className="cnt-user-score">{score}</p>
          <p className="cnt-user-desc">周平均心情指数</p>
          <div className="breakline"></div>
        </section>
        <ul className="cnt-list">{renderBar(userData)}</ul>
      </main>
    </>
  );
}

export default App;
