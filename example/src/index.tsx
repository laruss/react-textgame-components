import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyCounter } from 'react-textgame-components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <div>
            <h2>Default counter</h2>
            <MyCounter />
        </div>
        <hr />
        <div>
            <h2>Counter with initial value</h2>
            <MyCounter value={10} />
        </div>
    </React.StrictMode>,
);
