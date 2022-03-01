import _ from 'date-fns';
import headerBodyFooter from './dom-functions/DOM-prime-divs.js';
import createHead from './dom-functions/DOM-head.js';
import createBody from './dom-functions/DOM-body.js';
import createFooter from './dom-functions/DOM-footer.js';
import addProjectButtonEvent from './functions/add-project-button-event.js';
import './style.css';

headerBodyFooter();
createHead();
createBody();
createFooter();
addProjectButtonEvent();
