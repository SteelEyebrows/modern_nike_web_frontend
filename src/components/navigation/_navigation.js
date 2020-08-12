import React, { StatelessComponent,useState } from 'react';
import {Navbar,MenuContainer,Lnb,Menu,MenuComp,SubMenu} from './_style';
import {LoginContainer} from '../../containers'

// https://codepen.io/jonathan/pen/QOrjJj
// https://webdesign.tutsplus.com/tutorials/how-to-build-a-mega-menu-with-flexbox--cms-33540


const Navigaition = ({ 

	state,
	onMouseEnterHandler,
    onMouseLeaveHandler,
    hoverMenu1_enter,
    hoverMenu2_enter,
    hoverMenu3_enter,
    hoverMenu4_enter,
    hoverMenu5_enter
}) => {

	return (
		<Navbar>
			<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png"} alt="logo" className="logo" />
			<LoginContainer />
			<MenuContainer>
				<div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} >
					<Menu className="menu">
						<ul>
						<MenuComp onMouseEnter={hoverMenu1_enter} className={state.isActive1 ? "active" : ""} >
							<a href="#" >Company</a>
						</MenuComp>
						<MenuComp onMouseEnter={hoverMenu2_enter} className={state.isActive2 ? "active" : ""}>
							<a href="#" >MEN</a>
						</MenuComp>
						<MenuComp onMouseEnter={hoverMenu3_enter} className={state.isActive3 ? "active" : ""}>
							<a href="#" >WOMEN</a>
						</MenuComp>
						<MenuComp onMouseEnter={hoverMenu4_enter} className={state.isActive4 ? "active" : ""}>
							<a href="#" >KIDS</a>
						</MenuComp>
						<MenuComp onMouseEnter={hoverMenu5_enter} className={state.isActive5 ? "active" : ""}>
							<a href="#" >CS</a>
						</MenuComp>
						</ul>
					</Menu>

					<SubMenu className="submenu">
						<ul onMouseEnter={hoverMenu1_enter} className="menu-list">
							<li><a href="#">Home</a></li>
							<li><a href="#">Holidays</a></li>
							<li><a href="#">About</a></li>
							<li><a href="#">Blog</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
						<ul onMouseEnter={hoverMenu2_enter} className="menu-list">
							<li><a href="#">Shoes</a></li>
							<li><a href="#">Clothing</a></li>
							<li><a href="#">Accessories</a></li>
							<li><a href="#">Equipment</a></li>
							<li><a href="#">Jordan</a></li>
						</ul>
						<ul onMouseEnter={hoverMenu3_enter} className="menu-list">
							<li><a href="#">Shoes</a></li>
							<li><a href="#">Clothing</a></li>
							<li><a href="#">Accessories</a></li>
							<li><a href="#">Equipment</a></li>
							<li><a href="#">Jordan</a></li>
						</ul>
						<ul onMouseEnter={hoverMenu4_enter} className="menu-list">
							<li><a href="#">Shoes</a></li>
							<li><a href="#">Clothing</a></li>
							<li><a href="#">Accessories</a></li>
							<li><a href="#">Equipment</a></li>
							<li><a href="#">Jordan</a></li>
						</ul>
						<ul onMouseEnter={hoverMenu5_enter} className="menu-list">
							<li><a href="#">FnQ</a></li>
							<li><a href="#">Contact us</a></li>
						</ul>
					</SubMenu>
				</div>
			</MenuContainer>
		</Navbar>
		);
};


export default Navigaition;
