import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {App as AntApp} from 'antd';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux";
import store, {persistor} from "@core/store/redux";
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <PersistGate loading={<AntApp/>} persistor={persistor}>
                    <AntApp>
                        <App/>
                    </AntApp>
                </PersistGate>
            </Provider>
        </Router>
    </React.StrictMode>
);
