import React from 'react';
import Gallery from './components/Gallery';

React.render(
	<Gallery images={['./images/router.png', './images/router.png', './images/router.png']} />,
	document.getElementById('gallery'));
