import React, { Component } from "react";
import './App.css';

const App = () => {
  return (
      <div className='app-wrapper'>
        <header className='header'>
            <img src='https://e7.pngegg.com/pngimages/547/294/png-clipart-swastika-croix-gammee-nazie-nazism-nazi-germany-operation-paperclip-others-angle-text.png' />
        </header>
          <nav className='nav'>
              <div>
                 <a>Profile</a>
              </div>
              <div>
                  <a>Messages</a>
              </div>
              <div>
                  <a>News</a>
              </div>
              <div>
                  <a>Music</a>
              </div>
              <div>
                  <a>Settings</a>
              </div>
          </nav>
          <div className='content'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYsVdzfNcTFfiyfPbK_s_TkxjI1xg-ysYFw&usqp=CAU' />
          <div>
              ava + desc
          </div>
          <div>
              My posts
              <div>
                  new post
              </div>
              <div>
                  <div>
                      post 1
                  </div>
                   <div>
                      post 2
                  </div>
             </div>
          </div>
          </div>
      </div>);
}


export default App;