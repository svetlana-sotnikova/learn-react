import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import elem from './elem.js';
import FormExample from './FormExample.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker()

ReactDOM.render(
  <FormExample text="Hi, man!" />,
  document.getElementById('root')
);
