import React from 'react';
import ReactDom from 'react-dom';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDom.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();