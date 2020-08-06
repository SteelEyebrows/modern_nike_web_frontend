import React, { StatelessComponent,useState } from 'react';
import gsap, { Sine,TimelineMax,Linear,Power4 } from 'gsap';
import { Auth} from 'aws-amplify';
import {Navbar,MenuContainer,Lnb,Menu,MenuComp,SubMenu} from './_style';
import Login from './login'
// https://codepen.io/jonathan/pen/QOrjJj
// https://webdesign.tutsplus.com/tutorials/how-to-build-a-mega-menu-with-flexbox--cms-33540


const Navigaition = ({ user,isAuthenticated,postLogin,postLogOut }) => {
	const [isHover, set] = useState(false);
	const [state, setState] = useState({
		isActive1: false,
		isActive2: false,
		isActive3: false,
		isActive4: false,
		isActive5: false,
	  });
	  const [loginVisible, setLoginVisible] = useState(false);

	  const toggleLogin = () => {
		setLoginVisible(!loginVisible);
	  };
	const onMouseEnterHandler = () => {
		let tl = new TimelineMax({paused:true});
		tl.to(".submenu", 0.1, { //메뉴 내리기
			height:'250px',
			opacity:1,
			ease:Sine.easeOut
		  }).play();
	  };

	  const onMouseLeaveHandler = () => {
		let tl2 = new TimelineMax({paused:true});
		tl2.to(".submenu", 0.1, {
			height:'0px',
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
		<Navbar>
			<img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png"} alt="logo" className="logo" />
			<Lnb>
				<div className="mypage">
					{
						isAuthenticated?
						<div className="mypage__authenticated">
							{user.username}님 반갑습니다!
							<div onClick={postLogOut} className="mypage__authenticated__logout">
								logout
							</div>
						</div>:
						<div className="mypage__unauthenticated">
							<div className="login" onClick={toggleLogin}>Login /</div>
							<Login postLogin={postLogin} close={toggleLogin} show={loginVisible} />
							<p>       </p>
							<a href="#" >장바구니</a>
						</div>
					}

				</div>
			</Lnb>
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
