import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {App as AntApp} from 'antd';
import {BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router>
            {/*<Provider store={}>*/}
                <AntApp>
                    <App/>
                </AntApp>
            {/*</Provider>*/}
        </Router>
    </React.StrictMode>
);
