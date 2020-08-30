import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    registerMicroApps,
    addGlobalUncaughtErrorHandler,
    setDefaultMountApp,
    initGlobalState,
    runAfterFirstMounted,
    start,
} from "qiankun";

/**
 * Step2 注册子应用
 */

registerMicroApps(
    [
        {
            name: 'react16',
            entry: '//localhost:7100',
            container: '#frame',
            activeRule: '/react16',
        }
    ],
    {
        beforeLoad: (app: any) => {
            console.log("before load", app.name);
            return Promise.resolve();
        },
    },
);

const {onGlobalStateChange, setGlobalState} = initGlobalState({
    user: 'qiankun',
});

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

setGlobalState({
    ignore: 'master',
    user: {
        name: 'master',
    },
});

/**
 * Step3 设置默认进入的子应用
 */
// setDefaultMountApp('/react16');

/**
 * Step4 启动应用
 */
start();

runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted');
});

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
