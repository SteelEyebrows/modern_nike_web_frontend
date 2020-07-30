import React, { StatelessComponent,useState } from 'react';
import gsap, { Sine,TimelineMax,Linear,Power4 } from 'gsap';
import {Menu,MenuComp,SubMenu} from './_style';
// https://codepen.io/jonathan/pen/QOrjJj
// https://webdesign.tutsplus.com/tutorials/how-to-build-a-mega-menu-with-flexbox--cms-33540


const Navigaition = ({ page, ...props }) => {
	const [state, setState] = useState({
		isActive1: false,
		isActive2: false,
		isActive3: false,
		isActive4: false,
		isActive5: false,
	  });

	const onMouseEnterHandler = () => {
		let tl = new TimelineMax({paused:true});
		tl.to(".submenu", 0.1, { //메뉴 내리기
			top:'-3vh',
			opacity:1,
			ease:Sine.easeOut
		  }).play();
	  };

	  const onMouseLeaveHandler = () => {
		let tl2 = new TimelineMax({paused:true});
		tl2.to(".submenu", 0.1, {
			top:'-25vh',
			opacity:0,
			ease:Sine.easeOut
		  }).play();

		setState({ 
			isActive1: false,
			isActive2: false,
			isActive3: false,
			isActive4: false,
			isActive5: false 
		});
	  };

	  const hoverMenu1_enter = () => {
		setState({ 
			isActive1: true,
			isActive2: false,
			isActive3: false,
			isActive4: false,
			isActive5: false });
	  };
	  const hoverMenu2_enter = () => {
		setState({ 
			isActive1: false,
			isActive2: true,
			isActive3: false,
			isActive4: false,
			isActive5: false });
	  };
	  const hoverMenu3_enter = () => {
		setState({ 
			isActive1: false,
			isActive2: false,
			isActive3: true,
			isActive4: false,
			isActive5: false });
	  };
	  const hoverMenu4_enter = () => {
		setState({ 
			isActive1: false,
			isActive2: false,
			isActive3: false,
			isActive4: true,
			isActive5: false });
	  };
	  const hoverMenu5_enter = () => {
		setState({ 
			isActive1: false,
			isActive2: false,
			isActive3: false,
			isActive4: false,
			isActive5: true });
	  };

	return (
		<div className="navigation" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
			<div>
			<Menu className="menu">
				<MenuComp onMouseEnter={hoverMenu1_enter} className={state.isActive1 ? "active" : ""} >
					<a href="#" >Company</a>
				</MenuComp>
				<MenuComp onMouseEnter={hoverMenu2_enter} className={state.isActive2 ? "active" : ""}>
					<a href="#" >Future</a>
				</MenuComp>
				<MenuComp onMouseEnter={hoverMenu3_enter} className={state.isActive3 ? "active" : ""}>
					<a href="#" >Business</a>
				</MenuComp>
				<MenuComp onMouseEnter={hoverMenu4_enter} className={state.isActive4 ? "active" : ""}>
					<a href="#" >Products</a>
				</MenuComp>
				<MenuComp onMouseEnter={hoverMenu5_enter} className={state.isActive5 ? "active" : ""}>
					<a href="#" >Service</a>
				</MenuComp>
			</Menu>
			</div>
			<SubMenu className="submenu">
				<ul onMouseEnter={hoverMenu1_enter} className="menu-list">
					<li><a href="#">Home</a></li>
					<li><a href="#">Holidays</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
				<ul onMouseEnter={hoverMenu2_enter} className="menu-list">
					<li><a href="#">Home</a></li>
					<li><a href="#">Holidays</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
				<ul onMouseEnter={hoverMenu3_enter} className="menu-list">
					<li><a href="#">Home</a></li>
					<li><a href="#">Holidays</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
				<ul onMouseEnter={hoverMenu4_enter} className="menu-list">
					<li><a href="#">Home</a></li>
					<li><a href="#">Holidays</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
				<ul onMouseEnter={hoverMenu5_enter} className="menu-list">
					<li><a href="#">Home</a></li>
					<li><a href="#">Holidays</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</SubMenu>
		</div>
		);
};


export default Navigaition;
