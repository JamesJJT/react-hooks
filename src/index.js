import react from 'react';
import reactDOM from 'react-dom';
import { createRoot } from 'react-dom';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
