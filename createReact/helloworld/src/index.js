import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// if the import is non-default and you wanted to use some other name
// (for some reason), you can do '___ as ___' for the name. So in this
// case, 'App as Pizza'.
import Pet from './Pet';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Pet />, document.getElementById('root'));
registerServiceWorker();
