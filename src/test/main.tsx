import { GProvider } from '../index.ts';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <GProvider settings={{
        link: {
            variant: 'textLike',
        },
        // say: {
        //     variant: 'bigName'
        // }
    }}>
        <App />
    </GProvider>,
);
