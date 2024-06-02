import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { WOW } from 'wowjs';
import 'animate.css/animate.min.css';
import reportWebVitals from './reportWebVitals';

const Root = () => {
  React.useEffect(() => {
    new WOW().init();
  }, []);

  return <App />;
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
