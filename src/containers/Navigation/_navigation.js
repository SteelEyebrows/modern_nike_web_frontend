import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { authAction } from "../../store/actions";
import { withRouter } from "react-router-dom";
import {Navigation} from '../../components';
import gsap, { Sine,TimelineMax,Linear,Power4 } from 'gsap';
import storage from '../../lib/storage';

const NavigationContainer = ({history,match}) =>{
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
	const reverseLoginModal = () => setIsLoginModalVisible(!isLoginModalVisible);
    const escLoginModal = () => setIsLoginModalVisible(false);
	
    //get data
    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();
	const postLogOut =()=>dispatch(authAction.logOutRequest());
	const goToRegister=()=>history.push(`/register`);
   
	//animation
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
			height:'300px',
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
                onMouseEnterHandler={onMouseEnterHandler}
                onMouseLeaveHandler={onMouseLeaveHandler}
                hoverMenu1_enter={hoverMenu1_enter}
                hoverMenu2_enter={hoverMenu2_enter}
                hoverMenu3_enter={hoverMenu3_enter}
                hoverMenu4_enter={hoverMenu4_enter}
				hoverMenu5_enter={hoverMenu5_enter}
				
				goToRegister={goToRegister}
				postLogOut={postLogOut}
				isAuthenticated={isAuthenticated}

				reverseLoginModal={reverseLoginModal}
                escLoginModal={escLoginModal}
                isLoginModalVisible={isLoginModalVisible}
            />
    
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
	user: rootReducer.auth.user,

});

export default withRouter(NavigationContainer);
