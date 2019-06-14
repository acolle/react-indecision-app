// Import React libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import components
import IndecisionApp from './components/IndecisionApp';

// Import CSS files
import './styles/styles.scss';

// Reset CSS style for cross-browser development
import 'normalize.css/normalize.css';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
