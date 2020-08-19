import React, { StatelessComponent,useState } from 'react';
import {MobileNavbar,MenuContainer,UpperMenu,Menu,MenuComp,SubMenu} from './_style';
import {LoginFormContainer} from '../../containers'
import {Modal} from '../Common'
import { useMediaQuery } from 'react-responsive';
// https://codepen.io/jonathan/pen/QOrjJj
// https://webdesign.tutsplus.com/tutorials/how-to-build-a-mega-menu-with-flexbox--cms-33540

const Navigaition = ({ 
	state,
	history,
	onMouseEnterHandler,
    onMouseLeaveHandler,
    hoverMenu1_enter,
    hoverMenu2_enter,
    hoverMenu3_enter,

	postLogOut,
	isAuthenticated,
	reverseLoginModal,
    escLoginModal,
	isLoginModalVisible,
	
	reverseMobileMenuModal,
	escMobileMenuModal,
	isMobileMenuModalVisible
}) => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
	return (
		<>
		{
			isTabletOrMobile?
			<MobileNavbar>
					<div className="logo" >
						<img 
							src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png"} 
							alt="logo" 
						/>
					</div>
					<button onClick={reverseMobileMenuModal}>
						<img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/15211315791553239378-512.png" />
					</button>
						<Modal 
							content={
							<div>
								<ul>
									<li onClick={()=>history.push('/')}><h2>COMPANY</h2></li>
									<li onClick={()=>history.push('/products/man')}><h2>MAN</h2></li>
									<li onClick={()=>history.push('/products/woman')}><h2>WOMAN</h2></li>
								</ul>
							</div>
							} 
							show={isMobileMenuModalVisible} 
							reverse={reverseMobileMenuModal}
							esc={escMobileMenuModal}
						/>   
    		</MobileNavbar>
			:
			<>
			<UpperMenu>
				<div 
					onClick={()=>history.push(`/cs`)} 
					className="cs" 
				>
						고객센터
				</div>
				<div onClick={()=>history.push(`/cart`)} 
					className="cart" >
						<img
							className="cart"
							src="https://image.flaticon.com/icons/png/512/263/263142.png" 
							alt="cart"
						/>
				</div>
      			{
					isAuthenticated?
					<div className="authenticated">
						<div>님 반갑습니다!</div>
						<div onClick={postLogOut} className="authenticated__logout">
							logout
						</div>
					</div>
            
            	:

					<div className="unauthenticated">
						<div className="register" onClick={()=>history.push(`/register`)}>회원가입</div>/
						<div className="login" onClick={reverseLoginModal}>로그인</div>
						<Modal 
							content={<LoginFormContainer/>} 
							show={isLoginModalVisible} 
							reverse={reverseLoginModal}
							esc={escLoginModal}
						/>   
					</div>
				}
    		</UpperMenu>
			<MenuContainer>
			<img 
				src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png"} 
				alt="logo" 
				className="logo" 
				onClick={()=>history.push(`/`)}
			/>
				<div 
					onMouseEnter={onMouseEnterHandler} 
					onMouseLeave={onMouseLeaveHandler} 
				>
					<Menu className="menu">
						<ul>
						<MenuComp 
							onClick={()=>history.push(`/home`)} 
							onMouseEnter={hoverMenu1_enter} 
							className={state.isActive1 ? "active" : ""} 
						>
							<a href="/cs" >Company</a>
						</MenuComp>
						<MenuComp 
							onClick={()=>history.push(`/products/man`)} 
							onMouseEnter={hoverMenu2_enter} 
							className={state.isActive2 ? "active" : ""}
						>
							<a href="#" >MAN</a>
						</MenuComp>
						<MenuComp 
							onClick={()=>history.push(`/products/woman`)}  
							onMouseEnter={hoverMenu3_enter} 
							className={state.isActive3 ? "active" : ""}
						>
							<a href="#" >WOMAN</a>
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
					</SubMenu>
				</div>
			</MenuContainer>
			</>
		}
		</>
		);
};


export default Navigaition;
