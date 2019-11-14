import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alert from '../components/layout/Alert';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center'
};

const App = () => {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Fragment>
          <Header />
          <Alert />
          <div className='container'>
            <Dashboard />
          </div>
        </Fragment>
      </AlertProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
