import { StrictMode } from 'react';
import { render } from 'react-dom';
import './assets/styles/index.css';
import App from './pages/App';

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);
