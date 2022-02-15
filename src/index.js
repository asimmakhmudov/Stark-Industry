import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import https from 'https';
const port = process.env.PORT || 3000;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
