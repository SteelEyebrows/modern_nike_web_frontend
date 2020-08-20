import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { authAction } from "../../store/actions";
import { withRouter } from "react-router-dom";
import {Navigation} from '../../components';
import gsap, { Sine } from 'gsap';
import storage from '../../lib/storage';

const NavigationContainer = ({history,match}) =>{
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
	const [isMobileMenuModalVisible, setIsMobileMenuModalVisible] = useState(false);
	
	const reverseMobileMenuModal = () => setIsMobileMenuModalVisible(!isMobileMenuModalVisible);
    const escMobileMenuModal = () => setIsMobileMenuModalVisible(false);
	
	const reverseLoginModal = () => setIsLoginModalVisible(!isLoginModalVisible);
    const escLoginModal = () => setIsLoginModalVisible(false);

    //get data
    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();
	const postLogOut =()=>dispatch(authAction.logOutRequest());

   
	//animation
    const [state, setState] = useState({
		isActive1: false,
		isActive2: false,
		isActive3: false,
	  });
    const onMouseEnterHandler = () => {
		let tl = gsap.timeline({paused:true});
		tl.to(".submenu", 0.1, { //메뉴 내리기
			height:'300px',
			opacity:1,
			ease:Sine.easeOut
		  }).play();
	  };

	const onMouseLeaveHandler = () => {
		let tl2 = gsap.timeline({paused:true});
		tl2.to(".submenu", 0.1, {
			height:'0px',
			opacity:0,
			ease:Sine.easeOut
		  }).play();

		setState({ 
			isActive1: false,
			isActive2: false,
			isActive3: false,
		});
	  };

	const hoverMenu1_enter = () => {
		setState({ 
			isActive1: true,
			isActive2: false,
			isActive3: false,
		});
	  };
	const hoverMenu2_enter = () => {
		setState({ 
			isActive1: false,
			isActive2: true,
			isActive3: false,
		});
	  };
	const hoverMenu3_enter = () => {
		setState({ 
			isActive1: false,
			isActive2: false,
			isActive3: true,		
		});
	  };
	

	  useEffect(
		() => {
			const userData = storage.get('AUTH');
			if (userData!=="undefined") setIsAuthenticated(true);
			else setIsAuthenticated(false);
		},
		[data.user],
    );
    return(
        <>
            <Navigation 
				state={state}
				history={history}
                onMouseEnterHandler={onMouseEnterHandler}
                onMouseLeaveHandler={onMouseLeaveHandler}
                hoverMenu1_enter={hoverMenu1_enter}
                hoverMenu2_enter={hoverMenu2_enter}
                hoverMenu3_enter={hoverMenu3_enter}

				postLogOut={postLogOut}
				isAuthenticated={isAuthenticated}

				reverseLoginModal={reverseLoginModal}
				escLoginModal={escLoginModal}
				isLoginModalVisible={isLoginModalVisible}

				reverseMobileMenuModal={reverseMobileMenuModal}
				escMobileMenuModal={escMobileMenuModal}
				isMobileMenuModalVisible={isMobileMenuModalVisible}
            />
    
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
	user: rootReducer.auth.user,

});

export default withRouter(NavigationContainer);
