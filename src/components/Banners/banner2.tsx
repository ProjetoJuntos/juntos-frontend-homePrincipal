import React from 'react';
import banner2 from '../../img/banner2.png';
import style from '../../css/bannersStyle.module.css';

class Banner2 extends React.Component {

	render() {
		return (
			<div>
				<img id='banner2' className={style.bannerStyle} src={banner2} alt='banner2' />
				<h1>Ranking</h1>
			</div>
		);
	}
}

export default Banner2;