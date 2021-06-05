import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PostStoreProvider from "./Store/PostStore";
import CommentStoreProvider from './Store/CommentStore';


ReactDOM.render(
  <React.StrictMode>
    <PostStoreProvider>
      <CommentStoreProvider>
        <App />
      </CommentStoreProvider>

    </PostStoreProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
