import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { productsAction,detailAction } from "../../store/actions";
import { withRouter } from "react-router-dom";
import {Products} from '../../components';
import useIntersection from 'react-use/lib/useIntersection';
import gsap, { Sine,TimelineMax,Linear,Power4 } from 'gsap';

const ProductContainer = ({history,match}) =>{

//**********data****************

    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();

    const getProducts =()=>dispatch(productsAction.productsRequest());
    const resetDetail =()=>dispatch(detailAction.detailSuccess({}));

    React.useEffect(() => {
        getProducts();
        resetDetail();
    },[]);

//**********animation****************

    const [ tween, setTween ] = React.useState();
	const [currentPage,setCurrentPage] = React.useState(1);
	const [postPerPage,setPostPerPage] = React.useState(6);
  	const trigger = React.useRef(null);
  
	const intersection = useIntersection(trigger, { //스크롤 반응
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	});
    const indexOfLastPost =  currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentPost = data.list.slice(indexOfFirstPost,indexOfLastPost);
	const paginate = pageNumber => setCurrentPage(pageNumber);
    
    React.useEffect(
		() => {
		if(tween)tween.restart();
		if (intersection && intersection.isIntersecting) {
			setTween(
				gsap.to(".container", 0.3, {
					opacity: 1,
					y: 0,
					ease: Sine.easeIn,
					stagger: 0.2,
				}),
			);
		} else if (tween && tween.paused) {
			tween.reverse();
		}
		},
		[ intersection,currentPage ],
    );
    
//**********router****************

    const goDetail=(id,color)=>history.push(`/detail/${id}/${color}`);

    return(
        <>
        {
            data.isFatching?
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                loading
            </div>:
            <Products 
                list={data.list}
                trigger={trigger}
                paginate={paginate}
                postPerPage={postPerPage}
                currentPost={currentPost}
                goDetail={goDetail} 
            />
        } 
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    list:rootReducer.products.list,
});

export default withRouter(ProductContainer);
