import React from 'react';
import ReactDom from 'react-dom';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

ReactDom.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();