import React, { Component } from 'react';

export default class Gallery extends Component {
	constructor() {
		super();
		this.state = {index: 0};
	}

	render() {
		return (
			<div>
			<ul className='gallery__images'>
			{this.props.images.map((image, i) => {
				let className = 'gallery__image';
				let current = this.state.index;
				let size = this.props.images.length - 1;

				if (i === current) {
					className += ' current';
				}
				if (i === current - 1 || (current === 0 && i === size)) {
					className += ' prev';
				}
				if (i === current + 1 || (current === size && i === 0)) {
					className += ' next';
				}
				return (
					<li className={className}><img src={image} /></li>
				);
			})}
			</ul>

			<i className='gallery__next' onClick={() => {
				let size = this.props.images.length - 1;
				let next = this.state.index === size ? 0 : this.state.index + 1;
				this.setState({index: next});
			}} />

			<i className='gallery__prev' onClick={() => {
				let size = this.props.images.length - 1;
				let next = this.state.index === 0 ? size : this.state.index - 1;
				this.setState({index: next});
			}} />
			</div>
		);
	}
}
