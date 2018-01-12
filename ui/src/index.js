//react components
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// other Modules
import Router from './routes';
import registerServiceWorker from './registerServiceWorker';

/* store from redux */
import store from './reducers/index';

/* bootstrap styling */
import 'bootstrap-loader';
/* font awesome stylesheet */
import 'font-awesome/css/font-awesome.css';

/* reset styling */
import 'common-assets/styles/reset-style';

/* render our app */
ReactDOM.render((
 <Provider store={store}>
    	<Router />
  </Provider>
  ),
  document.getElementById('root')
);

registerServiceWorker();
