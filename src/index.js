import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </Router>,
    document.getElementById('root')
);